const getShoes = async () => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    //want to use try-catch when trying to open url
    try {
        //don't move to next line until this line is done (await)
        const response = await fetch(url);
        return await response.json();
    } catch(error){
        console.log(error);
    }
};

const showShoes = async () => {
    let shoes = getShoes;

    console.log(shoes);
};

window.onload = () => showShoes();

