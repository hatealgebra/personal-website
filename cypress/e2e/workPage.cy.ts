describe("The work page", () => {
  it("loads succesfully", () => {
    cy.visit("/work");
  });
  it("switches between the projects and lab ", () => {
    cy.visit("/work");
    cy.contains("p", /Showcase of my work in my freetime./i);
    cy.contains("Weather application");
    cy.contains("Food Mood");
    cy.contains("projects").click();
    cy.contains("h3", /no projects here/i);
  });
});
