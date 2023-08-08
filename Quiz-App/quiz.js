//Here are my questions with the answers, you can define the correct and incorrect ones
const questions =[
    {
        question:"In which Italian city can you find the Colosseum?", answers:[
            {text:"Venice",correct:false},
            {text:"Naples",correct:false},
            {text:"Milan",correct:false},
            {text:"Rome",correct:true},
        ]
    },{
        question:"How many sides has a Hexagon?", answers:[
            {text:"5",correct:false},
            {text:"6",correct:true},
            {text:"7",correct:false},
            {text:"8",correct:false},
        ]
    },{
        question:"What does the Richter scale measure?", answers:[
            {text:"Wind Speed",correct:false},
            {text:"Tornado Strength",correct:false},
            {text:"Temperature",correct:false},
            {text:"Earthquake intensity",correct:true},
        ]
    }
    ,{
        question:"Which famous inventor invented the telephone?", answers:[
            {text:"Alexander Graham Bell",correct:true},
            {text:"Thomas Edison",correct:false},
            {text:"Benjamin Franklin",correct:false},
            {text:"Nikola Tesla",correct:false},
            
        ]
    },{
        question:"What is the largest continent in size?", answers:[
            {text:"Europe",correct:false},
            {text:"North America",correct:false},
            {text:"Africa",correct:false},
            {text:"Asia",correct:true},
        ]
    },{
        question:"Which French king was nicknamed the “Sun King”?", answers:[
            {text:"Louis XVI",correct:false},
            {text:"Francis I",correct:false},
            {text:"Louis XIV",correct:true},
            {text:"Charlemagne",correct:false},
            
        ]
    },{
        question:"What is the largest active volcano in the world?", answers:[
            {text:"Mouna Loa",correct:true},
            {text:"Mount Etna",correct:false},
            {text:"Mount Batur",correct:false},
            {text:"TMount Vesuvius",correct:false},
            
        ]
    },{
        question:"How long is the border between the United States and Canada?", answers:[
            {text:"3,525 miles",correct:false},
           {text:"5,525 miles",correct:true},
            {text:"4,525 miles",correct:false},
            {text:"6,525 miles",correct:false},
            
        ]
    },{
        question:"Apart from water, what is the most popular drink in the world?", answers:[
            {text:"Orange Juice",correct:false},
            {text:"Beer",correct:false},
            {text:"Coffee",correct:false},
            {text:"Tea",correct:true},
        ]
    },{
        question:"What is the capital of New Zealand?", answers:[
            {text:"Christchurch",correct:false},
            {text:"Auckland",correct:false},
            {text:"Wellington",correct:true},
            {text:"Dunedin",correct:false},
            
        ]
    }
];
const questionElem =document.getElementById("question");
const answerbtn =document.getElementById("answer-buttons");
const nextbtn =document.getElementById("next-btn");
//this function is the the initial start for our app
let currentQuestionIndex =0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}
//this function to show the question and answers format on each button 
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElem.innerHTML=questionNo + "." + currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
    const button = document.createElement('button');
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if (answer.correct) {
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer)

});
}
//to hide the next button until you click on answers button
function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }

}
//check the answers correct or incorrect and set a block style to not select multiples questions at the same time

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerbtn.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextbtn.style.display ="block" ;
}
//this function display the final score and allow you to reset the quiz again.
function showScore(){
resetState();
questionElem.innerHTML= `You Scored ${score} out of ${questions.length}!`;
nextbtn.innerHTML="Play Again";
nextbtn.style.display="block";
}

function  handlenextbutton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextbtn.addEventListener("click",()=> {
    if (currentQuestionIndex < questions.length) {
        handlenextbutton();
    }else{
        startQuiz();
    }
});

startQuiz();
