/* import { protectRoute } from "../../firebase/init.js";

protectRoute(); */
var menuButton = document.getElementById("menuButton");
var menuContent = document.getElementById("menuContent");
        
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active");
        menuContent.classList.toggle("show");
    });

const outputDiv = document.getElementById('question-output');
let questionCount = 1;
let answerChoices = 1;
outputDiv.innerHTML =  `<label for="question1"><strong>Question ${questionCount}:</strong></label>
                        <input type="text" placeholder="Enter question" required>
                        <label for="answer1">Choice ${answerChoices}:</label>
                        <input type="text" placeholder="Enter answer" required>`;

document.getElementById('addQuestion').addEventListener('click', () => {
    questionCount++;
    outputDiv.innerHTML += `<label for="question1"><strong>Question ${questionCount}:</strong></label>
                            <input type="text" placeholder="Enter question" required>
                            <label for="answer1">Choice ${answerChoices}:</label>
                            <input type="text" placeholder="Enter answer" required>`;
});

function rmQuestion() {
    if (questionCount > 1){
        questionCount--;
        outputDiv.removeChild(outputDiv.lastElementChild);
        outputDiv.removeChild(outputDiv.lastElementChild);
        outputDiv.removeChild(outputDiv.lastElementChild);
        outputDiv.removeChild(outputDiv.lastElementChild);
    } else {
        showErrorMessage('You must have more than 1 question', 3000);
    }
}

function showErrorMessage(message, duration) {
    let errorMsg = document.getElementById('error-message');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';

    setTimeout(() => {
        errorMsg.style.display = 'none';
    }, duration);
}

function addAnsChoice(){
    answerChoices++;
    outputDiv.innerHTML += `<label for="answer1">Choice ${answerChoices}:</label>
                            <input type="text" placeholder="Enter answer" required>`;
}

function rmAnsChoice() {
    if (answerChoices > 1){
        answerChoices--;
        outputDiv.removeChild(outputDiv.lastElementChild);
        outputDiv.removeChild(outputDiv.lastElementChild);
    } else {
        showErrorMessage('You must have more than 1 answer choice', 3000);
    }
}