it('verify positive-visit', () => {
    cy.visit("https://www.amazon.in/gp/navigation-country/")
 })
 it('Searches for a product, adds it to cart and checks out successfully', () => {
     // Search for the product
     cy.get('#nav-search')
       .type('nike shoes of size 9').should('have.value', 'nike shoes of size 9')
     cy.get('#nav-search-submit-button').click()
 
     // Select the first product
     cy.get('.a-text-normal').first().click()
 

     cy.get('#add-to-cart-button').click()
     cy.wait(1000)
     cy.get('.a-button-text').should('have.text', '1')
 
     // Proceed to checkout
     cy.get('.a-button-input').click()
 
     
   })
   it('Searches for a non-existing product and gets no results', () => {
     // Search for the product
     cy.get('#nav-search')
       .type('qrajstyunubib').should('have.value', 'qrajstyunubib')
     cy.get('#vsearch_listening_container').click()
 
     // Verify that no results are found
     cy.contains('No results for').should('be.visible')
   })
 
   it('Attempts to checkout without adding any items to the cart', () => {
     // Proceed to checkout
     cy.get('.a-button-input').click()
 
     
   })