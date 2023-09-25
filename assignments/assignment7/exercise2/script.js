const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const displayData = () => {
    const resultDiv = document.getElementById("result");
    const fundsRaised = document.getElementById("funds-raised").value;
    const goal = 10000.00;

    const percentageRaised = (fundsRaised / goal) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentageRaised));

    resultDiv.style.background = `linear-gradient(to top, #790967 ${clampedPercentage}%, #ffffff ${clampedPercentage}%)`;

}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;

    document.getElementById("button-display-funds").onclick = displayData;
};