class Toy {
    constructor(name, price, ageRange, rating, pic) {
      this.name = name;
      this.price = price;
      this.ageRange = ageRange;
      this.rating = rating;
      this.pic = pic;
    }

    get item() {
        const toySection = document.createElement("section");
        toySection.classList.add("toy");

        const heading = document.createElement("h3");
        heading.innerText = this.name;
        toySection.appendChild(heading);
        return toySection;
    }
 }



 window.onload = () => {
    let toys = [];
    let toyList = document.getElementById("toy-list");

    toys.push(new Toy("Training Bike", 40, "5-10", 4, "bike-toy.jpg"));
    toys.push(new Toy("Hello Kitty Plush", 25, "2-6", 5, "hello-kitty-toy.jpg"));
    toys.push(new Toy("JumpRope", 30, "8-15", 3.5, "jumprope-toy.jpg"))
    toys.push(new Toy("Practice Keyboard", 50, "8-16", 4, "keyboard-toy.jpg"));
    toys.push(new Toy("Legos", 20, "8-12", 4, "lego-toy.jpg"));
    toys.push(new Toy("Slinky", 10, "5-15", 5, "slinky-toy.jpg"));

    for (let i in toys) {
        toyList.append(toys[i].item);
    }

 };

