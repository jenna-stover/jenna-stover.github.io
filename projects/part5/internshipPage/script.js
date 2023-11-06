const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const internshipsArr= [];

const addInternship = () => {
    const companyInput = document.getElementById("company-input").value;
    const appLinkInput = document.getElementById("link-input").value;
    const locationInput = document.getElementById("location-input").value;
    const deadlineInput = document.getElementById("deadline-input").value;

    internshipsArr.push({
        company: companyInput,
        link: appLinkInput,
        location: locationInput,
        deadline: deadlineInput,
    });

    document.getElementById("company-input").value = "";
    document.getElementById("link-input").value = "";
    document.getElementById("location-input").value = "";
    document.getElementById("deadline-input").value = "";

    showInternships();
};


const getInternships = async () => {
    const url = "https://jenna-stover.github.io/json/internships.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};

const showInternships = async () => {
    let internships = await getInternships();
    let internshipsSection = document.getElementById("internships-section");

    internships.forEach((internship) => {
        internshipsSection.append(getInternshipItem(internship));
    });
};

const getInternshipItem = (internship) => {
    let section = document.createElement("section");
    section.classList.add("internship");

    let img = document.createElement("img");
    img.src = internship.img;
    section.append(img);

    let div = document.createElement("div");
    section.append(div);

    let h3 = document.createElement("h3");
    h3.innerText = internship.company;
    div.append(h3);

    let ul = document.createElement("ul");
    div.append(ul);
    
    let applicationLink = document.createElement("a");
    applicationLink.href = internship.link;
    applicationLink.textContent = "Application Link";
    applicationLink.target = "_blank"; 
    
    ul.append(applicationLink);
    ul.append(getLi(`Internship Location: ${internship.location}`));
    ul.append(getLi(`Deadline: ${internship.deadline}`));
    return section;
};

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;

    return li;
};


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("internship-button").onclick = addInternship;
    showInternships();
};