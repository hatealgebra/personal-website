import { EXTERNAL_LINKS, SOCIAL_LINKS } from "../../src/utils/contants";

describe("Test internal links", () => {
  it("footer and navigation links", () => {
    cy.visit("/");
    cy.log("Footer navigation");

    cy.log("External links in footer");
    cy.scrollTo("bottom");
    cy.findByRole("link", { name: "contact@pavel-vondra.com" })
      .should("be.visible")
      .should("have.attr", "href", `mailto:contact@pavel-vondra.com`);

    cy.get("[data-cy='social-media']")
      .findAllByRole("link")
      .first()
      .should("be.visible")
      .should("have.attr", "href", SOCIAL_LINKS.instagram);
    cy.get("[data-cy='social-media']")
      .findAllByRole("link")
      .first()
      .next()
      .should("be.visible")
      .should("have.attr", "href", SOCIAL_LINKS.linkedIn);
    cy.get("[data-cy='social-media']")
      .findAllByRole("link")
      .last()
      .should("be.visible")
      .should("have.attr", "href", SOCIAL_LINKS.github);
    cy.findByRole("link", { name: /weather app/i })
      .should("be.visible")
      .should("have.attr", "href", EXTERNAL_LINKS.weatherApp);

    cy.log("About link ");
    cy.findByRole("link", { name: "About" })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "about");
    cy.findByRole("heading", { level: 1 }).should("be.visible");
    cy.get("[data-cy='apple-avatar']").should("be.visible");

    cy.log("Work link");
    cy.findByRole("link", { name: "Work" })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "work");
    cy.findByRole("heading", { name: /my work./i }).should("be.visible");

    cy.log("Homepage link");
    cy.findByRole("link", { name: "Homepage" })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("eq", "http://localhost:8000/homepage");
    cy.findByRole("heading", { level: 1 })
      .should("contain", "Wel")
      .should("contain", "come.")
      .should("be.visible");

    cy.log("Contact link");
    cy.findByRole("link", { name: "Contact" })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "contact");
    cy.visit("/contact");

    cy.log("Top Navbar navigation");

    cy.log("About link test");
    cy.findByRole("link", { name: "about," }).click();
    cy.url().should("contain", "about");
    cy.findByRole("heading", { level: 1 }).should("be.visible");
    cy.get("[data-cy='apple-avatar']").should("be.visible");

    cy.log("Pavel Vondra link test");
    cy.scrollTo(0, 1000);
    cy.findByRole("link", { name: /pavel vondra/i })
      .should("be.visible")
      .click();
    cy.url().should("eq", "http://localhost:8000/homepage");
    cy.findByRole("heading", { level: 1 })
      .should("contain", "Wel")
      .should("contain", "come.")
      .should("be.visible");

    cy.log("Work link test");
    cy.scrollTo(0, 1000);
    cy.findByRole("link", { name: "work," }).should("be.visible").click();
    cy.url().should("contain", "work");
    cy.findByRole("heading", { name: /my work./i }).should("be.visible");

    // const footerLinks = cy
    //   .get('[data-cy="menu-Pages"]')
    //   .scrollIntoView()
    //   .should("be.visible")
    //   .findAllByRole("link");
    // footerLinks.each(($link, i) => {
    //   console.log(i);
    //   const { textContent } = $link[0];
    //   if (textContent !== "Homepage") {
    //     const nameCheck = new RegExp(`${textContent}`, "i");
    //     cy.scrollTo("bottom");
    //     cy.wrap($link).should("be.visible").click();
    //     cy.url().should("contain", nameCheck);
    //   }
    // });
  });
});
