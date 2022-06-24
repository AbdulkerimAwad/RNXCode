/* ---------------------------- loader functions ---------------------------- */
window.onload = () => document.getElementById("loader").remove();

/* ------------------------------ nav function ------------------------------ */

const openMenuBtn = document.getElementById("menu-open-btn");
const navbar = document.getElementById("nav");

openMenuBtn.addEventListener("click", function () {
  openTheMenu(this);
});

function openTheMenu(btn) {
  navbar.classList.toggle("closed");
  btn.classList.toggle("clicked");
}

navbar.addEventListener("click", (e) => {
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

let previousScrollValue = window.scrollY;
const header = document.getElementById("home");

window.onscroll = () => {
  let currentScrollValue = window.scrollY;

  if (previousScrollValue < currentScrollValue) {
    navbar.classList.add("folded");
  } else {
    navbar.classList.remove("folded");
  }

  previousScrollValue = currentScrollValue;

  if (window.scrollY >= header.offsetTop + header.offsetHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};

/* ----------------------------- slider function ---------------------------- */
function creatSliderFunctionality() {
  let images = [...document.querySelectorAll("#slider .slite")],
    i;
  const bulletsCont = document.getElementById("bullets-cont");

  for (i = 0; i < images.length; i++) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    i < 1 ? bullet.classList.add("active") : null;
    bulletsCont.appendChild(bullet);
  }

  images[0].classList.add("active");

  bulletsCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("bullet")) {
      [...e.target.parentElement.children].forEach((bullet, index) => {
        bullet.classList.remove("active");
        images[index].classList.remove("active");
      });

      e.target.classList.add("active");
      images[[...bulletsCont.children].indexOf(e.target)].classList.add(
        "active"
      );
    }
  });
}

creatSliderFunctionality();

/* ---------------------------------- Stats --------------------------------- */
let statsSection = document.getElementById("statistics"),
  stats = document.querySelectorAll(".stats .statistic p"),
  isStarted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 10) {
    if (!isStarted) {
      stats.forEach((stat) => startCounting(stat));
    }

    isStarted = true;
  }
});

function startCounting(statistic) {
  let goal = statistic.dataset.goal;

  let count = setInterval(() => {
    statistic.textContent++;

    if (statistic.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

/* ---------------------------- projects function  --------------------------- */
(function showTheCurrentProjects() {
    const staticProjContainer = document.getElementById("vanillaJS-projects");
    const bootstrapProjContainer = document.getElementById("bootstrap-projects");
    const apiProjContainer = document.getElementById("api-projects");
    const projects = [
      {
        name: "Concomitant",
        type: "vanillaJs",
        color: ["#80b300", "#333"],
        link: "https://abdulkerimawad.github.io/Concomitant-Site/",
        poster: "./Images/web-sites/Concomitant.webp",
        about:
          "Have a beautiful portfolio containing your services, last works, and your social media links.",
      },
      {
        name: "Shortly",
        type: "api",
        color: ["#2bd1d1", "#4b3f6b"],
        link: "https://abdulkerimawad.github.io/URL-Shortener/",
        poster: "./Images/web-sites/Shortly.webp",
        about:
          "Shorten your links easily and have a history of your last shortened links by using Shortly.",
      },
      {
        name: "EasyBank",
        type: "bootstrap",
        color: ["#31cf6a", "#2bb9cd"],
        link: "https://abdulkerimawad.github.io/EasyBank/",
        poster: "./Images/web-sites/easy-bank.webp",
        about: "Keep your money safe and invest in them by using EasyBank.",
      },
      {
        name: "Managey",
        type: "vanillaJs",
        color: ["#f1613c", "#f98f75"],
        link: "https://abdulkerimawad.github.io/Managey/",
        poster: "./Images/web-sites/managey.webp",
        about:
          "Organize all your business and projects with managey and keep it safe.",
      },
    ];

  for (const project of projects) {
    const proj = document.createElement("div");
    const pInfo = document.createElement("div");
    const pName = document.createElement("p");
    const about = document.createElement("p");
    const goBtn = document.createElement("a");

    proj.setAttribute("class", "project");
    proj.setAttribute("id", project.name);
    proj.style.backgroundImage = `url(${project.poster})`;

    pInfo.setAttribute("class", "info");
    pInfo.style.backgroundColor = project.color;

    if (typeof project.color === "object") {
      pInfo.style.backgroundImage = `linear-gradient(${project.color[0]}, ${project.color[1]})`;
    }

    pName.textContent = project.name;
    pName.setAttribute("class", "name");

    about.textContent = project.about;
    about.setAttribute("class", "about");

    goBtn.textContent = "Go Site";
    goBtn.setAttribute("href", project.link);
    goBtn.setAttribute("target", "_blank");

    pInfo.appendChild(pName);
    pInfo.appendChild(about);
    pInfo.appendChild(goBtn);

    proj.appendChild(pInfo);

    if (project.type == "vanillaJs") {
      staticProjContainer.appendChild(proj);
    } else if (project.type == "bootstrap") {
      bootstrapProjContainer.appendChild(proj);
    } else if (project.type == "api") {
      apiProjContainer.appendChild(proj);
    }
  }

  const projectsTabsCont = document.getElementById("projects-tabs");
  const projectsCont = document.getElementById("projects-contents");

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

/* ---------------------------- footer functions ---------------------------- */
(function setTheCopyRightYears() {
  const copyRight = document.getElementById("copy-right");
  const currentYear = new Date();

  copyRight.textContent = `2021-${currentYear.getFullYear()}`;
})();
