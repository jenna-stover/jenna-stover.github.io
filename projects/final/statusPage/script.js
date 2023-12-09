const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const interviews= [];

const addInterview = () => {
    const companyInput = document.getElementById("company").value;
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;


    const table = document.getElementById("interview-table");
    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = companyInput;
    cell2.innerHTML = dateInput;
    cell3.innerHTML = timeInput;

    interviews.push({
        company: companyInput,
        date: dateInput,
        time: timeInput,
    });

    document.getElementById("company").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

};

const statuses = [];

const addStatus = () => {
    const companyInput = document.getElementById("company-status").value;
    const statusInput = document.getElementById("status").value;

    const table = document.getElementById("status-table");
    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.innerHTML = companyInput;
    cell2.innerHTML = statusInput;

    interviews.push({
        company: companyInput,
        status: statusInput,
    });

    document.getElementById("company-status").value = "";
    document.getElementById("status").value = "";

};


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("add-interview-button").onclick = addInterview;
    document.getElementById("add-status-button").onclick = addStatus;
};