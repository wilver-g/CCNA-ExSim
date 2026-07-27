// analytics.js

const Analytics = {
    evaluateExam(questionsList = questions, userAnswers = Exam.answers) {
        let score = 0;
        const total = questionsList.length;
        const domains = {};

        questionsList.forEach((q, index) => {
            const domainName = q.domain || "General";
            if (!domains[domainName]) {
                domains[domainName] = { correct: 0, total: 0, percentage: 0 };
            }
            domains[domainName].total++;

            const userAns = userAnswers[index];
            const rawCorrect = q.correct !== undefined ? q.correct : q.answer;
            let isCorrect = false;

            if (q.type === "dragdrop") {
                // Check if every dropzone index matches the correct draggable index
                if (userAns && typeof userAns === "object") {
                    isCorrect = Array.isArray(rawCorrect) && rawCorrect.every(
                        (expectedDragIdx, zoneIdx) => userAns[zoneIdx] === expectedDragIdx
                    );
                }
            } else {
                // Check standard single or multiple choice
                const userArr = this.normalizeAnswer(userAns);
                const correctArr = this.normalizeAnswer(rawCorrect);
                isCorrect = userArr.length === correctArr.length && 
                    userArr.every((val, i) => val === correctArr[i]);
            }

            if (isCorrect) {
                score++;
                domains[domainName].correct++;
            }
        });

        Object.keys(domains).forEach(d => {
            domains[d].percentage = Math.round((domains[d].correct / domains[d].total) * 100);
        });

        return {
            score: score,
            total: total,
            percentage: total > 0 ? Math.round((score / total) * 100) : 0,
            passed: score >= Math.ceil(total * 0.8),
            domains: domains,
            domainScores: domains
        };
    },

    normalizeAnswer(ans) {
        if (ans === undefined || ans === null) return [];
        if (Array.isArray(ans)) return [...ans].sort();
        return [ans];
    },

    calculate() {
        return this.evaluateExam();
    }
};