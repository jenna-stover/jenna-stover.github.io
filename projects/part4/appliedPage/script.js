const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const addCompletedApp = () => {
    const completedAppInput = document.getElementById("add-completed").value;

    const list = document.getElementById("completed-apps-list");
    const newElem = document.createElement("li");
    newElem.innerHTML = `<a href="${completedAppInput}">completed application</a>`;
    list.appendChild(newElem);
};

const displayData = () => {
    const appsCompleted = parseInt(document.getElementById("number-completed").value);

    const goal = 10;

    const percentageRaised = (appsCompleted / goal) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentageRaised));

    const progressCircleFill = document.getElementById("progress-circle-fill");
    
    progressCircleFill.style.height = `${clampedPercentage}%`;
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("add-completed-button").onclick = addCompletedApp;
    document.getElementById("progress-button").onclick = displayData;
};