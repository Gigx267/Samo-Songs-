<script>
// Define an array to store your background image URLs
const backgroundImages = [
  "./p\ \(1\).jpg",  // Replace with your actual image paths
  "./p\ \(2\).jpg",  // Replace with your actual image paths
  "./p\ \(3\).jpg",  // Replace with your actual image paths
  // ... Add more image paths as needed
];

// Function to set the background image
function changeBackgroundImage() {
  // Get a random index within the backgroundImages array
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const newBackgroundImage = backgroundImages[randomIndex];

  // Update the background image of the body element
  document.body.style.backgroundImage = `url(${newBackgroundImage})`;
}

// Call the changeBackgroundImage function initially to set a starting image
changeBackgroundImage();

// Set an interval to call the changeBackgroundImage function every 8 seconds (8000 milliseconds)
setInterval(changeBackgroundImage, 8000);
</script>
