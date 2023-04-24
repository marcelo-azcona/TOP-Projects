"use strict";
import "../dist/style.css";
import { createParagraph, createTitle } from "./home.js";

function createMenu() {
  const main = document.querySelector(".main");

  const menu = document.createElement("div");
  menu.classList.add("main__Menu");
  menu.classList.add("main__hidden");
  main.append(menu);

  const menuCard = document.createElement("div");
  menuCard.classList.add("main__menu-card");
  menu.append(menuCard);

  createMenuItem("../img/Baked-Ziti.jpg", "Baked Ziti", menuCard);
  createMenuItem(
    "../img/Cajun-Chicken-Pasta.jpg",
    "Cajun Chicken Pasta",
    menuCard
  );
  createMenuItem("../img/Cheese-Ravioli.jpg", "Cheese Ravioli", menuCard);
  createMenuItem("../img/Lasagna.jpg", "Lasagna", menuCard);
  createMenuItem("../img/Penne-Rosa.jpg", "Penne Rosa", menuCard);
  createMenuItem("../img/Shrimp-Scampi.jpg", "Shrimp Scampi", menuCard);
}

// function

function createMenuItem(imgPath, recipe, locationToAppend) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("main__menu-item");
  locationToAppend.append(menuItem);

  const menuImg = document.createElement("img");
  menuImg.src = imgPath;
  menuImg.alt = recipe;
  menuImg.classList.add("main__menuImg");
  menuItem.append(menuImg);

  createMenuDescription(menuItem, recipe);
}

function createMenuDescription(locationToAppend, recipe) {
  const recipeDescription = {
    "Baked Ziti":
      "Baked ziti is classic Italian-American comfort food! Bake ziti pasta with sausage, tomato sauce, and all kinds of gooey, yummy cheeses. This recipe is always a hit!",
    "Cajun Chicken Pasta":
      "The dreamy and creamy Cajun Chicken Pasta is perfect for a delicious dinner night. Tender seasoned chicken in a creamy sauce loaded with flavor!",
    "Cheese Ravioli":
      "This homemade cheese ravioli is absolute perfection — super simple pasta dough and oh so cheesy filling. Enjoy!",
    Lasagna:
      "This italian classic is made with an easy meat sauce as the base. Layered with sauce, noodles and cheese, then baked until bubbly! This is great for feeding a big family",
    "Penne Rosa":
      "Penne noodles tossed in creamy tomato sauce is everyone’s favorite on pasta night! You must try it!",
    "Shrimp Scampi":
      "It’s deliciously saucy, perfectly rich and buttery awith amazing flavor! This easy shrimp recipe can be eaten with garlic and lemon bringing you to dinner heaven.",
  };

  const menuDescription = document.createElement("div");

  menuDescription.classList.add("main__menu-description");
  locationToAppend.append(menuDescription);
  menuDescription.append(createTitle(recipe, "h3"));
  menuDescription.append(createParagraph(recipeDescription[recipe]));
}

export default createMenu;
