// Initialize an empty object to store the form data
let resObj = {};

// Function to handle form submission
function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve values from form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Store the retrieved values in the resObj object
  resObj.Name = name;
  resObj.Email = email;
  resObj.Message = message;

  // Reset the form fields
  document.getElementById("form").reset();

  // Output the resObj object to the console for debugging
  console.log(resObj);
}
