const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const displayData = () => {
    const appsCompleted = parseInt(document.getElementById("input2").value);

    const goal = 10;

    const percentageRaised = (appsCompleted / goal) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentageRaised));

    const progressBarFill = document.getElementById("progress-bar-fill");
    
    progressBarFill.style.height = `${clampedPercentage}%`;
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("progress-button").onclick = displayData;
}