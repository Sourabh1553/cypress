    describe('Course Overview Page- Sanity', () => {
        beforeEach(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.fixture('endpoint').then((data)=>{
                if(Cypress.env("varEnv")=='prod'){
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("prod")+data.course_overview)
                }else{
                    cy.log(Cypress.env("varEnv"))
                    cy.visit(Cypress.env("stage")+data.course_overview)
                }
            })
        })
    
        it('Get more info- MBBS Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_getmoredetails_btn).click()
                cy.LeadForm('web_india_MBBS')
            })
        })
    
        it('Ask a question- Btech Form', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_askaquestion_btn).click()
                cy.LeadForm('web_india_QUES')
            })
        })
    
        it('Btech with question- Apply now', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_askques_btn).click()
                cy.LeadForm('web_india_QUES')
            })
        })
    
        it('Btech- Check eligibility', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_checkeligibility_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })
    
        it('Btech- Get Updates', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_getupdates_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })
    
        it('Btech- Apply now for a course', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_applynow_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })
    
        it('Btech- Follow button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_follow_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })

        it('Btech- Like button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_like_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })
        
        it('Btech- Download brochure button', () =>{
            cy.fixture('xpath').then((data)=>{
                cy.get(data.course_db_btn).click()
                cy.LeadForm('web_india_btech')
            })
        })
    })