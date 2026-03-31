function login(){

let name=document.getElementById("name").value

localStorage.setItem("student",name)

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

document.getElementById("username").innerText=name

}

let current=0
let score=0

function startTest(){

document.getElementById("dashboard").innerHTML=`

<h2>Mission NEET Mock Test</h2><div id="question"></div><div id="options"></div><br><button onclick="nextQuestion()">Next</button>
`

showQuestion()

}

function showQuestion(){

let q=questions[current]

document.getElementById("question").innerHTML =
`<h3>Q${current+1}. ${q.q}</h3>`;

document.getElementById("options").innerHTML = `
<button onclick="checkAnswer('a')">${q.a}</button><br><br>
<button onclick="checkAnswer('b')">${q.b}</button><br><br>
<button onclick="checkAnswer('c')">${q.c}</button><br><br>
<button onclick="checkAnswer('d')">${q.d}</button>
`;
`

}

function checkAnswer(ans){

if(ans==questions[current].correct){
score++
}

}

function nextQuestion(){

current++

if(current<questions.length){

showQuestion()

}else{

document.getElementById("dashboard").innerHTML=
"<h2>Your Score: ${score} / ${questions.length}</h2>"

}

}
