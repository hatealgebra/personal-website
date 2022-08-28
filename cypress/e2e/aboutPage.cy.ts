describe("The About Page", () => {
  it("loads the about page", () => {
    cy.visit("/about");
  });
  it("stack section", () => {
    cy.visit("/about");
    cy.contains("Tech Stack").click();
    cy.get('[data-testid="expand-item"]').should("be.visible");
    cy.contains("Tech Stack").click();
    cy.get('[data-testid="expand-item"]').should("not.be.visible");
  });
  it("scrolls through hobbies menu functionality", () => {
    cy.visit("/about");
    cy.contains("movies").click();
    cy.contains("p", /When I want to completely switch off/i);
    cy.contains("race sims").click();
    cy.contains("p", /Another thing that allows me to get my happy hour of/i);
    cy.contains("music").click();
    cy.contains(
      "p",
      /I do not have a lot of addictions, but music is one of them. From rap/i
    );
    cy.contains("basketball").click();
    cy.contains(
      "p",
      /One of my favorite hobbies to do, because it balances my life with the IT world. Currently/i
    );
  });
});
