() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get('tr#loading', { timeout: 10000 }).should('be.visible').find('td').invoke('text').then(text => { 
    expect(text.trim()).equal("Loading..."); 
  }); 
  cy.wait(4000); // Wait for promises to resolve and for loading to go away
  cy.get("#output").find("tr", { timeout: 10000 }).then(rows => { // Increase timeout to 10 seconds
    expect(rows.length).equal(4); 
  }); 
  // rest of your code...
}