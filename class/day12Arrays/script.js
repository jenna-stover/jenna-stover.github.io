var toys = ["drum", "ball", "skipping rope", "doll", "bike"];

const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};

const showToys = () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    const ulElem = document.createElement("ul");
    resultDiv.append(ulElem);

    const toys = ["drum", "ball", "skipping rope", "doll", "bike"];

    // or: for(let i in toys){}
    for(let i = 0; i < toys.length; i++){
        const liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);
    }
}

const addToy = () => {
    const toyName = document.getElementById("txt-toy").value;
    toys.push(toyName);

    showToys();
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    showToys();
    document.getElementById("button-add-toy").onclick = addToy;
}