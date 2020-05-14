describe('Navigation', () => {
	beforeEach(() => {
		cy.visit('/pair-programmer')
	});

	it('navigates to /home', () => {
		cy.get('[data-testid="nav-control"]').click();
		cy.get('[data-testid="nav-home"]').click();
		cy.url().should('include', '/');
	});

	it('navigates to /purpose', () => {
		cy.get('[data-testid="nav-control"]').click();
		cy.get('[data-testid="nav-purpose"]').click();
		cy.url().should('include', '/purpose');
	});

	it('navigates to /technology', () => {
		cy.get('[data-testid="nav-control"]').click();
		cy.get('[data-testid="nav-technology"]').click();
		cy.url().should('include', '/technology');
	});
});