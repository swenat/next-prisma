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

	it("should be able to add a todo", () => {}); //lägga till inputfält i sidan och visa att den har rätt info som du skriver in.

	it("should be able to complete a todo", () => {
		cy.visit("/");

		const todoIndex = 0;
		cy.get("input[type='checkbox']").eq(todoIndex).as("todoCheckbox");
		cy.get("@todoCheckbox").check().should("be.checked");

		cy.reload();

		cy.get("@todoCheckbox").should("be.checked");
	});

	it("should be able to delete a todo", () => {
		cy.visit("/");
		cy.get("div.bg-yellow-100").should("have.length", 3);
		cy.get("button").contains("Delete").first().click();
		cy.get("div.bg-yellow-100").should("have.length", 2);
		cy.get("div.bg-yellow-100").first().contains("Read a book");
	});
});

//lägg till editera knapp samt test för denna
