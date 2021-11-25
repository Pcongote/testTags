const autSelectors = {
  singin: ".login",
  email: "#email",
  password: "#passwd",
  submmit: "#SubmitLogin",
  "create an account": "#SubmitCreate > span",
};

function clickHere(elementName) {
  cy.get(autSelectors[elementName]).click();
}

function type1(text, elementName) {
  const email = "falseemail123@gmail.com";

  if (text.includes("email")) {
    cy.get(autSelectors[elementName]).type(email);
  } else {
    cy.get(autSelectors[elementName]).type(text);
  }
}

module.exports = { clickHere, type1 };
