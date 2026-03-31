let current=0
let answers=[]
let filtered=[]
let time=600

function login(){

document.getElementById("login").style.display="none"
document.getElementById("subjects").style.display="block"

}

function openSubject(sub){

filtered=questions.filter(q=>q.subject==sub)

document.getElementById("subjects").style.display="none"

let html="<h2>Select Chapter</h2>"

let chapters=[...new Set(filtered.map(q=>q.chapter))]

chapters.forEach(ch=>{

html+=`<button onclick="startTest('${ch}')">${ch}</button><br>`

})

document.getElementById("chapters").innerHTML=html
document.getElementById("chapters").style.display="block"

}

function startTest(ch){

filtered=filtered.filter(q=>q.chapter==ch)

document.getElementById("chapters").style.display="none"
document.getElementById("test").style.display="block"

createPalette()
startTimer()
showQuestion()

}

function createPalette(){

let html=""

for(let i=0;i<filtered.length;i++){

html+=`<button onclick="goQuestion(${i})">${i+1}</button>`

}

document.getElementById("palette").innerHTML=html

}

function goQuestion(i){

current=i
showQuestion()

}

function startTimer(){

setInterval(()=>{

time--

let min=Math.floor(time/60)
let sec=time%60

document.getElementById("timer").innerText=
"Time "+min+":"+sec

if(time<=0){

submitTest()

}

},1000)

}

function showQuestion(){

let q=filtered[current]

document.getElementById("question").innerHTML=
`<h3>${q.q}</h3>`

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

current++

if(current<filtered.length){

showQuestion()

}

}

function submitTest(){

let score=0

for(let i=0;i<filtered.length;i++){

if(answers[i]==filtered[i].correct){

score+=4

}else if(answers[i]){

score-=1

}

}

let rank=Math.floor(10000-score*10)

document.getElementById("test").style.display="none"

document.getElementById("result").style.display="block"

document.getElementById("result").innerHTML=

`<h2>Result</h2>
Score: ${score}<br>
Predicted Rank: ${rank}`

}
async function loadQuestions(file){

let res = await fetch("questions/"+file)

filtered = await res.json()

current = 0
answers = []

createPalette()
startTimer()
showQuestion()

}
