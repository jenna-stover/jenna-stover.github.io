const moveStickfigure = () => {
    const stickfigureElem = document.getElementById("stickfigure");
    stickfigureElem.classList.add("run");
}

const displayData = () => {
    const fundsRaised = parseInt(document.getElementById("funds-raised").value);
    const resultDiv = document.getElementById("result");

    if(isBlank(fundsRaised, "error-funds") | 
    isNotNumber(fundsRaised, "error-funds"))
    {
        return false; 
    }

    const goal = 10000.00;

    const percentageRaised = (fundsRaised / goal) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentageRaised));

    resultDiv.style.background = `linear-gradient(to top, #790967 ${clampedPercentage}%, #ffffff ${clampedPercentage}%)`;

}

const isNotNumber = (data, id) => {
    if (data.trim() == "" || isNaN(data)) {
        document.getElementById(id).classList.remove("hide");
        return true;
    }
}


window.onload = () => {
    document.getElementById("stickfigure").onclick = moveStickfigure;
    document.getElementById("button-display-funds").onclick = displayData;
};