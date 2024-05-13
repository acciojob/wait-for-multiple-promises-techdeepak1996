() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get('#output').find('td', { timeout: 10000 }).should('contain.text', 'Loading...'); 
  cy.get('#output').find('tr', { timeout: 20000 }).should('have.length', 4); 
  cy.get('#output > tr > td:nth-child(1)').each(($elm, index) => {
    const text = $elm.text();
    if (text.includes('Promise')) {
      cy.get('#output > tr > td:nth-child(1)').eq(index).next().then(($nextElm) => {
        const nextText = parseInt($nextElm.text());
        expect(nextText).to.be.at.least(1);
        expect(nextText).to.be.at.most(3);
      });
    } else if (text.includes('Total')) {
      cy.get('#output > tr > td:nth-child(1)').eq(index).next().then(($nextElm) => {
        const nextText = parseInt($nextElm.text());
        expect(nextText).to.be.at.least(2);
        expect(nextText).to.be.at.most(4);
      });
    }
  });
}