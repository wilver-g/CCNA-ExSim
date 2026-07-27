// ui.js

const UI = {

    loadQuestion(index){

        const q = questions[index];

        document.getElementById("question").innerHTML = q.question;

        const answers = document.getElementById("answers");

        answers.innerHTML = "";

        q.options.forEach((option,i)=>{

            const button = document.createElement("button");

            button.className="answer";

            button.innerHTML=option;

            if(Exam.answers[index]===i){

                button.classList.add("selected");

            }

            button.onclick=()=>{

                Exam.saveAnswer(i);

                this.loadQuestion(index);

            };

            answers.appendChild(button);

        });

        this.updateProgress();

        this.updateNavigator();

    },

    updateProgress(){

        document.getElementById("progressText").innerHTML=

        `Question ${Exam.currentQuestion+1} of ${questions.length}`;

        const percent=((Exam.currentQuestion+1)/questions.length)*100;

        document.getElementById("progressBar").style.width=

        percent+"%";

    },

    updateTimer(){

        const mins=Math.floor(Exam.timeRemaining/60);

        const secs=Exam.timeRemaining%60;

        document.getElementById("time").innerHTML=

        `${mins}:${secs.toString().padStart(2,"0")}`;

    },

    buildNavigator(){

        const nav=document.getElementById("navButtons");

        nav.innerHTML="";

        questions.forEach((q,index)=>{

            const btn=document.createElement("button");

            btn.className="navBtn";

            btn.innerHTML=index+1;

            btn.onclick=()=>{

                Exam.currentQuestion=index;

                this.loadQuestion(index);

            };

            nav.appendChild(btn);

        });

    },

    updateNavigator(){

        document.querySelectorAll(".navBtn").forEach((button,index)=>{

            button.className="navBtn";

            if(Exam.answers[index]!=null){

                button.classList.add("answered");

            }

            if(index===Exam.currentQuestion){

                button.classList.add("current");

            }

        });

    }

};