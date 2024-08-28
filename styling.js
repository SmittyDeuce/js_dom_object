// Function to toggle the color class on the box element
function changeColor() {
  // Get the box element by its ID
  const box = document.getElementById("box");
  // Toggle the "box" class, changing its color on each click
  box.classList.toggle("box");
}

// Function to change the image source to a GIF on mouseover
function changeGif() {
  // Get the image element by its ID
  const img = document.getElementById("rick");
  // Change the source to a GIF
  img.src = "images/The True RHM Imgur needs and deserves - Imgur.gif";
}

// Function to revert the image source to the original on mouseleave
function backToMeme() {
  // Get the image element by its ID
  const img = document.getElementById("rick");
  // Change the source back to the original image
  img.src = "images/memebetter.com-20240827200314.jpg";
}

// Function to toggle the button style on click
function changeStyle() {
  // Get the button element by its ID
  const button = document.getElementById("button");
  // Toggle the "button" class, applying different styles on each click
  button.classList.toggle("button");
}

// Function to toggle dark mode on the main container
function darkMode() {
  // Get the main container by its ID
  const div = document.getElementById("main-container");
  // Toggle the "darkmode" class, changing the background and text color
  div.classList.toggle("darkmode");
}

// Array of colors to cycle through for the background color
let colors = ["red", "pink", "aqua"];
// Index to keep track of the current color
let currentColorIndex = 0;

// Function to change the background color of the header element
function changeBackgroundColor() {
  // Get the header element by its ID
  const header = document.getElementById("header");
  // Update the background color to the next color in the array
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  // Apply the new background color
  header.style.backgroundColor = colors[currentColorIndex];
}
