// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];




// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProduct() {
    // Get the container element where the product details will be displayed
    let productContainer = document.getElementById("container");

    // Clear any existing content inside the container
    container.innerHTML = "";

    // Loop through each product in the products array
    for (let i = 0; i < products.length; i++) {
        // Access the current product object
        productObject = products[i];
        
        // Get the product's name, price, and description
        let name = productObject.name;
        let price = productObject.price;    
        let description = productObject.description;

        // Create new HTML elements to display the product details
        let productDiv = document.createElement("div"); // Container for each product
        let productName = document.createElement("h2"); // Element for the product name
        let productPrice = document.createElement("p"); // Element for the product price
        let productDescription = document.createElement("p"); // Element for the product description

        // Set the text content of the created elements
        productName.textContent = `Name: ${name}`;
        productPrice.textContent = `Price: ${price}`;
        productDescription.textContent = `Description: ${description}`;

        // Append the product details to the product container
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        // Add the product container to the main container element in the DOM
        container.appendChild(productDiv);
    }
}




// Task 3: Implement an event listener to trigger the display of products when the page loads. 

document.getElementById("button").addEventListener("click", function(){
    alert("Button clicked!")
})