

const addQuote = () => {
    const currentQuote = document.querySelector("#slideshow :not(.hidden)");
    currentQuote.classList.add("hidden");

    let nextQuote = currentQuote.nextElementSibling;

    if (nextQuote == null) {
        nextQuote = document.querySelector("#slideshow :first-child");
    }

    nextQuote.classList.remove("hidden");


}


window.onload = () => {
    document.getElementById("button-rainbow").onclick = addQuote;
}