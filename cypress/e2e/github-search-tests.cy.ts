describe('Test searching for user holmar18', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000');
	});

	it('Should show user Holmar Karl', () => {
		cy.url().should('include', '/');

		cy.get('input[placeholder="Search GitHub username..."]')
			.click()
			.type('holmar18');

		cy.get('button').click();

		cy.wait(2000);

		cy.get('#name').contains('Holmar Karl');
		cy.get('#date').contains('4 Sep 2018');
	});

	it('Should show Not Found', () => {
		cy.url().should('include', '/');

		cy.get('input[placeholder="Search GitHub username..."]')
			.click()
			.type('asdfatert546');

		cy.get('button').click();

		// wait 10 seconds
		cy.wait(10000);

		cy.get('.error-msg').contains('Not Found');
	});
});
