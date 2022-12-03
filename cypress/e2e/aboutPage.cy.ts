describe("The About Page", () => {
  it("stack section", () => {
    cy.visit("/about");
    cy.log("All headings are rendered correctly");
    cy.findByRole("heading", { level: 1 }).should("be.visible");
    cy.findByRole("heading", { level: 2, name: /software engineer/gi })
      .scrollIntoView()
      .should("be.visible");
    cy.findByRole("heading", { level: 2, name: /my aim/gi })
      .scrollIntoView()
      .should("be.visible");
    cy.log("Tech stack toggle");
    cy.get('[data-testid="expand-button-01"]').should("be.visible").click();
    cy.get('[data-testid="expand-content-01"]').should("be.visible");
    cy.get('[data-testid="expand-button-01"]').should("be.visible").click();
    cy.get('[data-testid="expand-content-01"]').should("not.be.visible");
    cy.log("Other skills toggle");
    cy.get('[data-testid="expand-button-02"]').should("be.visible").click();
    cy.get('[data-testid="expand-content-02"]').should("be.visible");
    cy.log("Projects toggle");
    cy.get('[data-testid="expand-button-03"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get('[data-testid="expand-content-03"]').should("be.visible");
    cy.get('[data-testid="expand-button-03"]').should("be.visible").click();
    cy.get('[data-testid="expand-content-03"]').should("not.be.visible");
    cy.log("Scrolling through the hobbies");
    cy.get("[data-cy='hobbies-container']").should("be.visible");
    cy.findAllByRole("button", { name: "basketball" })
      .first()
      .should("be.visible");
    cy.contains(/One of my favorite hobbies to do, because it balance/i).should(
      "be.visible"
    );
    cy.findAllByRole("button", { name: "movies" })
      .first()
      .should("be.visible")
      .click();
    cy.contains("p", /When I want to completely switch off/i).should(
      "be.visible"
    );
    cy.findAllByRole("button", { name: "race sims" })
      .first()
      .should("be.visible")
      .click();
    cy.contains("p", /Another thing that allows me to get my happy hour of/i);
    cy.findAllByRole("button", { name: "music" })
      .first()
      .should("be.visible")
      .click();
    cy.contains(
      "p",
      /I do not have a lot of addictions, but music is one of them. From rap/i
    );
    cy.contains("basketball").click();
    cy.contains(
      "p",
      /One of my favorite hobbies to do, because it balances my life with the IT world. Currently/i
    ).should("be.visible");
  });
});
