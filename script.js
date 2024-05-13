() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get('#output').find('td', { timeout: 10000 }).should('contain.text', 'Loading...'); 
  cy.get('#output').find('tr', { timeout: 20000 }).should('have.length', 4); 
}