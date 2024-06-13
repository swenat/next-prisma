describe("template spec", () => {
	beforeEach(() => {
		cy.exec("npm run reset && npm run seed");
	});
	it("passes", () => {
		cy.visit("/"); //vi ser till att den går till localhost men kom ihåg att utvecklingsservern måste vara igång för att få det  att gå igenom för tillfället

		//Header check
		cy.get("header").should("exist");
		cy.get("header h1").contains("Keep track").should("be.visible");

		//Posts check
		cy.get("h1").contains("Your todos").should("be.visible");
		cy.get("input[type='checkbox']").should("have.length", 1);
	});
});
