function addItemToList(item) {
  cy.get('[data-testid="add-item-input"]').type(item);
  cy.get('[data-testid="add-item-input"]').type('{enter}');
}

describe('Pairing', () => {
	beforeEach(() => {
		cy.visit('/pair-programmer')
	});

	it('can add items to the list', () => {
    addItemToList('nick');
		cy.get('[data-testid="item-nick"]');
  });
  
  it('can delete items from the list', () => {
    addItemToList('nick');
    cy.get('[data-testid="delete-item-nick"]').click();
    cy.get('[data-testid="item-nick"]').should('not.exist');
  });
  
  it('pairs items in the list', async () => {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';
    addItemToList(a);
    addItemToList(b);
    addItemToList(c);
    addItemToList(d);
    cy.get('[data-testid="generate-pairs-button"]').click();
    const itemsFound = [];
    await Cypress.Promise.all(cy.get('[data-testid="pair"]').each(($el) => {
      const textContent = $el.text();
      if (textContent.includes(a)) itemsFound.push(a);
      if (textContent.includes(b)) itemsFound.push(b);
      if (textContent.includes(c)) itemsFound.push(c);
      if (textContent.includes(d)) itemsFound.push(d);
    }));
    expect(itemsFound.filter((item) => item === a).length).to.equal(1);
    expect(itemsFound.filter((item) => item === b).length).to.equal(1);
    expect(itemsFound.filter((item) => item === c).length).to.equal(1);
    expect(itemsFound.filter((item) => item === d).length).to.equal(1);
	});
});