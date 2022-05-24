   describe('Mobile- Arts College List Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.mob_col_list)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.mob_col_list)
                }
            })
            cy.intercept('POST')
            cy.intercept('GET')
        })
     
        it('Apply Now btn1- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_applynow2_btn).click()
                cy.LeadForm('mob_india_MBBS')
            })
        })
    
        it('Download brochure btn1- MBA Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_db2_btn).click()
                cy.LeadForm('mob_india_MBA')
            })
        })

        it('Apply Now btn2- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.mob_applynow3_btn).click()
                cy.LeadForm('mob_india_Btech')
            })
        })
    })