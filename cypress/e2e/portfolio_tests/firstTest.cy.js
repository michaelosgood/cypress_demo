/// <reference types="Cypress" />


describe('Developer Portfolio Test Suite', () => {
    
    context('(Portfolio Tests)', () => { 
       
        beforeEach(() => {
            cy.openHomePage()
        })

        it('Verify profile image is visible', () => {
            cy.contains('Home').click()
            cy.get('#profile-image').should('be.visible')
        })

        it('Verify projects section', () => {
            cy.contains('Projects').click()
            cy.get('#project-link').should('contain', 'Projects')
        })

        it('Verify contact section', () => {
            cy.contains('Contact').click()
            cy.get('.contact-me').should('contain', 'Contact Me')
        })

    })
    
})
