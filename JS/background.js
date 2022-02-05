const images = ["img1.jpeg", "img2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);