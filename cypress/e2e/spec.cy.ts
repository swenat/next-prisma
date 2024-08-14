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
		cy.visit("/");

		// Toggle första todo
		const todoIndex = 0;
		cy.get("input[type='checkbox']").eq(todoIndex).as("todoCheckbox");

		cy.get("@todoCheckbox").check().should("be.checked");

		// Ladda om sidan
		cy.reload();

		// Kontrollera att den första todo är fortfarande checked
		cy.get("@todoCheckbox").should("be.checked");
	});

	it("should retain todo status after page reload", () => {
		cy.visit("/");

		const todoIndex = 0;
		cy.get("input[type='checkbox']").eq(todoIndex).as("todoCheckbox");

		// Markera som completed
		cy.get("@todoCheckbox").check().should("be.checked");

		// Ladda om sidan
		cy.reload();

		// Kontrollera att den första todo är fortfarande checked
		cy.get("@todoCheckbox").should("be.checked");
	});
});

//gör test som hämtar en av todos ladda om sidan och se om den fortfarande är completed
