// Function to insert HTML content into a div
function insertHTMLIntoNav(htmlContent) {
  const navDiv = document.getElementById("nav");

  // Check if the footer div exists
  if (!navDiv) {
    console.error("Nav div not found!");
    return;
  }

  // Insert the HTML content into the footer div
  navDiv.innerHTML = htmlContent;
}

// Make a fetch request to the HTML file
fetch("./assets/js/data/components/nav.html")
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Return the response text
    return response.text();
  })
  .then((htmlContent) => {
    // Insert the retrieved HTML content into the footer div
    insertHTMLIntoNav(htmlContent);
  })
  .catch((error) => {
    // Handle any errors
    console.error("There was a problem with the fetch operation:", error);
  });
