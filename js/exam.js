// exam.js

const Exam = {
    currentIndex: 0,
    answers: {},
    flags: new Set(),
    timerInterval: null,
    timeLeft: 120 * 60, // 120 minutes in seconds

    init() {
        this.currentIndex = 0;
        this.answers = {};
        this.flags = new Set();
        this.timeLeft = 120 * 60;

        // Build question navigator dots/buttons
        if (typeof UI !== "undefined" && typeof UI.buildNavigator === "function") {
            UI.buildNavigator();
        }

        // Load the initial question
        if (typeof UI !== "undefined" && typeof UI.loadQuestion === "function") {
            UI.loadQuestion(this.currentIndex);
        }

        // Attach event listeners to controls
        this.bindEvents();

        // Start countdown timer
        this.startTimer();
    },

    bindEvents() {
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const flagBtn = document.getElementById("flagBtn");

        if (prevBtn) {
            prevBtn.onclick = () => this.prevQuestion();
        }

        if (nextBtn) {
            nextBtn.onclick = () => this.nextQuestion();
        }

        if (flagBtn) {
            flagBtn.onclick = () => this.toggleFlag();
        }
    },

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const timerDisplay = document.getElementById("timer");

        this.timerInterval = setInterval(() => {
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                alert("Time is up! Submitting your exam.");
                this.submitExam();
                return;
            }

            this.timeLeft--;

            if (timerDisplay) {
                const hours = Math.floor(this.timeLeft / 3600);
                const minutes = Math.floor((this.timeLeft % 3600) / 60);
                const seconds = this.timeLeft % 60;

                const formattedTime = [
                    hours > 0 ? String(hours).padStart(2, "0") : null,
                    String(minutes).padStart(2, "0"),
                    String(seconds).padStart(2, "0")
                ].filter(Boolean).join(":");

                timerDisplay.innerText = formattedTime;
            }
        }, 1000);
    },

    saveAnswer(answerValue, isMultiple = false) {
        if (isMultiple) {
            if (!Array.isArray(this.answers[this.currentIndex])) {
                this.answers[this.currentIndex] = [];
            }
            const currentList = this.answers[this.currentIndex];
            const itemIdx = currentList.indexOf(answerValue);

            if (itemIdx > -1) {
                currentList.splice(itemIdx, 1);
            } else {
                currentList.push(answerValue);
            }
        } else {
            this.answers[this.currentIndex] = answerValue;
        }

        if (typeof UI !== "undefined" && typeof UI.updateNavigator === "function") {
            UI.updateNavigator();
        }
    },

    nextQuestion() {
        if (this.currentIndex < questions.length - 1) {
            this.currentIndex++;
            UI.loadQuestion(this.currentIndex);
        } else {
            if (confirm("Are you sure you want to submit the exam?")) {
                this.submitExam();
            }
        }
    },

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            UI.loadQuestion(this.currentIndex);
        }
    },

    goToQuestion(index) {
        if (index >= 0 && index < questions.length) {
            this.currentIndex = index;
            UI.loadQuestion(this.currentIndex);
        }
    },

    toggleFlag() {
        if (this.flags.has(this.currentIndex)) {
            this.flags.delete(this.currentIndex);
        } else {
            this.flags.add(this.currentIndex);
        }
        UI.updateFlagButton();
        UI.updateNavigator();
    },

    submitExam() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        let results = {};
        if (typeof Analytics !== "undefined" && typeof Analytics.evaluateExam === "function") {
            results = Analytics.evaluateExam();
        }

        if (typeof UI !== "undefined" && typeof UI.showResults === "function") {
            UI.showResults(results);
        } else {
            alert(`Exam complete! Score: ${results.score}/${results.total} (${results.percentage}%)`);
        }
    }
};