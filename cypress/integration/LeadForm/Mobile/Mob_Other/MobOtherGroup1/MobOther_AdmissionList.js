    describe('Mob Admission List Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.admission_list)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.admission_list)
                }
            })
        })
    
        it('MBBS Form- Apply now btn 1', () =>{
            cy.get(':nth-child(2) > :nth-child(1) > .detail > .jsx-2824237165').click()
            cy.LeadForm('mob_india_MBBS')
        })

        it('MBA Form- Apply now btn 2', () =>{
            cy.get(':nth-child(3) > :nth-child(1) > .detail > .jsx-2824237165').click()
            cy.LeadForm('mob_india_MBA')
        })
    
        it('Btech Form- Apply now btn 3', () =>{
            cy.get(':nth-child(4) > :nth-child(1) > .detail > .jsx-2824237165').click()
            cy.LeadForm('mob_india_btech')
        })
    }) 