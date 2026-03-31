let current=0
let answers=[]
let time=1200

function login(){

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

startTimer()
createPalette()
showQuestion()

}

function startTimer(){

setInterval(()=>{

time--

let min=Math.floor(time/60)
let sec=time%60

document.getElementById("timer").innerText=
"Time: "+min+":"+sec

if(time<=0){

submitTest()

}

},1000)

}

function createPalette(){

let html=""

for(let i=0;i<questions.length;i++){

html+=`<button class="paletteBtn"
onclick="goQuestion(${i})">${i+1}</button>`

}

document.getElementById("palette").innerHTML=html

}

function goQuestion(i){

current=i
showQuestion()

}

function showQuestion(){

let q=questions[current]

document.getElementById("question").innerHTML=
`<h3>Q${current+1}. ${q.q}</h3>`

document.getElementById("options").innerHTML=

`<button onclick="selectAnswer('a')">${q.a}</button><br>
<button onclick="selectAnswer('b')">${q.b}</button><br>
<button onclick="selectAnswer('c')">${q.c}</button><br>
<button onclick="selectAnswer('d')">${q.d}</button>`

}

function selectAnswer(ans){

answers[current]=ans

}

function nextQuestion(){

if(current<questions.length-1){

current++
showQuestion()

}

}

function submitTest(){

let score=0

let subjectStats={
Physics:0,
Chemistry:0,
Biology:0
}

let subjectTotal={
Physics:0,
Chemistry:0,
Biology:0
}

for(let i=0;i<questions.length;i++){

let q=questions[i]

subjectTotal[q.subject]++

if(answers[i]==q.correct){

score+=4
subjectStats[q.subject]++

}

else if(answers[i]){

score-=1

}

}

let rank=Math.floor(10000-(score*10))

let weakSubject="Physics"

let min=subjectStats.Physics

if(subjectStats.Chemistry<min){
min=subjectStats.Chemistry
weakSubject="Chemistry"
}

if(subjectStats.Biology<min){
weakSubject="Biology"
}

document.getElementById("dashboard").innerHTML=

`<h2>Result</h2>

Score: ${score}

<br><br>

Predicted Rank: ${rank}

<div id="analysis">

<h3>Detailed Analysis</h3>

Physics Correct: ${subjectStats.Physics}/${subjectTotal.Physics}<br>

Chemistry Correct: ${subjectStats.Chemistry}/${subjectTotal.Chemistry}<br>

Biology Correct: ${subjectStats.Biology}/${subjectTotal.Biology}<br>

<br>

<b>AI Weak Subject: ${weakSubject}</b>

</div>

`

}
