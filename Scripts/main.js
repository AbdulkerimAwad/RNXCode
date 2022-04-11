/* ------------------------------ nav function ------------------------------ */

const openMenuBtn = document.getElementById("menu-open-btn");

openMenuBtn.addEventListener("click", function () {
  openTheMenu(this);
});

function openTheMenu(btn) {
  document.getElementById("nav").classList.toggle("closed");
  btn.children[0].classList.toggle("fa-times");
}

document.getElementById("nav").addEventListener("click", (e) => {
  goToTheChosenSection(e.target);
});

function goToTheChosenSection(target) {
  if (target.classList.contains("nav-item")) {
    location.href = `#${target.textContent.toLowerCase()}`;
    if (target.parentElement.classList.contains("mobile-list")) {
      openMenuBtn.click();
    }
  }
}

(function creatTheSocialMediaBtns() {
  let socialMediaData = [
    {
      class: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/abdulkerim-awad-92652321a/",
    },
    {
      class: "fab fa-facebook-square",
      link: "https://www.facebook.com/RNXCode",
    },
    {
      class: "fab fa-github-square",
      link: "https://github.com/AbdulkerimAwad",
    },
  ];

  let mobileSocialMediaCont = document.getElementById("mobile-social-media"),
    headerSocialMediaCont = document.getElementById("header-social-media"),
    i;

  socialMediaData.forEach((d) => {
    for (i = 0; i < 2; i++) {
      let item = document.createElement("i");
      item.className = d.class;

      item.addEventListener("click", () => {
        window.open(d.link);
      });

      i < 1
        ? mobileSocialMediaCont.appendChild(item)
        : headerSocialMediaCont.appendChild(item);
    }
  });
})();

/* ----------------------------- slider function ---------------------------- */
(function creatSliderFunctionality() {
  let images = [...document.querySelectorAll("#slider img")],
    politsCont = document.getElementById("polits-cont"),
    i;

  for (i = 0; i < images.length; i++) {
    let polit = document.createElement("div");
    polit.className = "polit";
    i < 1 ? polit.classList.add("active") : null;
    politsCont.appendChild(polit);
  }

  images[0].classList.add("active");

  politsCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("polit")) {
      [...e.target.parentElement.children].forEach((polit, index) => {
        polit.classList.remove("active");
        images[index].classList.remove("active");
      });

      e.target.classList.add("active");
      images[[...politsCont.children].indexOf(e.target)].classList.add(
        "active"
      );
    }
  });
})();

/* ---------------------------- projects function  --------------------------- */
(function showTheCurrentProjects() {
  let staticProjContainer = document.getElementById("vanillaJS-projects"),
    reactProjContainer = document.getElementById("react-projects"),
    apiProjContainer = document.getElementById("api-projects"),
    projects = [
      {
        name: "Concomitant",
        type: "vanillaJs",
        color: "#80b300",
        link: "https://abdulkerimawad.github.io/Concomitant-Site/",
        poster: "./Images/web-sites/Concomitant.webp",
        about:
          "This website is a portfolio site suitable for programmers, designers and artists",
      },
      {
        name: "Shortly",
        type: "api",
        color: "#2bd1d1",
        link: "https://abdulkerimawad.github.io/URL-Shortener/",
        poster: "./Images/web-sites/Shortly.webp",
        about: "This website is a links shortener tool",
      },
    ];

  for (const project of projects) {
    let proj = document.createElement("div"),
      pInfo = document.createElement("div"),
      pName = document.createElement("p"),
      about = document.createElement("p"),
      goBtn = document.createElement("a");

    proj.id = project.name;
    proj.style.backgroundImage = `url(${project.poster})`;

    pInfo.className = "info";
    pInfo.style.backgroundColor = project.color;

    pName.textContent = project.name;
    pName.className = "name";

    about.textContent = project.about;
    about.className = "about";

    goBtn.textContent = "Go Site";
    goBtn.href = project.link;
    goBtn.setAttribute("target", "_blank");

    pInfo.appendChild(pName);
    pInfo.appendChild(about);
    pInfo.appendChild(goBtn);

    proj.appendChild(pInfo);

    if (project.type == "vanillaJs") {
      staticProjContainer.appendChild(proj);
    } else if (project.type == "react") {
      reactProjContainer.appendChild(proj);
    } else if (project.type == "api") {
      apiProjContainer.appendChild(proj);
    }
  }

  let projectsTabsCont = document.getElementById("projects-tabs"),
    projectsCont = document.getElementById("projects-contents");

  projectsTabsCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
      [...e.target.parentElement.children].forEach((tab, index) => {
        tab.classList.remove("active");
        projectsCont.children[index].classList.remove("active");
      });

      e.target.classList.add("active");

      projectsCont.children[
        [...projectsTabsCont.children].indexOf(e.target)
      ].classList.add("active");
    }
  });
})();

(function creatContactsFunctionality() {
  let contactMedias = [
    {
      class: "fab fa-facebook-messenger",
      url: "https://www.facebook.com/messages/t/100006729790359",
    },
    {
      class: "fab fa-whatsapp",
      url: "https://api.whatsapp.com/send?phone=+905527137800",
    },
    { class: "fab fa-telegram", url: "https://t.me/AbdulkerimAwad" },
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

/* ---------------------------- footer functions ---------------------------- */
(function setTheCopyRightYears() {
  let copyRight = document.getElementById("copy-right"),
    currentYear = new Date();

  copyRight.textContent = `2021-${currentYear.getFullYear()}`;
})();
