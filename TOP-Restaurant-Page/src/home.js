"use strict";
import "../dist/style.css";

function createHome() {
  const main = document.querySelector(".main");
  const home = document.createElement("div");
  home.classList.add("main__Home");
  // home.classList.add("main__hidden");
  main.append(home);

  home.append(createParagraph("Best Pasta in town!"));
  home.append(
    createParagraph("Made with love with my grandfather's recipes since 1889")
  );

  const chefImg = document.createElement("img");
  chefImg.src = "../img/chef.jpg";
  chefImg.alt = "Chef";
  chefImg.classList.add("main__chefImg");
  home.append(chefImg);

  home.append(createParagraph("Order online or visit us!"));
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  return paragraph;
}

function createTitle(text, h) {
  const title = document.createElement(h);
  title.textContent = text;

  return title;
}

export { createHome, createParagraph, createTitle };
