var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");



color1.addEventListener("input",function(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
document.getElementById("cc1").innerHTML = color1.value;
})

color2.addEventListener("input",function(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	document.getElementById("cc2").innerHTML = color2.value;

})

