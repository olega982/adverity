import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AppPage from "../AppPage";
import { FirstDog, SecondDog } from "../../../fixtures/dog";
import { should } from "chai";

//Helpers
function identifyDog(item) {
  return item === "FirstDog" ? FirstDog : SecondDog;
}

//Preconditions
Given("Opened application", () => {
  AppPage.visit();
});

Given("Opened application with the {string} item created", function (item) {
  const sortedItem = identifyDog(item);
  AppPage.visit();
  cy.get('[test_id="breed"]').type(sortedItem.BREED);
  cy.get('[test_id="nick"]').type(sortedItem.NICK);
  cy.get('[test_id="price"]').type(sortedItem.PRICE);
  cy.get('[test_id="image"]').type(sortedItem.PHOTO_URL);
  cy.get('[test_id="add"]').click();
  cy.contains("tr", sortedItem.NICK).should("be.visible");
});

//Add feature methods

And("I click {string} button", (webElement) => {
  cy.get(`[test_id=${webElement}]`).click();
});

And("I type {string} data into {string} field", (data,webElement) => {
  cy.get(`[test_id=${webElement}]`).type(data);
});

And("I should see main page", () => {
  cy.get("#root").should("be.visible");
});

And(`I clear {string} field`,function (webElement) {
  cy.get(`[test_id=${webElement}]`).clear()
});

And(`I verify both {string} items have the same data`,function (webElement) {
  const sortedItem = identifyDog(item);
  cy.contains("tr", sortedItem.BREED).each(item=>{
    should 
  })
  });

And(`I verify {string} field in {string} item is {string}`,function (webElement,item,value) {
  const sortedItem = identifyDog(item);
  if(value == "empty"){
  cy.contains("tr", sortedItem.BREED).find(`[test_id=${webElement}]`)
  .invoke("attr", "src")
  .should("be.empty");
  }
  else{
    cy.contains("tr", sortedItem.BREED).find(`[test_id=${webElement}]`)
    .invoke('text')
    .should('eq',value);
  }

});

And("I verify initial {string} data displayed in the View", function (item) {
  const sortedItem = identifyDog(item);
  cy.contains("tr", sortedItem.BREED).as("createdRow");
  cy.get("@createdRow")
    .find('[test_id="item_breed"]')
    .should("have.text", sortedItem.BREED)
    .and("be.visible");
  cy.get("@createdRow")
    .find('[test_id="item_nick"]')
    .should("have.text", sortedItem.NICK)
    .and("be.visible");
  cy.get("@createdRow")
    .find('[test_id="item_price"]')
    .should("have.text", sortedItem.PRICE)
    .and("be.visible");
  cy.get("@createdRow")
    .find('[test_id="item_img"]')
    .invoke("attr", "src")
    .should("equal", sortedItem.PHOTO_URL);
});

And(`I fill in all input fields with the {string} data`, (item) => {
  const sortedItem = identifyDog(item);
  cy.get('[test_id="breed"]').clear().type(sortedItem.BREED);
  cy.get('[test_id="nick"]').clear().type(sortedItem.NICK);
  cy.get('[test_id="price"]').clear().type(sortedItem.PRICE);
  cy.get('[test_id="image"]').clear().type(sortedItem.PHOTO_URL);
});

///Edit feature methods

And("I verify input fields are empty",() => {
  cy.get('input').each(field=>{
    cy.wrap(field).should('be.empty')
  });
});


  Then("I Verify edit state display correct {string} item values",function (item) {
  const sortedItem = identifyDog(item);
  cy.get("h2").eq(0).should("have.text", "Edit");
  cy.get('[test_id="breed"]').should("have.value", sortedItem.BREED);
  cy.get('[test_id="nick"]').should("have.value", sortedItem.NICK);
  cy.get('[test_id="price"]').should("have.value", sortedItem.PRICE);
  cy.get('[test_id="image"]')
    .invoke("attr", "value")
    .should("be.eq", sortedItem.PHOTO_URL);
});

And("I click {string} in {string} created item", function (webElement, item) {
  const sortedItem = identifyDog(item);
  cy.contains("tr", sortedItem.NICK).find(`[test_id = ${webElement}]`).click();
});

And(`I verify {string} item does not exist in the View`, (item) => {
  const sortedItem = identifyDog(item);
  cy.contains("tr", sortedItem.NICK).should("not.exist");
});

//Delete Feature methods

And(`I delete all items in the list`, () => {
  cy.get('[test_id="delete"]').each((element) => {
    element.click();
  });
});

And(`"No data" message {string} displayed`, (action) => {
  if(action == "is"){
  cy.get("tbody td").eq(0).should("have.text", "No data");
  }
  else{
  cy.contains("No data").should("not.exist");
  }
});
