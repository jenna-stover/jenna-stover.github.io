const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const displayData = () => {
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name-1").value;
    const age1 = parseInt(document.getElementById("num-age-1").value);
    const name2 = document.getElementById("txt-name-2").value;
    const age2 = parseInt(document.getElementById("num-age-2").value);
    const name3 = document.getElementById("txt-name-3").value;
    const age3 = parseInt(document.getElementById("num-age-3").value);
    
    if(name1 === "" || isNaN(age1) || name2 === "" || isNaN(age2) || name3 === "" || isNaN(age3)) {
        resultDiv.innerHTML = "<p>Oldest to Youngest: Invalid Information.</p>";
        return; 
    }

    let oldestName = "";
    let middleName = "";
    let youngestName = "";

    if(age1 >= age2 && age1 >= age3) {
        oldestName = name1;
        if (age2 >= age3) {
            middleName = name2;
            youngestName = name3;
        } else {
            middleName = name3;
            youngestName = name2;
        }
    }else if(age2 >= age1 && age2 >= age3) {
        oldestName = name2;
        if (age1 >= age3) {
            middleName = name1;
            youngestName = name3;
        } else {
            middleName = name3;
            youngestName = name1;
        }
    }else{
        oldestName = name3;
        if (age1 >= age2) {
            middleName = name1;
            youngestName = name2;
        } else {
            middleName = name2;
            youngestName = name1;
        }
    }

    resultDiv.innerHTML = `<section>Oldest to Youngest: ${oldestName}, ${middleName}, ${youngestName}</section>`;
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;

    document.getElementById("button-compare-ages").onclick = displayData;
};