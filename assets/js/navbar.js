const navLinks = [
  { label: "Home", url: "index.html", id: "home-link", className: "nav-link" },
  {
    label: "About",
    url: "about.html",
    id: "about-link",
    className: "nav-link",
  },
  // {
  //   label: "Services",
  //   url: "services.html",
  //   id: "services-link",
  //   className: "nav-link",
  // },
  // {
  //   label: "Contact",
  //   url: "contact.html",
  //   id: "contact-link",
  //   className: "nav-link",
  // },
];

function createNavLinks(links) {
  const nav = document.getElementById("navbar");
  const ul_1 = document.createElement("ul");
  ul_1.setAttribute("class", "ul_1");

  links.forEach((link) => {
    const li_1 = document.createElement("li");
    li_1.setAttribute("class", "li_1");

    const a = document.createElement("a");
    a.textContent = link.label;
    a.setAttribute("href", link.url);
    a.setAttribute("id", link.id);
    a.setAttribute("class", link.className);

    li_1.appendChild(a);

    ul_1.appendChild(li_1);
  });

  nav.appendChild(ul_1);
}

createNavLinks(navLinks);
