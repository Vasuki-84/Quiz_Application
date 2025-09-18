
// Questions

const questions = [
    {
        q: "Which keyword declares a constant?",
        options: ["var", "let", "const", "function"],
        answer: "const"
    },
    {
        q: "Which method is used to print messages in the console in JavaScript?",
        options: ["print()", "console.print()", "console.log()", "log.console()"],
        answer: "console.log()"
    },
    {
        q: "Which symbol is used for single-line comments in JavaScript?",
        options: ["#", "//", "/*", "<!--"],
        answer: "//"
    },
    {
        q: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        answer: "Netscape"
    },
    {
        q: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["null", "undefined", "0", "empty string"],
        answer: "undefined"
    },
    {
        q: "Which method is used to combine two or more arrays in JavaScript?",
        options: ["append()", "merge()", "concat()", "combine()"],
        answer: "concat()"
    },
    {
        q: "Which keyword is used to declare a block-scoped variable in JavaScript?",
        options: ["var", "let", "const", "define"],
        answer: "let"
    },
    {
        q: "Which built-in method converts a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
        answer: "JSON.parse()"
    },
    {
        q: "Which operator is used to check both value and type in JavaScript?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        q: "Which function is used to execute a block of code after a specified delay?",
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        answer: "setTimeout()"
    }


]

// Needed variables :
let index = 0;
let score = 0;
let username = "";

// ID elements :
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// show modal on page load : 
window.onload = () => {
    const modal = new bootstrap.Modal(document.getElementById("usernameModal"));
    modal.show();
}


//startQuiz :
function startQuiz() {
    const input = document.getElementById("usernameInput").value.trim();
    if (!input) {
        // Show Bootstrap modal
        let myModal = new bootstrap.Modal(document.getElementById('nameModal'));
        myModal.show();

        document.getElementById("okBtn").addEventListener("click", function () {
            let modal = new bootstrap.Modal(document.getElementById("usernameModal"));
            modal.show();
        });
        return;
    }
    username = input;
    // for hide the modal after enter the username
    const modalElement = document.getElementById("usernameModal");
    const modal = bootstrap.Modal.getInstance(modalElement);  // the username we entered will stored in our memory
    modal.hide();

    loadQuestion();
}

// for loading questions :
function loadQuestion() {
    const q = questions[index];
    questionText.innerText = q.q;

    optionsBox.innerHTML = "";
    q.options.forEach(data => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-primary";
        btn.innerText = data;
        btn.onclick = () => checkAnswer(data, btn);
        optionsBox.appendChild(btn);
    })
}

//check answer :
function checkAnswer(selected, btn) {
    const correct = questions[index].answer;

    // answer checking condition
    if (selected === correct) {
        btn.classList.replace("btn-outline-primary", "btn-success");
        score++;
    } else {
        btn.classList.replace("btn-outline-primary", "btn-danger");
    }

    //disable other options if one is selected
    Array.from(optionsBox.children).forEach(button => button.disabled = true);
    nextBtn.classList.remove("d-none");
}

// Next question 
function nextquestion() {
    index++;

    if (index < questions.length) {
        nextBtn.classList.add("d-none");
        loadQuestion();
    } else {
        showResult();

    }
}
function showResult() {
    quizBox.classList.add("d-none");
    resultBox.classList.remove("d-none");
    resultText.innerHTML = `${username}, You scored ${score} out of ${questions.length}`;

    if(score === questions.length){
        `
        <div> <img src="https://i.pinimg.com/736x/b6/77/6e/b6776ed102c59790ab8c045e5efb358f.jpg" width="500px" height="500px"></div>
        
        `
        
    }
}


















