
const animateSqr = () => {
    //document.getElementById("square").classList.toggle("animation");
    const square = document.getElementById("square");
    const button = document.getElementById("button-move");

    //is it currently animating?
    //pull "anim-square" from styles"
    if(square.classList.contains("anim-square")) {
        square.classList.remove("anim-square");
        button.innerHTML = "Start";
    } else {
        square.classList.add("anim-square");
        button.innerHTML = "Stop";
    }
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value; /*makes equivalent to text inside the box */
    console.log("Hello " + firstName + "!");
}
window.onload = () => {
    document.getElementById("button-move").onclick = animateSqr;
    document.getElementById("button-show-name").onclick = displayName;
}

