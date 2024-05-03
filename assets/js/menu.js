// Function to create and append elements
async function renderMenuItems() {
  const menuDiv = document.getElementById("menu-items");

  // Check if the div exists
  if (!menuDiv) {
    console.error("Menu div not found!");
    return;
  }

  fetch("./assets/js/data/menu.json")
    .then((data) => data.json())
    .then((menuItems) => {
      console.log({ menuItems });
      menuItems.data.forEach((item) => {
        // Create main team-card div
        const teamCard = document.createElement("div");
        teamCard.classList.add("team-card");

        // Create image-card-menu div
        const imageCardMenu = document.createElement("div");
        imageCardMenu.classList.add("image-card-menu");
        imageCardMenu.style.width = "200px";
        imageCardMenu.style.height = "200px";

        // Create image element and set attributes
        const image = document.createElement("img");
        image.src = item.image;
        image.style.width = "400px";
        image.style.height = "auto";

        // Append image to image-card-menu div
        imageCardMenu.appendChild(image);

        // Create div for title, description, and price
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        // Create and append title, description, and price elements
        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = item.title;
        infoDiv.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = item.description;
        infoDiv.appendChild(description);

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = item.price;
        infoDiv.appendChild(price);

        // Append image-card-menu and infoDiv to team-card div
        teamCard.appendChild(imageCardMenu);
        teamCard.appendChild(infoDiv);

        // Append team-card to the menu div
        menuDiv.appendChild(teamCard);
      });
    })
    .catch((err) => console.log({ err }));

  // Loop through the array and create elements for each object
}

// Call the function to render menu items
renderMenuItems();
