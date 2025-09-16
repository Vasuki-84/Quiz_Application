
// Questions

const questions = [
    {
        q: "Which keyword declares a constant?" ,
        options: [ "var" , "let" , "const" , "function"],
        answer: "const"
    },
    {         
    q: "Which method is used to print messages in the console in JavaScript?",         
    options: [ "print()", "console.print()", "console.log()", "log.console()" ],         
    answer: "console.log()"     
},     
{         
    q: "Which symbol is used for single-line comments in JavaScript?",         
    options: [ "#", "//", "/*", "<!--" ],         
    answer: "//"     
},     
{         
    q: "Which company developed JavaScript?",         
    options: [ "Microsoft", "Netscape", "Google", "Oracle" ],         
    answer: "Netscape"     
},     
{         
    q: "What is the default value of an uninitialized variable in JavaScript?",         
    options: [ "null", "undefined", "0", "empty string" ],         
    answer: "undefined"     
},     
{         
    q: "Which method is used to combine two or more arrays in JavaScript?",         
    options: [ "append()", "merge()", "concat()", "combine()" ],         
    answer: "concat()"     
}

]

// Needed variables :
let index = 0 ;
let score = 0 ;
let username = "" ;

// ID elements :
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// show modal on page load : 
window.onload = () => {
    const modal = new bootstrap.Modal.document(getElementById("usernameModal"));
    modal.show();
}


















