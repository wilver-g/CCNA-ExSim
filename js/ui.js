// ui.js

const UI = {
    loadQuestion(index) {
        const q = questions[index];
        if (!q) return;

        const domainBadge = document.getElementById("domainBadge");
        if (domainBadge) domainBadge.innerText = q.domain || "CCNA 200-301";

        const typeHint = q.type === "multiple" 
            ? " (Choose all that apply)" 
            : (q.type === "dragdrop" ? " (Drag each item on the left to its matching target on the right)" : "");
        
        const questionTextEl = document.getElementById("question");
        if (questionTextEl) {
            questionTextEl.innerHTML = `${q.question}${typeHint}`;
        }

        const codeBlock = document.getElementById("codeBlock");
        if (codeBlock) {
            if (q.snippet) {
                codeBlock.innerHTML = `<pre><code>${q.snippet}</code></pre>`;
                codeBlock.classList.remove("hidden");
            } else {
                codeBlock.innerHTML = "";
                codeBlock.classList.add("hidden");
            }
        }

        const container = document.getElementById("answers");
        if (container) {
            container.innerHTML = "";

            if (q.type === "dragdrop") {
                this.renderDragDrop(index, q, container);
            } else {
                this.renderMultipleChoice(index, q, container);
            }
        }

        this.updateProgress();
        this.updateNavigator();
        this.updateFlagButton();
        this.setupNavigationButtons();
    },

    renderMultipleChoice(index, q, container) {
        container.className = "answers-container";
        const savedAnswer = Exam.answers[index];
        const selectedList = Array.isArray(savedAnswer) 
            ? savedAnswer 
            : (savedAnswer != null ? [savedAnswer] : []);

        if (q.options && Array.isArray(q.options)) {
            q.options.forEach((option, i) => {
                const button = document.createElement("button");
                button.className = "answer";
                const letter = String.fromCharCode(65 + i);
                button.innerHTML = `<strong>${letter}.</strong> ${option}`;

                if (selectedList.includes(i)) button.classList.add("selected");

                button.onclick = () => {
                    Exam.saveAnswer(i, q.type === "multiple");
                    this.loadQuestion(index);
                };

                container.appendChild(button);
            });
        }
    },

    renderDragDrop(index, q, container) {
        container.className = "dragdrop-container";
        const savedMapping = Exam.answers[index] || {};

        const dragCol = document.createElement("div");
        dragCol.className = "drag-column";
        
        const dropCol = document.createElement("div");
        dropCol.className = "drop-column";

        if (q.draggables && Array.isArray(q.draggables)) {
            const indices = q.draggables.map((_, i) => i);

            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.abs(Math.sin(index + i)) * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }

            indices.forEach(originalIdx => {
                const text = q.draggables[originalIdx];
                const isPlaced = Object.values(savedMapping).includes(originalIdx);
                
                const card = document.createElement("div");
                card.className = `draggable-card ${isPlaced ? 'placed' : ''}`;
                card.draggable = !isPlaced;
                card.innerText = text;

                card.ondragstart = (e) => {
                    e.dataTransfer.setData("text/plain", originalIdx);
                };

                dragCol.appendChild(card);
            });
        }

        if (q.dropzones && Array.isArray(q.dropzones)) {
            q.dropzones.forEach((zoneText, zoneIdx) => {
                const zone = document.createElement("div");
                zone.className = "dropzone";
                
                const label = document.createElement("span");
                label.className = "zone-label";
                label.innerText = zoneText;
                zone.appendChild(label);

                const slot = document.createElement("div");
                slot.className = "drop-slot";

                const assignedDragIdx = savedMapping[zoneIdx];
                if (assignedDragIdx !== undefined && assignedDragIdx !== null) {
                    const placedCard = document.createElement("div");
                    placedCard.className = "draggable-card in-slot";
                    placedCard.innerText = q.draggables[assignedDragIdx];
                    
                    placedCard.onclick = () => {
                        delete savedMapping[zoneIdx];
                        Exam.answers[index] = savedMapping;
                        UI.loadQuestion(index);
                    };

                    slot.appendChild(placedCard);
                }

                slot.ondragover = (e) => e.preventDefault();
                slot.ondrop = (e) => {
                    e.preventDefault();
                    const dragIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
                    
                    if (!isNaN(dragIdx)) {
                        if (!Exam.answers[index]) Exam.answers[index] = {};
                        Exam.answers[index][zoneIdx] = dragIdx;
                        UI.loadQuestion(index);
                    }
                };

                zone.appendChild(slot);
                dropCol.appendChild(zone);
            });
        }

        container.appendChild(dragCol);
        container.appendChild(dropCol);
    },

    buildNavigator() {
        if (typeof questions === "undefined" || !Array.isArray(questions) || questions.length === 0) {
            console.error("buildNavigator error: 'questions' array is empty or undefined.");
            return;
        }

        let nav = document.getElementById("questionNavigator") || document.getElementById("navigator");

        if (!nav) {
            const allElements = Array.from(document.querySelectorAll("div, p, h1, h2, h3, h4, span"));
            const heading = allElements.find(el => el.innerText && el.innerText.trim() === "Question Navigator");

            if (heading) {
                nav = document.createElement("div");
                nav.id = "questionNavigator";
                heading.parentNode.insertBefore(nav, heading.nextSibling);
            } else {
                const container = document.querySelector(".card") || document.getElementById("app") || document.body;
                
                const label = document.createElement("h3");
                label.innerText = "Question Navigator";
                label.style.marginTop = "20px";
                
                nav = document.createElement("div");
                nav.id = "questionNavigator";
                
                container.appendChild(label);
                container.appendChild(nav);
            }
        }

        if (!nav) return;

        nav.innerHTML = "";
        nav.style.display = "flex";
        nav.style.flexWrap = "wrap";
        nav.style.gap = "8px";
        nav.style.marginTop = "12px";
        nav.style.padding = "10px 0";

        questions.forEach((_, index) => {
            const btn = document.createElement("button");
            btn.className = "nav-btn";
            btn.type = "button";
            
            btn.textContent = String(index + 1);
            btn.style.width = "38px";
            btn.style.height = "38px";
            btn.style.borderRadius = "4px";
            btn.style.cursor = "pointer";
            btn.style.fontWeight = "bold";
            btn.style.fontSize = "0.85rem";
            btn.style.display = "flex";
            btn.style.alignItems = "center";
            btn.style.justifyContent = "center";
            
            btn.onclick = () => Exam.goToQuestion(index);
            nav.appendChild(btn);
        });

        this.updateNavigator();
    },

    updateNavigator() {
        const nav = document.getElementById("questionNavigator") || document.getElementById("navigator");
        if (!nav) return;

        const buttons = nav.querySelectorAll("button");
        buttons.forEach((btn, idx) => {
            btn.textContent = String(idx + 1);

            let bg = "#ffffff";
            let color = "#333333";
            let border = "1px solid #cccccc";

            const ans = Exam.answers ? Exam.answers[idx] : undefined;
            const isAnswered = ans !== undefined && ans !== null && 
                               (typeof ans !== "object" || Object.keys(ans).length > 0);

            if (isAnswered) {
                bg = "#28a745";
                color = "#ffffff";
                border = "1px solid #1e7e34";
            }

            if (Exam.flags && Exam.flags.has(idx)) {
                bg = "#fd7e14";
                color = "#ffffff";
                border = "1px solid #dc3545";
            }

            if (idx === Exam.currentIndex) {
                border = "3px solid #0056b3";
                if (!isAnswered && (!Exam.flags || !Exam.flags.has(idx))) {
                    bg = "#e8f0fe";
                    color = "#0056b3";
                }
            }

            btn.style.backgroundColor = bg;
            btn.style.color = color;
            btn.style.border = border;
        });
    },

    updateProgress() {
        const currentNum = Exam.currentIndex + 1;
        const totalNum = questions.length;

        const currentQEl = document.getElementById("currentQuestion");
        const totalQEl = document.getElementById("totalQuestions");
        if (currentQEl) currentQEl.innerText = currentNum;
        if (totalQEl) totalQEl.innerText = totalNum;

        const counterEl = document.getElementById("questionCounter") 
                       || document.getElementById("questionIndicator")
                       || document.getElementById("questionProgress")
                       || document.getElementById("progressText");
                       
        if (counterEl) {
            counterEl.innerText = `Question ${currentNum} of ${totalNum}`;
        }

        const progressBar = document.getElementById("progressBar") || document.getElementById("progress");
        if (progressBar) {
            const percentage = (currentNum / totalNum) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    },

    updateFlagButton() {
        const flagBtn = document.getElementById("flagBtn");
        if (!flagBtn) return;

        if (Exam.flags && Exam.flags.has(Exam.currentIndex)) {
            flagBtn.classList.add("flagged");
            flagBtn.innerText = "Unflag Question";
        } else {
            flagBtn.classList.remove("flagged");
            flagBtn.innerText = "Flag for Review";
        }
    },

    setupNavigationButtons() {
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        if (prevBtn) prevBtn.disabled = (Exam.currentIndex === 0);
        if (nextBtn) {
            if (Exam.currentIndex === questions.length - 1) {
                nextBtn.innerText = "Submit Exam";
            } else {
                nextBtn.innerText = "Next";
            }
        }
    },

    showResults(results) {
        const container = document.getElementById("app") || document.body;

        const isPassed = results.passed;
        const statusText = isPassed ? "PASS" : "FAIL";

        let domainsHTML = "";
        if (results.domains) {
            Object.keys(results.domains).forEach(domain => {
                const d = results.domains[domain];
                domainsHTML += `
                    <div class="domain-score-row" style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <span>${domain}</span>
                        <strong>${d.percentage}% (${d.correct}/${d.total})</strong>
                    </div>
                `;
            });
        }

        // Generate the AI assessment card HTML
        let aiAssessmentHTML = "";
        if (typeof Analytics !== "undefined" && typeof Analytics.generateAIAssessment === "function") {
            aiAssessmentHTML = Analytics.generateAIAssessment(results);
        }

        let reviewHTML = "";
        questions.forEach((q, idx) => {
            const userAns = Exam.answers[idx];
            const rawCorrect = q.correct !== undefined ? q.correct : q.answer;
            
            let isCorrect = false;
            let userAnsDisplay = "No Answer";

            if (q.type === "dragdrop") {
                if (userAns && typeof userAns === "object") {
                    isCorrect = Array.isArray(rawCorrect) && rawCorrect.every(
                        (expIdx, zIdx) => userAns[zIdx] === expIdx
                    );
                    userAnsDisplay = isCorrect ? "Correctly Matched" : "Incorrectly Matched";
                }
            } else {
                const userArr = Analytics.normalizeAnswer(userAns);
                const correctArr = Analytics.normalizeAnswer(rawCorrect);
                isCorrect = userArr.length === correctArr.length && userArr.every((v, i) => v === correctArr[i]);
                
                if (userArr.length > 0) {
                    userAnsDisplay = userArr.map(i => `${String.fromCharCode(65 + i)}. ${q.options[i]}`).join(", ");
                }
            }

            const borderCardColor = isCorrect ? "#28a745" : "#dc3545";

            reviewHTML += `
                <div class="review-card" style="border-left: 5px solid ${borderCardColor}; padding: 15px; margin-bottom: 15px; background: #fff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <p style="font-weight:bold; margin-bottom: 8px;">Q${idx + 1}: ${q.question}</p>
                    <p style="margin: 4px 0; color: ${isCorrect ? '#28a745' : '#dc3545'};"><strong>Your Answer:</strong> ${userAnsDisplay}</p>
                    ${!isCorrect && q.options ? `<p style="margin: 4px 0; color: #28a745;"><strong>Correct Answer:</strong> ${Analytics.normalizeAnswer(rawCorrect).map(i => `${String.fromCharCode(65 + i)}. ${q.options[i]}`).join(", ")}</p>` : ''}
                    ${q.explanation ? `<div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 4px; font-size: 0.9rem;"><strong>Explanation:</strong> ${q.explanation}</div>` : ''}
                </div>
            `;
        });

        container.innerHTML = `
            <div class="results-container" style="max-width: 800px; margin: 20px auto; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <h1 style="color: #0056b3; margin-top: 0;">Exam Complete</h1>
                <h2 style="color: ${isPassed ? '#28a745' : '#dc3545'}; margin-bottom: 20px;">
                    Score: ${results.score} / ${results.total} (${results.percentage}%) - ${statusText}
                </h2>

                <div class="domain-summary" style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
                    <h3 style="margin-top:0;">Performance by Domain</h3>
                    <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ddd;">
                    ${domainsHTML}
                </div>

                <!-- AI Assessment Card Rendered Here -->
                ${aiAssessmentHTML}

                <h3 style="margin-top: 25px;">Answer Review</h3>
                <hr style="margin: 10px 0 20px 0; border: 0; border-top: 1px solid #ddd;">
                ${reviewHTML}

                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="window.location.reload()" style="padding: 12px 24px; background: #0056b3; color: white; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer;">Retake Exam</button>
                </div>
            </div>
        `;
    }
};