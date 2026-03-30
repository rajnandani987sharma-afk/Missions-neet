function login(){

let name=document.getElementById("name").value

localStorage.setItem("student",name)

document.getElementById("login").style.display="none"
document.getElementById("dashboard").style.display="block"

document.getElementById("username").innerText=name

}
function startTest(){

alert("Mock Test coming soon!")

}
