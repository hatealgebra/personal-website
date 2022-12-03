import { SOCIAL_LINKS } from "../../src/utils/contants";

describe("Testing of the contact page", () => {
  it("renders and rediirects correctly to external links", () => {
    cy.visit("/contact");
    cy.findByRole("link", { name: "contact@pavel-vondra.com" })
      .should("be.visible")
      .should("have.attr", "href", "mailto:contact@pavel-vondra.com");
    cy.findByRole("link", { name: /linkedIn/i })
      .scrollIntoView()
      .should("be.visible")
      .should("have.attr", "href", SOCIAL_LINKS.linkedIn);
    cy.findByRole("link", { name: /instagram/i })
      .should("be.visible")
      .should("have.attr", "href", SOCIAL_LINKS.instagram);
    cy.findByRole("link", { name: /github/i })
      .should("be.visible")
      .should("have.attr", "href", SOCIAL_LINKS.github);
  });
});
