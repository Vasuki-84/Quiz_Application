
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
        alert("Please enter your name and continue the Quiz ");
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

    optionsBox.innerHTML="";
    q.options.forEach(data=> {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-primary";
        btn.innerText = data;
        btn.onclick = () => checkAnswer(data,btn);
        optionsBox.appendChild(btn);
    })
}

//check answer :
function checkAnswer(selected,btn)
{
    const correct = questions[index].answer;

    // answer checking condition
    if(selected === correct)
    {
        btn.classList.replace("btn-outline-primary", "btn-success");
        score++;
    }else{
        btn.classList.replace("btn-outline-primary", "btn-danger");
    }

    //disable other options if one is selected
    Array.from(optionsBox.children).forEach(button => button.disabled = true);
    nextBtn.classList.remove("d-none");
}

// Next question 
function nextquestion(){
    index++;

    if(index < questions.length ){
        nextBtn.classList.add("d-none");
        loadQuestion();
    }else{
        showResult();

    }
}
function showResult(){
    quizBox.classList.add("d-none");
    resultBox.classList.remove("d-none");
    resultText.innerHTML= `${ username}, You scored ${score} out of ${questions.length}`;
}


















