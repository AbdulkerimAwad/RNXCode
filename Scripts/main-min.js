"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}window.onload=function(){return document.getElementById("loader").remove()};var openMenuBtn=document.getElementById("menu-open-btn"),navbar=document.getElementById("nav");function openTheMenu(t){navbar.classList.toggle("closed"),t.classList.toggle("clicked")}function goToTheChosenSection(t){t.classList.contains("nav-item")&&(location.href="#".concat(t.textContent.toLowerCase()),t.parentElement.classList.contains("mobile-list")&&openMenuBtn.click())}openMenuBtn.addEventListener("click",(function(){openTheMenu(this)})),navbar.addEventListener("click",(function(t){goToTheChosenSection(t.target)}));var previousScrollValue=window.scrollY,header=document.getElementById("home");function creatSliderFunctionality(){var t,e=_toConsumableArray(document.querySelectorAll("#slider .slite")),n=document.getElementById("bullets-cont");for(t=0;t<e.length;t++){var a=document.createElement("div");a.className="bullet",t<1&&a.classList.add("active"),n.appendChild(a)}e[0].classList.add("active"),n.addEventListener("click",(function(t){t.target.classList.contains("bullet")&&(_toConsumableArray(t.target.parentElement.children).forEach((function(t,n){t.classList.remove("active"),e[n].classList.remove("active")})),t.target.classList.add("active"),e[_toConsumableArray(n.children).indexOf(t.target)].classList.add("active"))}))}window.onscroll=function(){var t=window.scrollY;previousScrollValue<t?navbar.classList.add("folded"):navbar.classList.remove("folded"),previousScrollValue=t,window.scrollY>=header.offsetTop+header.offsetHeight?navbar.classList.add("fixed"):navbar.classList.remove("fixed")},creatSliderFunctionality();var statsSection=document.getElementById("statistics"),stats=document.querySelectorAll(".stats .statistic p"),isStarted=!1;function startCounting(t){var e=t.dataset.goal,n=setInterval((function(){t.textContent++,t.textContent==e&&clearInterval(n)}),1e3/e)}window.addEventListener("scroll",(function(){window.scrollY>=statsSection.offsetTop-10&&(isStarted||stats.forEach((function(t){return startCounting(t)})),isStarted=!0)})),function(){for(var t=document.getElementById("vanillaJS-projects"),e=document.getElementById("bootstrap-projects"),n=document.getElementById("api-projects"),a=0,o=[{name:"Concomitant",type:"vanillaJs",color:["#80b300","#333"],link:"https://abdulkerimawad.github.io/Concomitant-Site/",poster:"./Images/web-sites/Concomitant.webp",about:"Have a beautiful portfolio containing your services, last works, and your social media links."},{name:"Shortly",type:"api",color:["#2bd1d1","#4b3f6b"],link:"https://abdulkerimawad.github.io/URL-Shortener/",poster:"./Images/web-sites/Shortly.webp",about:"Shorten your links easily and have a history of your last shortened links by using Shortly."},{name:"EasyBank",type:"bootstrap",color:["#31cf6a","#2bb9cd"],link:"https://abdulkerimawad.github.io/EasyBank/",poster:"./Images/web-sites/easy-bank.webp",about:"Keep your money safe and invest in them by using EasyBank."},{name:"Managey",type:"vanillaJs",color:["#f1613c","#f98f75"],link:"https://abdulkerimawad.github.io/Managey/",poster:"./Images/web-sites/managey.webp",about:"Organize all your business and projects with managey and keep it safe."}];a<o.length;a++){var r=o[a],i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("p"),c=document.createElement("p"),d=document.createElement("a");i.setAttribute("class","project"),i.setAttribute("id",r.name),i.style.backgroundImage="url(".concat(r.poster,")"),s.setAttribute("class","info"),s.style.backgroundColor=r.color,"object"===_typeof(r.color)&&(s.style.backgroundImage="linear-gradient(".concat(r.color[0],", ").concat(r.color[1],")")),l.textContent=r.name,l.setAttribute("class","name"),c.textContent=r.about,c.setAttribute("class","about"),d.textContent="Go Site",d.setAttribute("href",r.link),d.setAttribute("target","_blank"),s.appendChild(l),s.appendChild(c),s.appendChild(d),i.appendChild(s),"vanillaJs"==r.type?t.appendChild(i):"bootstrap"==r.type?e.appendChild(i):"api"==r.type&&n.appendChild(i)}var u=document.getElementById("projects-tabs"),m=document.getElementById("projects-contents");u.addEventListener("click",(function(t){t.target.classList.contains("tab")&&(_toConsumableArray(t.target.parentElement.children).forEach((function(t,e){t.classList.remove("active"),m.children[e].classList.remove("active")})),t.target.classList.add("active"),m.children[_toConsumableArray(u.children).indexOf(t.target)].classList.add("active"))}))}(),function(){var t=document.getElementById("copy-right"),e=new Date;t.textContent="2021-".concat(e.getFullYear())}();
//# sourceMappingURL=main-min.js.map