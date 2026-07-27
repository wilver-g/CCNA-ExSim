# CCNA 200-301 Practice Exam Simulator

> 🎯 **About This Project:** 
> This simulator was built as a personal project to power my final 2 weeks of intensive preparation for the Cisco Certified Network Associate (CCNA 200-301) exam. It replicates the actual exam experience—complete with timed pressure, domain analytics, and drag-and-drop performance items. 
> 
> If you are also preparing for the CCNA, feel free to clone, use, or adapt this project for your own study sprint! Best of luck on exam day! 🚀

---

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🚀 Features

* **Multiple Question Formats:**
  * Single and Multiple-Choice questions.
  * Interactive **Drag-and-Drop** performance-based matching items.
* **Smart Item Randomization:** Draggable choices are shuffled using a deterministic algorithm per question to prevent positional memory bias while maintaining scoring integrity.
* **Real-Time Interactive Question Navigator:**
  * **White:** Unanswered question
  * **Green:** Answered question
  * **Orange:** Flagged for review
  * **Blue Border:** Currently active question
* **120-Minute Exam Timer:** Auto-submits the exam when time expires.
* **Comprehensive Results & Analytics Dashboard:**
  * Overall Score and PASS/FAIL breakdown.
  * Domain-by-domain performance breakdown aligned with CCNA exam topics.
  * Complete answer review with explanations for every question.

---

## 📁 Project Structure

```text
├── index.html        # Main HTML layout and application entry point
├── styles.css        # Custom CSS styling for exam interface and cards
├── ui.js            # UI Rendering engine, navigator, and DOM handlers
├── exam.js          # Core exam controller, event binding, and timer logic
├── questions.js     # CCNA 200-301 question bank array
├── analytics.js     # Scoring algorithm, domain breakdown, and answer evaluator
└── README.md        # Project documentation