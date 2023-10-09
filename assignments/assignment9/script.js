const quotes = [];

const initializeQuotesArray = () => {
    const quoteElements = document.querySelectorAll("#slideshow .hidden");
    quoteElements.forEach((quoteElement) => {
      quotes.push(quoteElement.textContent);
    });
  };

const slide = () => {
    const currentQuote = document.querySelector("#slideshow :not(.hidden)");
    currentQuote.classList.add("hidden");

    let nextQuote = currentQuote.nextElementSibling;

    if (nextQuote == null) {
        nextQuote = document.querySelector("#slideshow :first-child");
    }

    nextQuote.classList.remove("hidden");
}


const rainbowColors = ["red", "orange", "yellow", "green", "blue", "purple"];
let i = 0;

const createRainbow = () => {
    const rainbowDiv = document.getElementById("results-rainbow");
    const potOfGold = document.getElementById("pot-of-gold");

    if(i < rainbowColors.length) {
        const color = rainbowColors[i];
        const rainbowStrip = document.createElement("div");
        rainbowStrip.classList.add("rainbow-strip");
        rainbowStrip.style.backgroundColor = color;
        rainbowDiv.appendChild(rainbowStrip);

        i++;

        setTimeout(createRainbow, 1000);
    } 
    else {
        setTimeout(() => {
            potOfGold.style.display = "block";
        }, 1000);
    }
  
}

window.onload = () => {
    initializeQuotesArray();
    setInterval(slide, 2000);
    document.getElementById("button-rainbow").onclick = createRainbow;
}