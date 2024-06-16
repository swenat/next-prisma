describe("Posts", () => {
	beforeEach(() => {
		cy.exec("npm run reset && npm run seed");
	});
	it("should display the posts correctly", () => {
		cy.visit("/"); // Se till att utvecklingsservern är igång

		// Header-check
		cy.get("header").should("exist");
		cy.get("header h1").contains("Keep track").should("be.visible");

		// Posts-check
		cy.get("h1").contains("Your Diary Posts").should("be.visible");
		cy.get("h2").should("have.length", 1); // Antal posts
		cy.get("h2").contains("Sunday 21st met Daniel").should("be.visible");
		cy.get("p")
			.contains(
				"We ate at this great cafe called Huntington I really hope we go again cause the coffee was out of this world."
			)
			.should("be.visible");
	});
});

describe("Todos", () => {
	beforeEach(() => {
		cy.exec("npm run reset && npm run seed");
	});

	it("should display the todos correctly", () => {
		cy.visit("/"); // Se till att utvecklingsservern är igång

		// Header-check
		cy.get("header").should("exist");
		cy.get("header h1").contains("Keep track").should("be.visible");

		// Todos-check
		cy.get("h1").contains("Your todos").should("be.visible"); //ändra till h2 på page
		cy.get("input[type='checkbox']").should("have.length", 3);
		cy.get("span").contains("Complete tutorial").should("be.visible");
		cy.get("span").contains("Read a book").should("be.visible");
		cy.get("span").contains("Go for a run").should("be.visible");

		// Toggle todo and check SKIPPA DESSA
		cy.get("input[type='checkbox']").check().should("be.checked");
		cy.get("input[type='checkbox']").uncheck().should("not.be.checked");
	});
});

//gör test som hämtar en av todos ladda om sidan och se om den fortfarande är completed
