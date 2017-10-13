// okreslenie wszystkich przycisków z poszczegolnym id
var beansBtn = document.querySelector("#beansBtn");
var beansScore = document.querySelector("#beansScore");
var berriesBtn = document.getElementById("berriesBtn");
var berriesScore = document.getElementById("berriesScore");
var fruitsBtn = document.getElementById("fruitsBtn");
var fruitsScore = document.getElementById("fruitsScore");
var cruciferosBtn = document.getElementById("cruciferosBtn");
var cruciferosScore = document.getElementById("cruciferosScore");
var veggiesBtn = document.getElementById("veggiesBtn");
var veggiesScore = document.getElementById("veggiesScore");
var greensBtn = document.getElementById("greensBtn");
var greensScore = document.getElementById("greensScore");
var flaxScore = document.getElementById("flaxScore");
var flaxBtn = document.getElementById("flaxBtn");
var nutsBtn = document.getElementById("nutsBtn");
var nutsScore = document.getElementById("nutsScore");
var spicesScore = document.getElementById("spicesScore");
var spicesBtn = document.getElementById("spicesBtn");
var grainsBtn = document.getElementById("grainsBtn");
var grainsScore = document.getElementById("grainsScore");
var bevBtn = document.getElementById("bevBtn");
var bevScore = document.getElementById("bevScore");
var sportBtn = document.getElementById("sportBtn");
var sportScore = document.getElementById("sportScore");

var allScore = document.getElementById("all");
// dodanie liczby klinięć do ogólnego licznika


var beansPortion = 0;
var berriesPortion = 0;
var fruitsPortion = 0;
var cruciferosPortion = 0;
var veggiesPortion = 0;
var greensPortion = 0;
var flaxPortion = 0;
var nutsPortion = 0;
var spicesPortion = 0;
var grainsPortion = 0;
var bevPortion = 0;
var sportPortion = 0;

function changeScore () {
	allScore.textContent = beansPortion + berriesPortion + fruitsPortion + cruciferosPortion +
	greensPortion + veggiesPortion + grainsPortion + flaxPortion + nutsPortion + spicesPortion +
	bevPortion + sportPortion;
}
// nadanie przycikowi metody klik
beansBtn.addEventListener("click", function(){
	if(beansPortion<3){
		beansPortion++;
	if(beansPortion==3){
	 	beansScore.classList.add("completed");
	 }
	 beansScore.textContent = Number(beansPortion);
	 changeScore();
    }
});

berriesBtn.addEventListener("click", function(){
if(berriesPortion < 1){
berriesPortion++;
if(berriesPortion == 1){
	 	berriesScore.classList.add("completed");
 	}
 	berriesScore.textContent = berriesPortion;
 	changeScore();
 }
 });

fruitsBtn.addEventListener("click", function(){
if(fruitsPortion < 3){
fruitsPortion++;
if(fruitsPortion == 3){
	 	fruitsScore.classList.add("completed");
 	}
 	fruitsScore.textContent = fruitsPortion;
 	changeScore();
 }
 });

cruciferosBtn.addEventListener("click", function(){
if(cruciferosPortion < 1){
cruciferosPortion++;
if(cruciferosPortion==1){
	 	cruciferosScore.classList.add("completed");
 	}
 	cruciferosScore.textContent = cruciferosPortion;
 	changeScore();
 }
 });

greensBtn.addEventListener("click", function(){
if(greensPortion<2){
greensPortion++;
if(greensPortion==2){
	 	greensScore.classList.add("completed");
 	}
 	greensScore.textContent = greensPortion;
 	changeScore();
 }
 });

veggiesBtn.addEventListener("click", function(){
if(veggiesPortion < 2){
veggiesPortion++;
if(veggiesPortion == 2){
	 	veggiesScore.classList.add("completed");
 	}
 	veggiesScore.textContent = veggiesPortion;
 	changeScore();
 }
 });

flaxBtn.addEventListener("click", function(){
if(flaxPortion < 1){
flaxPortion++;
if(flaxPortion == 1){
	 	flaxScore.classList.add("completed");
 	}
 	flaxScore.textContent = flaxPortion;
 	changeScore();
 }
 });

nutsBtn.addEventListener("click", function(){
if(nutsPortion < 1){
nutsPortion++;
if(nutsPortion == 1){
	 	nutsScore.classList.add("completed");
 	}
 	nutsScore.textContent = nutsPortion;
 	changeScore();
 }
 });

spicesBtn.addEventListener("click", function(){
if(spicesPortion < 1){
spicesPortion++;
if(spicesPortion == 1){
	 spicesScore.classList.add("completed");
 	}
 	spicesScore.textContent = spicesPortion;
 	changeScore();
 }
 });

grainsBtn.addEventListener("click", function(){
if(grainsPortion < 3){
grainsPortion++;
if(grainsPortion == 3){
	 	grainsScore.classList.add("completed");
 	}
 	grainsScore.textContent = grainsPortion;
 	changeScore();
 }
 });

bevBtn.addEventListener("click", function(){
if(bevPortion < 5){
bevPortion++;
if(bevPortion == 5){
	 	bevScore.classList.add("completed");
 	}
 	bevScore.textContent = bevPortion;
 	changeScore();
 }
 });

sportBtn.addEventListener("click", function(){
if(sportPortion<1){
sportPortion++;
if(sportPortion==1){
	 	sportScore.classList.add("completed");
 	}
 	sportScore.textContent = sportPortion;
 	changeScore();
 }
 });

