


var randomNumber1 = Math.floor(Math.random() * 6+1);
var root="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",root);
var randomNumber2 = Math.floor(Math.random() * 6+1);
var root="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",root);
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩play 1 wins!";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="play 2 wins!🚩";
}
else if (randomNumber1=randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
