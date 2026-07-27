// timer.js

const Timer = {
    interval: null,

    start() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        // Safety fallback if timeRemaining was not set properly
        if (typeof Exam.timeRemaining !== "number" || isNaN(Exam.timeRemaining)) {
            Exam.timeRemaining = 120 * 60;
        }

        UI.updateTimer();

        this.interval = setInterval(() => {
            if (Exam.timeRemaining > 0) {
                Exam.timeRemaining--;
                UI.updateTimer();
            } else {
                this.stop();
                alert("Time has expired! Submitting your exam now.");
                Exam.finishExam();
            }
        }, 1000);
    },

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};