"use strict";
import "../dist/style.css";
import { createParagraph, createTitle } from "./home.js";

function createContact() {
  const main = document.querySelector(".main");

  const contact = document.createElement("div");
  contact.classList.add("main__Contact");
  main.append(contact);
  contact.classList.add("main__hidden");

  createBusinessInfo(contact);
  createIframe(contact);
}

function createBusinessInfo(locationToAppend) {
  const sideInfo = document.createElement("div");
  sideInfo.classList.add("main__side-info");
  locationToAppend.append(sideInfo);

  const businessCard = document.createElement("div");
  businessCard.classList.add("main__business-card");
  sideInfo.append(businessCard);

  businessCard.append(createTitle("Business information", "h2"));
  businessCard.append(createParagraph("📱 Call Us: 353-154236953"));
  businessCard.append(createParagraph("🕓 Tuesday - Sunday: 11 a.m - 01 a.m"));
  businessCard.append(createParagraph("🏡 Lamadrid 174, Villa María, Córdoba"));

  const contactForm = document.createElement("form");
  contactForm.classList.add("main__contact-form");
  sideInfo.append(contactForm);

  createContactForm(contactForm, "Full Name");
  createContactForm(contactForm, "e-Mail");
  createContactForm(contactForm, "Type your message");

  const formBtn = document.createElement("button");
  formBtn.classList.add("main__form-btn");
  formBtn.textContent = "Send";
  contactForm.append(formBtn);
}

function createContactForm(locationToAppend, placeholderText) {
  const formInput = document.createElement("input");
  formInput.classList.add("main__form-input");
  formInput.placeholder = placeholderText;
  formInput.required = true;
  locationToAppend.append(formInput);
}

function createIframe(locationToAppend) {
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("main__location");
  locationToAppend.append(locationContainer);
  locationContainer.append(createTitle("Find Us!", "h2"));

  const locationImg = document.createElement("iframe");
  locationImg.width = "100%";
  locationImg.height = "500";
  locationImg.width = "500";
  locationImg.loading = "lazy";
  locationImg.frameborder = "0";
  locationImg.src =
    "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd9b43-lCzJURNKJv4cLnLOk&key=AIzaSyDG3ySKA4YNnqgBkKz8arZ4qu8y2LY8v7s";
  locationContainer.append(locationImg);
}

export default createContact;
