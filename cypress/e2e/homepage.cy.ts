import { EXTERNAL_LINKS } from "../../src/utils/contants";

describe("rendering and functionality of links to the about page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByRole("heading", { level: 1 })
      .should("contain", "Wel")
      .should("contain", "come.")
      .should("be.visible");
  });
  afterEach(() => {
    cy.url().should("contains", "about");
    cy.findAllByRole("heading", { level: 1, name: /hey, I'm/i }).should(
      "be.visible"
    );
    cy.get("[data-cy='apple-avatar']").should("be.visible");
  });
  it("redirects to the about page ", () => {
    cy.scrollTo(0, 100);
    cy.findByRole("heading", {
      level: 4,
      name: /This is my webpage, where I showcase /i,
    }).should("be.visible");
    cy.findByRole("heading", { level: 2, name: /my self./i }).scrollIntoView();
    cy.findByRole("link", { name: /what i can do/i })
      .should("be.visible")
      .click();
  });
  it("shows about me and redirects to the about page", () => {
    cy.findByRole("heading", { level: 2, name: /race sims/i })
      .scrollIntoView()
      .should("be.visible");
    cy.findByRole("link", { name: /more about me/i })
      .should("be.visible")
      .click();
  });
});
// TODO: Test new tab opening for the external url (The target blank can be remove, so it is open in the same tab, but it is a antipattern to check elements from the "third party")
// TODO: Test visibility of the element "under" the modal
describe("project preview modals", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByRole("heading", { level: 2, name: /work/i })
      .scrollIntoView()
      .should("be.visible");
  });
  it("shows the projects and redirects to the work", () => {
    cy.log("Weather app");
    cy.findByRole("heading", { level: 4, name: /weather app/i })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.findByRole("heading", {
      level: 4,
      name: /Small SPA weather application, that displays current/i,
    }).should("be.visible");
    cy.get("[data-testid='project-detail-modal']")
      .findAllByRole("img")
      .should("have.length", 5)
      .last()
      .scrollIntoView()
      .should("be.visible");
    cy.findByRole("link", { name: /visit live link/i })
      .scrollIntoView()
      .should("be.visible")
      .should("have.attr", "href", EXTERNAL_LINKS.weatherApp);
    cy.findByRole("button", { name: "Close" }).should("be.visible").click();

    cy.log("Food mood");
    cy.findByRole("heading", { level: 4, name: /food mood/i })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get("[data-testid='project-detail-modal']")
      .findAllByRole("img")
      .should("have.length", 3)
      .last()
      .scrollIntoView()
      .should("be.visible");
    cy.findByRole("link", { name: /visit live link/i })
      .should("not.be.visible")
      .scrollIntoView()
      .should("be.visible")
      .should("be.visible")
      .should("have.attr", "href", EXTERNAL_LINKS.foodMood);
    cy.findByRole("button", { name: "Close" }).should("be.visible").click();

    cy.log("Work redirect");
    cy.findByRole("link", { name: /show all/i })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "work");
    cy.findByRole("heading", { name: /my work./i }).should("be.visible");
  });
});
