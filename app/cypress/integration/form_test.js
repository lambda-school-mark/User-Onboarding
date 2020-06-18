describe("Get name and input", () => {
  it("visits site", () => {
    cy.visit("http://localhost:3000");

    cy.get("input#name").type("Broski").should("have.value", "Broski");
  });

  it("gets email and enters it", () => {
    cy.get("input#email")
      .type("timbo@pimpmail.com")
      .should("have.value", "timbo@pimpmail.com");
  });

  it("gets password and enters it", () => {
    cy.get("input#password").type("veryKOOL").should("have.value", "veryKOOL");
  });

  it("checks terms", () => {
    cy.get("input#terms").check();
  });

  it("checks submit form", () => {
    cy.get("form#submit").submit();
  });

  it("the submit button should still be disabled", () => {
    cy.get("input#submitBtn").should("be.disabled");
  });
});

describe("minimum character validation", () => {
  it("visits site", () => {
    cy.visit("http://localhost:3000");
  });

  it("checks that minimum character validation works", () => {
    cy.get("input#name").type("bro");
    cy.get("input#email").type("timbo@pimpmail.com");
    cy.get("input#password").type("veryKOOL");
    cy.get("form#submit").submit();
    cy.get("input#submitBtn").should("be.disabled");
  });
});
