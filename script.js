// Get references to the container, inner image, and text elements

const container = document.querySelector('.image1');

const image = container.querySelector('.img');

const text = container.querySelector('.innerdiv img');



// Add smooth transitions

image.style.transition = 'transform 0.3s ease';

text.style.transition = 'transform 0.3s ease';



// Add event listener for mouseover

container.addEventListener('mouseover', function() {

  // Scale the image

  image.style.transform = 'scale(1.2)';

  // Move the text to the right slightly

  text.style.transform = 'translateX(.5vw)'; // Adjust as needed

});



// Add event listener for mouseout

container.addEventListener('mouseout', function() {

  // Reset the image scale

  image.style.transform = 'scale(1)';

  // Reset the text position

  text.style.transform = 'translateX(0)';

});



let netchiximg = [

  "img/1/main.png",

  "img/1/1.png",

  "img/1/2.png",

  "img/1/3.png",

  "img/1/4.png",

  "img/1/5.png"

];



let otherImgArray1 = [

  "img/2/main.png",

  "img/2/1.png",

  "img/2/2.png",

  "img/2/3.png",

  "img/2/4.png",

  "img/2/5.png"

];



let otherImgArray2 = [

  "img/3/main.png",

  "img/3/1.png",

  "img/3/2.png",

  "img/3/3.png",

  "img/3/4.png",

  "img/3/5.png"

];



let allImageArrays = [netchiximg, otherImgArray1, otherImgArray2];



let currentArrayIndex = 0;



// Function to update images

function updateImages() {

  let currentArray = allImageArrays[currentArrayIndex];

  document.querySelector('.Image img').src = currentArray[0];

  document.querySelector('.ontop img').src = currentArray[1];

  document.querySelector('.image1 img').src = currentArray[2];

  document.querySelector('.innerdiv img').src = currentArray[3];

  document.querySelector('.image2 img').src = currentArray[4];

  document.querySelector('.image3 img').src = currentArray[5];

}



// Update images on window load

window.addEventListener('load', function() {

  updateImages(); // Initial set of images

  setInterval(function() {

    currentArrayIndex = (currentArrayIndex + 1) % allImageArrays.length; // Increment index and wrap around

    updateImages();

  }, 5000); // Change images every 5 seconds

});

document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission

  const nameInput = document.getElementById('name');
  const form = e.target;
  const formData = new FormData(form);
  const submitButton = document.getElementById("form-submit");
  const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
  const currentTime = Date.now();
  const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

  // Check if the name input is "RobertZes"
  const nameValue = nameInput.value.trim();
  if (nameValue === "RobertZes") {
    alert("Name is RobertZes!"); // Action when the name matches
    return; // Exit the function
  }
  else{
    alert(nameValue);
  }

  // Check if the user submitted the form within the last hour
  if (lastSubmissionTime && currentTime - lastSubmissionTime < oneHour) {
    const timeLeft = Math.ceil((oneHour - (currentTime - lastSubmissionTime)) / (60 * 1000)); // Time left in minutes
    alert(`You can only send one message per hour. Please wait ${timeLeft} minute(s).`);
    return; // Exit without sending the form
  }

  // Display loading message while sending
  submitButton.disabled = true;
  submitButton.innerText = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    const result = await response.text(); // Get response from the server
    console.log("Server response:", result); // Log the response for debugging

    // Check the response to determine if the message was successfully sent
    if (result.trim() === "Message sent successfully!") {
      alert("Message sent successfully!");
      form.reset(); // Reset the form after success
      localStorage.setItem("lastSubmissionTime", currentTime); // Save the current time as the last submission time
    } else {
      alert("Error: " + result); // Display error message if not successful
    }
  } catch (error) {
    console.error("Fetch error:", error); // Log detailed fetch error
    alert("Something went wrong. Please try again.");
  } finally {
    // Re-enable the button after the request finishes
    submitButton.disabled = false;
    submitButton.innerText = "Send a message";
  }
});





document.addEventListener('DOMContentLoaded', function() {

  const textarea = document.getElementById('message');

  const charCount = document.getElementById('char-count');

  const maxChars = 500;

// Clear localStorage
localStorage.clear();

// Clear sessionStorage
sessionStorage.clear();


  textarea.addEventListener('input', function() {

      let message = textarea.value;

      

      if (message.length > maxChars) {

          message = message.substring(0, maxChars); // Trim message to 1000 characters

          textarea.value = message; // Update textarea value

      }



      const currentChars = message.length;

      const charsLeft = maxChars - currentChars;



      charCount.textContent = charsLeft;



      if (charsLeft < 0) {

          charCount.style.color = 'red';

      } else {

          charCount.style.color = '#888';

      }

  });

});