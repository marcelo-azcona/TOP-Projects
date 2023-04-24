"use strict";
import "../dist/style.css";
import { createHome } from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function createHeader(locationToAppend) {
  const header = document.createElement("header");
  header.classList.add("header");
  locationToAppend.append(header);
  createNav(header);
}

function createNav(parent) {
  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("header__maintitle");
  mainTitle.textContent = "Bello Italiano";
  parent.append(mainTitle);

  const navBar = document.createElement("nav");
  parent.append(navBar);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("header__Home");
  navBar.append(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("header__Menu", "header__hidden");
  navBar.append(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("header__Contact", "header__hidden");
  navBar.append(contactBtn);

  navBar.addEventListener("click", (e) => {
    const section = e.target.closest("header").nextSibling.childNodes;
    const button = navBar.childNodes;

    for (let i = 0; i < section.length; i++) {
      if (e.target !== document.querySelector("nav")) {
        button[i].classList.add("header__hidden");
        section[i].classList.add("main__hidden");
      }
      if (section[i].classList.contains(`main__${e.target.textContent}`)) {
        button[i].classList.remove("header__hidden");
        section[i].classList.remove("main__hidden");
      }
    }
  });
}

function switchSections(e) {}

function createMainContainer(locationToAppend) {
  const main = document.createElement("main");
  main.classList.add("main");
  locationToAppend.append(main);
  createHome();
  createMenu();
  createContact();
}

function createFooter(locationToAppend) {
  const footer = document.createElement("footer");
  footer.textContent = "Designed & built by Mazcona86 for The Odin Project";
  footer.className = "footer";
  locationToAppend.append(footer);
}

function initApp() {
  const contentDiv = document.getElementById("content");

  createHeader(contentDiv);
  createMainContainer(contentDiv);
  createFooter(contentDiv);
}

initApp();
