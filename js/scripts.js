var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
btn.id = 'beston';
document.body.appendChild(btn);
var d = new Date();
function helloBeston() {
	alert("Hello Beston");}
document.getElementById("beston").addEventListener("mouseover", helloBeston);
