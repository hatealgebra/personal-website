describe("The work page", () => {
  it("switches between the projects and lab ", () => {
    cy.visit("/work");
    cy.url().should("contain", "work");
    cy.findByRole("heading", { name: /my work./i }).should("be.visible");
    cy.findByRole("button", { name: /lab/i })
      .scrollIntoView()
      .should("be.visible");
    cy.findByRole("heading", { level: 4, name: /weather app/i }).should(
      "be.visible"
    );
    cy.log("Check projects tab");
    cy.findByRole("button", { name: /projects/i })
      .should("be.visible")
      .click();
    cy.findByRole("heading", { level: 3, name: /no projects here/i }).should(
      "be.visible"
    );
  });
});
