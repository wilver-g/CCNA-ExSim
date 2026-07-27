// app.js

/**
 * Fisher-Yates (Knuth) Shuffle Algorithm
 * Randomly shuffles an array in-place and returns it for convenient reuse.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const EXAM_QUESTION_COUNT = 60;
const QUESTION_BANK_STORAGE_KEY = "ccna-exsim-question-bank-v1";
const DISPLAY_SETTINGS_STORAGE_KEY = "ccna-exsim-display-settings-v1";
const DEFAULT_QUESTION_BANK = structuredClone(questions);

/**
 * Builds one exam from a random, non-repeating selection of the full question bank.
 * Cloning protects the source bank while answer choices are shuffled for this attempt.
 */
function createRandomExam(questionBank, questionCount = EXAM_QUESTION_COUNT) {
    if (!Array.isArray(questionBank)) return [];

    const selectedQuestions = shuffleArray([...questionBank])
        .slice(0, Math.min(questionCount, questionBank.length));

    return selectedQuestions.map(question => structuredClone(question));
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

function isValidQuestion(question) {
    if (!question || typeof question !== "object" || !question.question || !question.domain || !question.type) return false;

    const correct = question.correct !== undefined ? question.correct : question.answer;
    if (question.type === "dragdrop") {
        return Array.isArray(question.draggables) && question.draggables.length > 1 &&
            Array.isArray(question.dropzones) && question.dropzones.length === question.draggables.length &&
            Array.isArray(correct) && correct.length === question.dropzones.length;
    }

    return Array.isArray(question.options) && question.options.length > 1 && correct !== undefined;
}

function getSavedQuestionBank() {
    try {
        const saved = JSON.parse(localStorage.getItem(QUESTION_BANK_STORAGE_KEY));
        return Array.isArray(saved) && saved.length > 0 && saved.every(isValidQuestion) ? saved : null;
    } catch {
        return null;
    }
}

function saveQuestionBank(questionBank) {
    localStorage.setItem(QUESTION_BANK_STORAGE_KEY, JSON.stringify(questionBank));
}

function setStatus(message, isError = false) {
    const status = document.getElementById("questionBankStatus");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("error", isError);
}

function exportQuestionBank(questionBank) {
    const exportData = {
        format: "ccna-exsim-question-bank",
        version: 1,
        exportedAt: new Date().toISOString(),
        questions: questionBank
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ccna-exsim-question-bank.json";
    link.click();
    URL.revokeObjectURL(url);
    setStatus(`Exported ${questionBank.length} questions.`);
}

function mergeQuestionBanks(currentBank, importedBank) {
    const existingQuestions = new Set(currentBank.map(question => question.question.trim().toLowerCase()));
    const additions = importedBank.filter(question => {
        const key = question.question.trim().toLowerCase();
        if (existingQuestions.has(key)) return false;
        existingQuestions.add(key);
        return true;
    });
    return { merged: [...currentBank, ...additions], additions };
}

function importQuestionBank(file, currentBank, onImported) {
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            const importedBank = Array.isArray(parsed) ? parsed : parsed.questions;
            if (!Array.isArray(importedBank) || importedBank.length === 0 || !importedBank.every(isValidQuestion)) {
                throw new Error("The file does not contain valid CCNA ExSim questions.");
            }

            const { merged, additions } = mergeQuestionBanks(currentBank, importedBank);
            if (additions.length === 0) {
                setStatus("No new questions imported; matching questions were already in the bank.");
                return;
            }

            saveQuestionBank(merged);
            if (typeof onImported === "function") onImported(merged);
            setStatus(`Imported ${additions.length} new questions. Reload to begin a fresh exam with the updated bank.`);
        } catch (error) {
            setStatus(error.message || "The selected file could not be imported.", true);
        }
    };
    reader.readAsText(file);
}

function applyDisplaySettings(settings) {
    const body = document.body;
    body.classList.toggle("theme-dark", settings.darkMode);
    body.classList.toggle("high-contrast", settings.highContrast);
    body.classList.remove("font-large", "font-xlarge");
    if (settings.fontScale === "large") body.classList.add("font-large");
    if (settings.fontScale === "xlarge") body.classList.add("font-xlarge");

    document.getElementById("themeToggle")?.setAttribute("aria-pressed", String(settings.darkMode));
    document.getElementById("contrastToggle")?.setAttribute("aria-pressed", String(settings.highContrast));
    const fontScale = document.getElementById("fontScale");
    if (fontScale) fontScale.value = settings.fontScale;
}

function setupUtilities(questionBank) {
    let managedQuestionBank = questionBank;
    let settings = { darkMode: false, highContrast: false, fontScale: "normal" };
    try {
        settings = { ...settings, ...JSON.parse(localStorage.getItem(DISPLAY_SETTINGS_STORAGE_KEY)) };
    } catch { /* Use default display settings. */ }
    applyDisplaySettings(settings);

    const saveSettings = () => localStorage.setItem(DISPLAY_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    document.getElementById("themeToggle")?.addEventListener("click", () => {
        settings.darkMode = !settings.darkMode;
        applyDisplaySettings(settings);
        saveSettings();
    });
    document.getElementById("contrastToggle")?.addEventListener("click", () => {
        settings.highContrast = !settings.highContrast;
        applyDisplaySettings(settings);
        saveSettings();
    });
    document.getElementById("fontScale")?.addEventListener("change", event => {
        settings.fontScale = event.target.value;
        applyDisplaySettings(settings);
        saveSettings();
    });

    document.getElementById("exportBankBtn")?.addEventListener("click", () => exportQuestionBank(managedQuestionBank));
    document.getElementById("importBankInput")?.addEventListener("change", event => {
        const file = event.target.files?.[0];
        if (file) importQuestionBank(file, managedQuestionBank, merged => { managedQuestionBank = merged; });
        event.target.value = "";
    });

    document.addEventListener("keydown", event => {
        if (event.altKey || event.ctrlKey || event.metaKey || ["INPUT", "SELECT", "TEXTAREA"].includes(event.target.tagName)) return;
        if (event.key.toLowerCase() === "f") document.getElementById("flagBtn")?.click();
        if (event.key === "ArrowLeft") document.getElementById("prevBtn")?.click();
        if (event.key === "ArrowRight") document.getElementById("nextBtn")?.click();
    });
}

// Initialize application when the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    if (typeof questions !== "undefined") {
        const questionBank = getSavedQuestionBank() || DEFAULT_QUESTION_BANK;
        setupUtilities(questionBank);
        questions = createRandomExam(questionBank);
        prepareExamData(questions);
    }

    if (typeof Exam !== "undefined" && typeof Exam.init === "function") {
        Exam.init();
    }
});
