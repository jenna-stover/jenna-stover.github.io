const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

var internships = [];

const initializeInternshipArray = () => {
    const internshipElem = document.querySelector("#list-internships");
    const internshipItems = internshipElem.querySelectorAll("li");

    internshipItems.forEach((internshipItem) => {
      internships.push(internshipItem.textContent);
    });
  };

const showInternships = () => {
    const resultDiv = document.getElementById("updated-list");
    resultDiv.innerHTML = "";
    const ulElem = document.createElement("ul");
    resultDiv.appendChild(ulElem);

    for(let i = 0; i < internships.length; i++){
        const liElem = document.createElement("li");
        liElem.textContent = internships[i];
        ulElem.appendChild(liElem);
    }
}

const addInternship = () => {
    const internshipName = document.getElementById("new-internship").value;
    internships.push(internshipName);

    showInternships();

    document.getElementById("new-internship").value = "";
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    initializeInternshipArray();
    document.getElementById("internship-button").onclick = addInternship();
}