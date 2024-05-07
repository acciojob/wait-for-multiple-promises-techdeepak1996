() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get('tr#loading', { timeout: 10000 }).should('be.visible').find('td').invoke('text').then(text => { 
    expect(text.trim()).equal("Loading..."); 
  }); 
}