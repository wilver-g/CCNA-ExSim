// app.js

/**
 * Fisher-Yates (Knuth) Shuffle Algorithm
 * Randomly shuffles an array in-place.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Shuffles the questions list and randomizes option choices for standard questions
 * while keeping drag-and-drop questions intact and updating correct answer indices.
 */
function prepareExamData(questionsList) {
    if (!Array.isArray(questionsList)) return;

    // 1. Shuffle the overall order of questions
    shuffleArray(questionsList);

    // 2. Process each question for option shuffling
    questionsList.forEach(q => {
        // Skip option shuffling for drag-and-drop questions
        if (q.type === "dragdrop") return;

        if (!q.options || !Array.isArray(q.options)) return;

        // Pair each option with its original index
        const indexedOptions = q.options.map((opt, idx) => ({
            text: opt,
            originalIndex: idx
        }));

        // Shuffle option choices
        shuffleArray(indexedOptions);

        // Update question options with shuffled text order
        q.options = indexedOptions.map(item => item.text);

        // Resolve correct answer key property (supports q.correct or q.answer)
        const rawCorrect = q.correct !== undefined ? q.correct : q.answer;

        // Map correct answer indices to match the new option order
        if (Array.isArray(rawCorrect)) {
            const newCorrectIndices = rawCorrect.map(oldIdx =>
                indexedOptions.findIndex(item => item.originalIndex === oldIdx)
            );
            q.correct = newCorrectIndices;
            q.answer = newCorrectIndices;
        } else if (rawCorrect !== undefined && rawCorrect !== null) {
            const newCorrectIndex = indexedOptions.findIndex(
                item => item.originalIndex === rawCorrect
            );
            q.correct = newCorrectIndex;
            q.answer = newCorrectIndex;
        }
    });
}

// Initialize application when the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    if (typeof questions !== "undefined") {
        prepareExamData(questions);
    }

    if (typeof Exam !== "undefined" && typeof Exam.init === "function") {
        Exam.init();
    }
});