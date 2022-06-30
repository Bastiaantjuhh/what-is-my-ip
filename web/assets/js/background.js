// class list as defined in main.scss
const bodyClassArray = [
    "body-shine",
    "body-hazel",
    "body-instagram",
    "body-atlas",
    "body-nighttime",
    "body-summersea",
    "body-summermidnight"
];

// Select random class from Array
const randomClass = Math.floor(Math.random() * bodyClassArray.length);
document.querySelector("body").classList.add(bodyClassArray[randomClass]);