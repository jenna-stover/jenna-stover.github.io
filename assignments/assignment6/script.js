const moveMoon = () => {
    const moonElem = document.getElementById("moon");
    moonElem.classList.add("dance");
};

const writeComment = () => {
    const prodNameInput = document.getElementById("txt-product-name").value;
    const commentInput = document.getElementById("txt-comment").value;
    const ratingInput = parseInt(document.getElementById("num-rating").value);
    const userNameInput = document.getElementById("txt-user-name").value;
    
    const commentP = document.getElementById("comment");
   
    commentP.innerHTML += "<section class='comment'>" + prodNameInput + "<br>" + commentInput + "<br>" + ratingInput + "<br>" + userNameInput +"</section>";
    
};

const showImg = () => {
    const imageElem = document.getElementById("cat-image")
    imageElem.style.display = "block";
}

const hideImg = () => {
    const imageElem = document.getElementById("cat-image");
    imageElem.style.display = "none";
}

/* execute when the page loads */
window.onload = () => {
    document.getElementById("button-dance").onclick = moveMoon;
    document.getElementById("comment-button").onclick= writeComment;
    document.getElementById("button-show").onclick= showImg;
    document.getElementById("button-hide").onclick= hideImg;
};

