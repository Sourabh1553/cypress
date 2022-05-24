    describe('Study Abroad College Admission Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.SA_admission)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.SA_admission)
                }
            })
        })
    
        it('MBA Form-Apply Now', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_applynow_btn).click()
                cy.LeadForm('web_SA_MBA')
            })
        })
        
        it('MBA Form-Download brochure', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_db_btn).click()
                cy.LeadForm('web_SA_MBA')
            })
        })
    
        it('Btech Form-Like Button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_header_like_btn).click()
                cy.LeadForm('web_SA_btech')
            })
        })
    
        it('Btech Form- Get More Details Button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_header_getmoredetails_btn).click()
                cy.LeadForm('web_SA_btech')
            })
        })
    
        it('Btech Form- Get free counselling', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.SA_getcounselling_btn).click()
                cy.LeadForm('web_SA_btech')
            })
        })

        // it('Btech Form- Similar college follow button', () => {
        //     cy.fixture('xpath').then((data)=>{
        //         cy.waitUntil(() => cy.get(data.SA_similar_follow_btn).then($el => $el.trigger('click')))
        //         cy.LeadForm('web_SA_Btech')
        //     })
        // })
    
        it('Btech Form- Similar college download brochure button', () => {
            cy.fixture('xpath').then((data)=>{
                cy.waitUntil(() => cy.get(data.SA_similar_db_btn).then($el => $el.trigger('click')))
                cy.LeadForm('web_SA_Btech')
            })
        })
    })