const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

// const internships= [];

// const addInternship = () => {
//     const companyInput = document.getElementById("company-input").value;
//     const appLinkInput = document.getElementById("link-input").value;
//     const locationInput = document.getElementById("location-input").value;
//     const deadlineInput = document.getElementById("deadline-input").value;

//     const table = document.getElementById("internship-table");
//     const newRow = table.insertRow(-1);

//     const cell1 = newRow.insertCell(0);
//     const cell2 = newRow.insertCell(1);
//     const cell3 = newRow.insertCell(2);
//     const cell4 = newRow.insertCell(3);

//     cell1.innerHTML = companyInput;
//     cell2.innerHTML = `<a href="${appLinkInput}">${companyInput} Internship</a>`;
//     cell3.innerHTML = locationInput;
//     cell4.innerHTML = deadlineInput;

//     internships.push({
//         company: companyInput,
//         link: appLinkInput,
//         location: locationInput,
//         deadline: deadlineInput,
//     });

//     document.getElementById("company-input").value = "";
//     document.getElementById("link-input").value = "";
//     document.getElementById("location-input").value = "";
//     document.getElementById("deadline-input").value = "";
// };

const getInternships = async () => {
    const url = "https://jenna-stover.github.io/json/internships.json";
}


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("internship-button").onclick = addInternship;
};