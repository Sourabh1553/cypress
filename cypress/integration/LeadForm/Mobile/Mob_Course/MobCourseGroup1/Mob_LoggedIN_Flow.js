describe('Mob Logged in Flow- Sanity', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Mob Logged in India Flow', () =>{
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.course_afterTenth)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.course_afterTenth)
            }
        })
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_course_applynow1_btn).click()
            cy.LeadForm('mob_india_MBBS')
            cy.get(data.mob_menuoverlay).click()
            cy.get(data.mob_course_applynow2_btn).click()
            cy.LeadForm('mob_india_btech_loggedIN')
        })
    })

    it('Mob Logged in Study aborad Flow', () =>{
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.SA_colSpecCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.SA_colSpecCourse)
            }
        })
        cy.fixture('xpath').then((data)=>{
            cy.scrollTo(0,10)
            cy.get(data.mob_sacol_startapp_btn).click()
            cy.LeadForm('mob_sa_btech')
            cy.get(data.mob_menuoverlay).click()
            cy.get(data.mob_sacol_checkfees3_btn).click()
            cy.LeadForm('mob_SA_loggedIN_btech')
        })
    })
})    

describe('Mob login cases- Regression', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    
    it('Leadform on different pages', () =>{
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.college_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.college_admission)
            }
        })
        cy.fixture('xpath').then((data)=>{
            cy.get(data.mob_header_applynow_btn).click()
            cy.LeadForm('mob_india_btech')
            cy.get(data.mob_menuoverlay).click()
            cy.get(data.mob_search_btn).click()
            cy.get(data.mob_search_bar).type('DTU')
            cy.wait(1000)
            cy.get(data.mob_searched_college).click()
            cy.get(data.mob_header_db_btn).click()
            cy.LeadForm('mob_india_btech_loggedIN')
        })
    })

    it('Auto Popup', () =>{
        cy.fixture('endpoint').then((data)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data.SA_colSpecCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data.SA_colSpecCourse)
            }
        })
        cy.fixture('xpath').then((data)=>{
            cy.wait(30000)
            cy.LeadForm('mob_sa_btech')
        })
    })

    it('Fixed URL Popup with city', () =>{
        if(Cypress.env("varEnv")=='prod'){
            cy.log(Cypress.env("varEnv"))
            cy.visit(Cypress.env("prod")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?popup=true&city=125')
        }else{
            cy.log(Cypress.env("varEnv"))
            cy.visit(Cypress.env("stage")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?popup=true&city=125')
        }
        cy.fixture('testData').then((data)=>{
            cy.get('#leadcity').should('have.value','New Delhi')
            cy.get('#leadname').clear().type(data.name)
            cy.get('#leademail').clear().type(data.email)
            cy.get('#leadphone_no').clear().type(data.number)
            cy.get('#leadcourse_tag_id').click()
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course3)
            cy.get('.custom-search-submenu-option').click()
            cy.get('.col-md-3 > .jsx-197552324').click()
            cy.ColAppliedpageMob();
            cy.OTP_TYmodal('mob')
        })
    })

    it('Fixed URL Popup with city,course and close=0', () =>{
        if(Cypress.env("varEnv")=='prod'){
            cy.log(Cypress.env("varEnv"))
            cy.visit(Cypress.env("prod")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?&popup=true&city=125&course_tag=18&close=0&delay=5')
        }else{
            cy.log(Cypress.env("varEnv"))
            cy.visit(Cypress.env("stage")+'/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi?&popup=true&city=125&course_tag=18&close=0&delay=5')
        }
        cy.fixture('testData').then((data)=>{
            cy.get('#leadcity').should('have.value','New Delhi')
            cy.get('#leadcourse_tag_id').should('have.value','BE/B.Tech - Bachelors (Technology)')
            cy.get('#leadname').clear().type(data.name)
            cy.get('#leademail').clear().type(data.email)
            cy.get('#leadphone_no').clear().type(data.number)
            cy.get('.col-md-3 > .jsx-197552324').click()
            cy.ColAppliedpageMob();
            cy.OTP_TYmodal('mob')
        })
    })
})