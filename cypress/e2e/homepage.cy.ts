describe("The home page", () => {
  it("succesfully loads", () => {
    cy.visit("/");
  });
  it("redirects to about page", () => {
    cy.visit("/");
    cy.contains("What I can do").click();
    cy.url().should("include", "/about");
  });
  it("project preview section", () => {
    cy.visit("/");
    cy.contains("Food Mood").click();
    cy.get('[data-testid="project-detail-modal"]').should("be.visible");
    cy.contains("Close").click();
    cy.get('[data-testid="project-detail-modal"]').should("not.be.visible");
    cy.contains("Weather application").click();
    cy.get('[data-testid="project-detail-modal"]').should("be.visible");
    cy.contains("Close").click();
    cy.get('[data-testid="project-detail-modal"]').should("not.be.visible");
    cy.contains("Show All").click();
    cy.url().should("include", "/work");
  });
  it("little about me section", () => {
    cy.visit("/");
    cy.contains("More about me").click();
    cy.url().should("include", "/about");
  });
});
