    describe('Mobile- University Gallery Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.university_gallery)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.university_gallery)
                }
            })
            cy.intercept('POST')
            cy.intercept('GET')
        })
     
        it('Apply Now btn- Header- MBBS Form', () =>{
            cy.get('.links > .apply > [data-toggle="text"]').click()
            cy.LeadForm('mob_india_MBBS')
        })
    
        it('Download brochure btn- Header- MBA Form', () =>{
            cy.get('.links > .download > [data-toggle="text"]').click()
            cy.LeadForm('mob_india_MBA')
        })

        it('Apply Now btn2- Footer - Btech Form', () =>{
            cy.get(':nth-child(1) > .apply > [data-toggle="text"]').click()
            cy.LeadForm('mob_india_Btech')
        })

        it('Download brochure btn2- Footer - Btech Form', () =>{
            cy.get(':nth-child(2) > .download > [data-toggle="text"]').click()
            cy.LeadForm('mob_india_Btech')
        })
        
        it('Follow button - Course - Btech Form', () =>{
            cy.waitUntil(() => cy.get('.jsx-3428355176').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_Btech')
        })
    
        it('Similar college- Download Brochure - Btech Form', () =>{
            cy.waitUntil(() => cy.get('.footerslot_2 > [style="display:contents"] > .jsx-4225461732 > .top-featured-wrapper > .top-featured > .info-wrapper > .jsx-2276947343 > :nth-child(1) > .jsx-652291074 > .bottom-section > .info > .d-flex > .btn').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_Btech')
        })

        it('Nearby college- Download Brochure - Btech Form', () =>{
            cy.waitUntil(() => cy.get('.footerslot_1 > [style="display:contents"] > .jsx-4225461732 > .top-featured-wrapper > .top-featured > .info-wrapper > .jsx-2276947343 > :nth-child(1) > .jsx-652291074 > .bottom-section > .info > .d-flex > .btn').then($el => $el.trigger('click')))
            cy.LeadForm('mob_india_Btech')
        })
    })