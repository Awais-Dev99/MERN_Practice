const questions=[
    {
        question: "Pakistan indepedence day?",
        answer:[
{text:"14 Aug 1947" , correct:true},
{text:"15 Aug 1947" , correct:false},
{text:"16 Aug 1947" , correct:false},
{text:"17 Aug 1947" , correct:false}
        ]
    },
{
    question: "India independence day?",
    answer:[
        {text:"15 Aug 1947" , correct:true},
        {text:"14 Aug 1947" , correct:false},
        {text:"26 Jan 1950" , correct:false},
        {text:"2 Oct 1947" , correct:false}
    ]
},
{
    question: "Who is the founder of Pakistan?",
    answer:[
        {text:"Quaid-e-Azam Muhammad Ali Jinnah" , correct:true},
        {text:"Allama Iqbal" , correct:false},
        {text:"Liaquat Ali Khan" , correct:false},
        {text:"Sir Syed Ahmed Khan" , correct:false}
    ]
},
{
    question: "Capital of Pakistan?",
    answer:[
        {text:"Islamabad" , correct:true},
        {text:"Karachi" , correct:false},
        {text:"Lahore" , correct:false},
        {text:"Peshawar" , correct:false}
    ]
},
{
    question: "National language of Pakistan?",
    answer:[
        {text:"Urdu" , correct:true},
        {text:"English" , correct:false},
        {text:"Punjabi" , correct:false},
        {text:"Sindhi" , correct:false}
    ]
},
{
    question: "Pakistan Resolution was passed in?",
    answer:[
        {text:"23 March 1940" , correct:true},
        {text:"14 August 1947" , correct:false},
        {text:"15 August 1947" , correct:false},
        {text:"1 January 1949" , correct:false}
    ]
}
];
const questionelement=document.getElementById("question")
const answerelement=document.getElementById("btn")
const nextbtn=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionelement.innerHTML=questionNumber+" ."+currentQuestion.question;


    currentQuestion.answer.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("ans-btn");
        answerelement.appendChild(button);
    })
}
function resetState(){
    nextbtn.style.display="none";
    while(answerelement.firstChild){
answerelement.removeChild(answerelement.firstChild)
    }

}

startQuiz();