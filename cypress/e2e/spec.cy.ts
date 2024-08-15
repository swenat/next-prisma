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
		cy.get("h2").should("have.length", 1);
		cy.get("h2").contains("Sunday 21st met Daniel").should("be.visible");
		cy.get("p")
			.contains(
				"We ate at this great cafe called Huntington I really hope we go again cause the coffee was out of this world."
			)
			.should("be.visible");
	});

	describe("Todos", () => {
		beforeEach(() => {
			cy.exec("npm run reset && npm run seed");
		});

		it("should be able to add a todo", () => {
			cy.visit("/");

			cy.get("input[type='text']").should("be.visible");
			cy.get("button").contains("Add").should("be.visible");

			const newTodo = "Test new todo";
			cy.get("input[type='text']").type(newTodo);
			cy.get("button").contains("Add").click();

			cy.contains(newTodo).should("be.visible");
		});

		it("should be able to complete a todo", () => {
			cy.visit("/");

			const todoIndex = 0;
			cy.get("input[type='checkbox']").eq(todoIndex).as("todoCheckbox");
			cy.get("@todoCheckbox").check().should("be.checked");

			cy.reload();

			cy.get("@todoCheckbox").should("be.checked");
		});

		it("should display the edit button", () => {
			cy.visit("/");
			cy.get("button").contains("Edit").should("be.visible");
		});

		it("should be able to edit a todo", () => {
			cy.visit("/");

			cy.get("button").contains("Edit").first().click();
			cy.get("div.bg-yellow-100")
				.first()
				.within(() => {
					const updatedTask = "Updated todo task";

					cy.get("input[type='text']").clear().type(updatedTask);

					cy.get("button").contains("Save").click();

					cy.contains(updatedTask).should("be.visible");
				});
		});

		it("should be able to delete a todo", () => {
			cy.visit("/");
			cy.get("div.bg-yellow-100").should("have.length", 3);
			cy.get("button").contains("Delete").first().click();
			cy.get("div.bg-yellow-100").should("have.length", 2);
			cy.get("div.bg-yellow-100").first().contains("Read a book");
		});
	});
});
