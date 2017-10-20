var beans = document.getElementById("beans");
var berries = document.getElementById("berries");
var other = document.getElementById("other");
var cruciferos = document.getElementById("cruciferos");
var greens = document.getElementById("greens");
var otherVeg = document.getElementById("otherVeg");
var flax = document.getElementById("flax");
var nuts = document.getElementById("nuts");
var spices = document.getElementById("spices");
var grains = document.getElementById("grains");
var bevereges = document.getElementById("bevereges");
var sport = document.getElementById("sport");


function popUp(el1, el2){
    el1.addEventListener("mouseover", function(){
        document.getElementById(el2).style.display = "block";
    });
    
    el1.addEventListener("mouseout", function(){
    document.getElementById(el2).style.display = "none";
    
});
}


popUp(beans, "beansPopUp");
popUp(berries, "berriesPopUp");
popUp(other, "otherPopUp");
popUp(cruciferos, "cruciferosPopUp");
popUp(greens, "greensPopUp");
popUp(otherVeg, "otherVegPopUp");
popUp(flax, "flaxPopUp");
popUp(nuts, "nutsPopUp");
popUp(spices, "spicesPopUp");
popUp(grains, "grainsPopUp");
popUp(bevereges, "beveregesPopUp");
popUp(sport, "sportPopUp");
