(function navFunctions() {
  let openMenuBtn = document.getElementById("menu-open-btn"),
    navBar = document.getElementById("nav");

  openMenuBtn.addEventListener("click", function () {
    navBar.classList.toggle("closed");

    this.children[0].classList.toggle("fa-times");
  });

  let mobilNavItems = Array.from(
    document.getElementById("mobil-list").children
  );

  mobilNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      location.href = `#${item.textContent.toLowerCase()}`;

      openMenuBtn.click();
    });
  });

  let NavItems = Array.from(document.getElementById("nav-list").children);

  NavItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.childNodes[0].nodeValue.trim() != "More") {
        location.href = `#${item.textContent.toLowerCase()}`;
      }
    });
  });

  let dropdownChildren = Array.from(
    document.getElementById("dropdown").children
  );

  dropdownChildren.forEach((child) => {
    child.addEventListener("click", () => {
      location.href = `#${child.textContent.toLowerCase()}`;
    });
  });

  let socialMedia = [
    {
      class: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/abdulkerim-awad-92652321a/",
    },
    {
      class: "fab fa-facebook-square",
      url: "https://www.facebook.com/RNXCode",
    },
    { class: "fab fa-github-square", url: "https://github.com/AbdulkerimAwad" },
  ];

  let socialMediaCont = document.getElementById("social-media"),
    headerSocialMediaCont = document.getElementById("header-social-media");

  socialMedia.forEach((i) => {
    let item = document.createElement("i");
    item.className = i.class;

    item.addEventListener("click", () => {
      window.open(i.url);
    });

    socialMediaCont.appendChild(item);
  });

  socialMedia.forEach((i) => {
    let item = document.createElement("i");
    item.className = i.class;

    item.addEventListener("click", () => {
      window.open(i.url);
    });

    headerSocialMediaCont.appendChild(item);
  });
})();
(function sliderFunction() {
  let images = Array.from(document.getElementById("slider").children),
    politsCont = document.getElementById("polits-cont");

  for (let i = 0; i < images.length - 1; i++) {
    let polit = document.createElement("div");

    polit.className = "polit";

    politsCont.appendChild(polit);
  }

  let polits = Array.from(politsCont.children);

  polits[0].classList.add("active");
  images[0].classList.add("active");

  let i = 0;

  polits.forEach((polit, ind) => {
    polit.addEventListener("click", () => {
      images.forEach((image) => {
        image.classList.remove("active");
      });

      polits.forEach((polit) => {
        polit.classList.remove("active");
      });

      images[ind].classList.add("active");
      polits[ind].classList.add("active");
      i = ind;
    });
  });
})();
(function projectsFunction() {
  let staticProjContainer = document.getElementById("vanillaJS-projects"),
    reactProjContainer = document.getElementById("react-projects"),
    apiProjContainer = document.getElementById("api-projects"),
    projects = [
      {
        name: "Concomitant",
        type: "vanilla",
        color: "#80b300d7",
        link: "https://abdulkerimawad.github.io/Concomitant-Site/",
        poster: "./Images/web-sites/Concomitant.png",
        about:
          "This website is a portfolio site suitable for programmers, designers and artists",
      },
      {
        name: "Shortly",
        type: "api",
        color: "#2bd1d1db",
        link: "https://abdulkerimawad.github.io/URL-Shortener/",
        poster: "./Images/web-sites/Shortly.jpg",
        about: "This website is a links shortener tool",
      },
    ]

  for (const project of projects) {
    let proj = document.createElement("div"),
      after = document.createElement("div"),
      pName = document.createElement("p"),
      goBtn = document.createElement("p"),
      about = document.createElement("p");

    proj.id = project.name;
    proj.style.backgroundImage = `url(${project.poster})`;

    pName.textContent = project.name;
    pName.className = "name";

    about.textContent = project.about;
    about.className = "about";

    after.className = "info";
    after.style.backgroundColor = project.color;

    goBtn.textContent = "Go Site";
    goBtn.className = "btn";
    
    goBtn.addEventListener("click", () => {
      window.open(project.link, "blank");
    });

    after.appendChild(pName);
    after.appendChild(about);
    after.appendChild(goBtn);

    proj.appendChild(after);

    if (project.type == "vanilla") {
      staticProjContainer.appendChild(proj);
    } else if (project.type == "react") {
      reactProjContainer.appendChild(proj);
    } else if (project.type == "api") {
      apiProjContainer.appendChild(proj);
    }
  }

  let projectsTabs = Array.from(
      document.getElementById("projects-tabs").children
    ),
    projectsContents = Array.from(
      document.getElementById("projects-contents").children
    );

  projectsTabs.forEach((tab, ind) => {
    tab.addEventListener("click", () => {
      projectsTabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      projectsContents.forEach((content) => {
        content.classList.remove("active");
      });

      projectsTabs[ind].classList.add("active");
      projectsContents[ind].classList.add("active");
    });
  });
})();
(function contactFunction() {
  let contactMedias = [
    {
      class: "fab fa-facebook-messenger",
      url: "https://www.facebook.com/messages/t/100006729790359",
    },
    {
      class: "fab fa-whatsapp",
      url: "https://api.whatsapp.com/send?phone=+905527137800",
    },
    { class: "fab fa-telegram", url: "" },
  ];

  let contactMediasCont = document.getElementById("contact-media");

  contactMedias.forEach((media) => {
    let item = document.createElement("i");

    item.className = media.class;

    item.addEventListener("click", () => {
      window.open(media.url);
    });

    contactMediasCont.appendChild(item);
  });
})();
(function footerFunction() {
  let copyRight = document.getElementById("copy-right"),
    now = new Date();

  copyRight.textContent = now.getFullYear();
})();
