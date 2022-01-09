const contain = document.getElementById("container"); //this is for question one
console.log(contain); //this is for question two
console.log(document.querySelector("section")); //this is for question three
console.log(document.querySelectorAll(".second")); //this is for question four
console.log(document.getElementsByTagName("ol")[0].children[2]); //this is for question five
document.getElementsByTagName("div")[1].classList.add("main") //this is for question six
document.getElementsByTagName("div")[1].classList.remove("main") //this is for question seven
let lee = document.createElement("li");//this is for question eight
lee.innerText = "four";//this is for question nine
document.getElementsByTagName("ul")[0].appendChild(lee);//this is for question ten

let x=document.getElementById("container"); //this is for question eleven
let nodelist = x.getElementsByTagName("ul");
for(let i=0; i < nodelist.length; i++){
    nodelist[i].style.backgroundColor = "tomato";
}

document.getElementsByTagName("div")[1].classList.remove("footer")//this is for question twoelf
