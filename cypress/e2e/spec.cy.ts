describe("template spec", () => {
	beforeEach(() => {
		cy.exec("npm run reset && npm run seed");
	});
	it("passes", () => {
		cy.visit("/"); //vi ser till att den går till localhost men kom ihåg att utvecklingsservern måste vara igång för att få det  att gå igenom för tillfället
		cy.get("h1").contains("Welcome to my Blog").should("be.visible");
	});
});
