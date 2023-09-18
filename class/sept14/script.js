//console.log("Jenna"); 
//checks if JS is working... go to console by more tools -> developer tools -> console

//const add = (a, b) => { return a+b; }
//const add = (a,b) => a+b; ----same thing

//console.log(add(5,6));

//const square = a => a * a;

//console.log(square(5));

//const hello = () => console.log("Hello me!");
//hello();

//const helloSpecific = userName => console.log("Hello " + userName + "!");
//helloSpecific("Jenna");

/*
const helloFullName = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
    console.log("You are awesome!")
};
*/

/* Not okay to change a constant
const myName = "Jenna";
myName = "Sally"; */

// const myFunct = () => console.log("Hey you!");
const animateSqr = () => {
    document.getElementById("square").classList.add("animation");
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value; /*makes equivalent to text inside the box */
    console.log("Hello " + firstName + "!");
}
window.onload = () => {
    document.getElementById("button-move").onclick = animateSqr;
    document.getElementById("button-show-name").onclick = displayName;
}

