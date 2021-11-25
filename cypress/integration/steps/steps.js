import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const openPage = require("../pages/home.js");
const { clickHere, type1 } = require("../pages/authentication");
const elementContain = require("../pages/my_account");

Given("User open the my store page", () => {
  openPage();
});

When("user click in {string} button", (elementName) => {
  clickHere(elementName);
});

When(
  "user type {string} in the {string} field in login page",
  (text, elementName) => {
    type1(text, elementName);
  }
);

Then("Then I expect to see {string} in {string}", (title, elementName) => {
  elementContain(title, elementName);
});
