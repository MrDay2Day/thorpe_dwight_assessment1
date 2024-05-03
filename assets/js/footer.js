// Function to insert HTML content into a div
function insertHTMLIntoFooter(htmlContent) {
  const footerDiv = document.getElementById("footer");

  // Check if the footer div exists
  if (!footerDiv) {
    console.error("Footer div not found!");
    return;
  }

  // Insert the HTML content into the footer div
  footerDiv.innerHTML = htmlContent;
}

// Make a fetch request to the HTML file
fetch("./assets/js/data/components/footer.html")
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
    insertHTMLIntoFooter(htmlContent);
  })
  .catch((error) => {
    // Handle any errors
    console.error("There was a problem with the fetch operation:", error);
  });
