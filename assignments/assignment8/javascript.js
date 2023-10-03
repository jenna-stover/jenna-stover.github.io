const moveStickfigure = () => {
    const stickfigureElem = document.getElementById("stickfigure");
    stickfigureElem.classList.add("run");
}

const displayData = () => {
    const fundsRaised = parseInt(document.getElementById("funds-raised").value);

    const goal = 10000.00;

    const percentageRaised = (fundsRaised / goal) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentageRaised));

    const progressBarFill = document.getElementById("progress-bar-fill");
    
    progressBarFill.style.height = `${clampedPercentage}%`;

}


window.onload = () => {
    document.getElementById("stickfigure").onclick = moveStickfigure;
    document.getElementById("button-display-funds").onclick = displayData;
};