// analytics.js

const Analytics = {
    evaluateExam(questionsList = questions, userAnswers = Exam.answers) {
        let score = 0;
        const total = questionsList.length;
        const domains = {};

        questionsList.forEach((q, index) => {
            const domainName = Analytics.normalizeDomainName(q.domain || "General");
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

    normalizeDomainName(domainName) {
        const normalized = String(domainName).trim();
        switch (normalized.toLowerCase()) {
            case "automation and programmability":
            case "automation & programmability":
                return "Automation & Programmability";
            default:
                return normalized;
        }
    },

    calculate() {
        return this.evaluateExam();
    },

    /**
     * Evaluates exam results locally using pure JavaScript logic to generate a study assessment card.
     * @param {Object} evaluationResult - The output object from Analytics.evaluateExam()
     * @returns {string} Formatted HTML string ready to inject into the results container.
     */
    generateAIAssessment(evaluationResult) {
        const domainData = evaluationResult.domains || {};
        const strengths = [];
        const weaknesses = [];
        const moderate = [];

        // 1. Classify domains based on percentage thresholds
        Object.keys(domainData).forEach(domain => {
            const scorePct = domainData[domain].percentage;

            if (scorePct >= 80) {
                strengths.push({ domain, scorePct });
            } else if (scorePct < 70) {
                weaknesses.push({ domain, scorePct });
            } else {
                moderate.push({ domain, scorePct });
            }
        });

        // 2. Build Actionable Study Recommendations
        let actionItems = [];

        if (weaknesses.length > 0) {
            weaknesses.forEach(w => {
                actionItems.push(`Review core CLI configurations and fundamental concepts for <strong>${w.domain}</strong> (Score: ${w.scorePct}%).`);
            });
        } else if (moderate.length > 0) {
            moderate.forEach(m => {
                actionItems.push(`Refine speed and accuracy on <strong>${m.domain}</strong> (Score: ${m.scorePct}%).`);
            });
        } else {
            actionItems.push("Outstanding performance across all domains! Focus on reviewing flagged questions and maintaining speed for test day.");
        }

        // 3. Build HTML Lists
        const strengthsList = strengths.length > 0 
            ? strengths.map(s => `<li><strong>${s.domain}</strong>: ${s.scorePct}%</li>`).join('')
            : '<li>No domains reached the 80%+ threshold yet. Keep grinding!</li>';

        const weaknessesList = weaknesses.length > 0 
            ? weaknesses.map(w => `<li><strong>${w.domain}</strong>: ${w.scorePct}%</li>`).join('')
            : '<li>No critical domain drop-offs (<70%) detected!</li>';

        const recommendedActionList = actionItems.map(item => `<li>${item}</li>`).join('');

        // 4. Return UI Card Component
        return `
            <div class="ai-assessment-card" style="
                background: #ffffff;
                border: 2px solid #005A9C;
                border-radius: 10px;
                padding: 24px;
                margin-top: 25px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                font-family: Arial, sans-serif;
                color: #333333;
                text-align: left;
            ">
                <div style="display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #eef2f5; padding-bottom: 12px; margin-bottom: 20px;">
                    <span style="font-size: 24px;">🤖</span>
                    <h2 style="margin: 0; color: #005A9C; font-size: 1.4rem;">Automated Exam Performance & Weakness Analysis</h2>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;">
                    <div style="background: #f4fbf7; border-left: 4px solid #28a745; padding: 15px; border-radius: 4px;">
                        <h3 style="margin-top: 0; color: #1e7e34; font-size: 1.1rem;">💪 Identified Strengths</h3>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.95rem;">${strengthsList}</ul>
                    </div>

                    <div style="background: #fff8f8; border-left: 4px solid #dc3545; padding: 15px; border-radius: 4px;">
                        <h3 style="margin-top: 0; color: #bd2130; font-size: 1.1rem;">⚠️ High-Priority Focus Areas</h3>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.95rem;">${weaknessesList}</ul>
                    </div>
                </div>

                <div style="background: #f0f7ff; border-left: 4px solid #005A9C; padding: 15px; border-radius: 4px;">
                    <h3 style="margin-top: 0; color: #005A9C; font-size: 1.1rem;">🎯 Recommended Final Sprint Strategy</h3>
                    <ul style="margin: 0; padding-left: 20px; font-size: 0.95rem; line-height: 1.5;">${recommendedActionList}</ul>
                </div>
            </div>
        `;
    }
};