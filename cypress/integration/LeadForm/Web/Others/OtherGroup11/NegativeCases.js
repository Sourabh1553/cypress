    describe('Negative Cases- Regression', () => {
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
            cy.fixture('xpath').then((data)=>{
                cy.get(data.other_col1).click()
            })
        })

        it('All null values', () =>{
            cy.get('.col-md-3 > .btn').click()
            cy.NegativeValidation()
            cy.get('.lead-close-icon').click()
            cy.get('.login-button').should('have.text','Login').end()
        })

        it('Name as null', () =>{
            cy.get('#leadname').clear()
            cy.get('#leademail').clear().type('pqr@gmail.com')
            cy.get('#leadphone_no').clear().type('9873767310')
            cy.get('#leadcity').clear().type('New Delhi')
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.get('#leadcourse_tag_id').clear().type('Btech')
            cy.get('ul.custom-search-submenu').invoke('show').click()   
            cy.get('.col-md-3 > .btn').click()
            cy.get('.col-8 > form > :nth-child(1) > :nth-child(1) > .invalid-feedback').should('have.text','Enter a valid Name')
            cy.get('.lead-close-icon').click()
            cy.get('.login-button').should('have.text','Login').end()
        })

        it('Email as null', () =>{
            cy.get('#leadname').clear().type('PQR XYZ')
            cy.get('#leademail').clear()
            cy.get('#leadphone_no').clear().type('9873767310')
            cy.get('#leadcity').clear().type('New Delhi')
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.get('#leadcourse_tag_id').clear().type('Btech')
            cy.get('ul.custom-search-submenu').invoke('show').click()   
            cy.get('.col-md-3 > .btn').click()
            cy.get(':nth-child(2) > .invalid-feedback').should('have.text','Enter a valid Email Address')
            cy.get('.lead-close-icon').click()
            cy.get('.login-button').should('have.text','Login').end()
        })

        it('Mobile number as null', () =>{
            cy.get('#leadname').clear().type('PQR XYZ')
            cy.get('#leademail').clear().type('pqr@gmail.com')
            cy.get('#leadphone_no').clear()
            cy.get('#leadcity').clear().type('New Delhi')
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.get('#leadcourse_tag_id').clear().type('Btech')
            cy.get('ul.custom-search-submenu').invoke('show').click()   
            cy.get('.col-md-3 > .btn').click()
            cy.get('.phone_no > .invalid-feedback').should('have.text','Enter a valid Mobile Number')
            cy.get('.lead-close-icon').click()
            cy.get('.login-button').should('have.text','Login').end()
        })

        it('City as null', () =>{
            cy.get('#leadname').clear().type('PQR XYZ')
            cy.get('#leademail').clear().type('pqr@gmail.com')
            cy.get('#leadphone_no').clear().type('9873767310')
            cy.get('#leadcity').clear()
            cy.get('#leadcourse_tag_id').clear().type('Btech')
            cy.get('ul.custom-search-submenu').invoke('show').click()   
            cy.get('.col-md-3 > .btn').click()
            cy.get(':nth-child(1) > .material-form-field-wrapper > .invalid-feedback').should('have.text','Select a valid City')
            cy.get('.lead-close-icon').click()
            cy.get('.login-button').should('have.text','Login').end()
        }) 

        it('Course as null', () =>{
            cy.LeadFormCommonData()
            cy.get('#leadcourse_tag_id').clear().type('Btech') 
            cy.get('.col-md-3 > .btn').click()
            cy.get(':nth-child(2) > .material-form-field-wrapper > .invalid-feedback').should('have.text','Select a valid Course')
            cy.get('.lead-close-icon').click()
            cy.get('.login-button').should('have.text','Login').end()
        })

        it('No OTP', () =>{
            cy.LeadFormCommonData()
            cy.get('#leadcourse_tag_id').clear().type('MBBS')
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.get('span.off').click()
            cy.get('.col-md-3 > .btn').click()
            cy.MBBSpage2()
            cy.get('.ml-auto > .btn').click()
            cy.ColAppliedpage();
            cy.get('form > .btn').click()
            cy.get('.otp__errors').should('have.text','Wrong OTP entered!')
            cy.get('.btn-close').click()
            cy.get('.login-button').should('have.text','Login').end()
        }) 

        // it('Wrong OTP', () =>{
        //     cy.LeadFormCommonData()
        //     cy.get('#leadcourse_tag_id').clear().type('MBBS')
        //     cy.get('ul.custom-search-submenu').invoke('show').click()
        //     cy.get('span.off').click()
        //     cy.get('.col-md-3 > .btn').click()
        //     cy.MBBSpage2()
        //     cy.get('.ml-auto > .btn').click()
        //     cy.EnterWrongOTP()
        //     cy.get('form > .btn').click()
        //     cy.get('.otp__errors').should('have.text','Wrong OTP Entered!')
        //     cy.get('.btn-close').click()
        //     cy.get('.login-button').should('have.text','Login').end()
        // })

        it('NO QUESTION', () =>{
            cy.LeadFormCommonData()
            cy.get('#leadcourse_tag_id').clear().type('MBBS')
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.get('span.off').click()
            cy.get('.col-md-3 > .btn').click()
            cy.MBBSpage2()
            cy.get('.ml-auto > .btn').click()
            cy.ColAppliedpage();
            cy.EnterOTP()
            cy.get('form > .btn').click()
            cy.get('#js-ask-a-question').click()
            cy.get('#js-ask-a-question-submit').click()
            cy.get(':nth-child(4) > .invalid-feedback').should('have.text','Enter a question under 300 characters.')
            cy.get('textarea[name="askQuestion"]').click().type('Less than 20 chars')
            cy.get(':nth-child(4) > .invalid-feedback').should('have.text','Enter a question more than 20 characters.')
            cy.get('.thankyou-modal-container > .jsx-1616745675').click()
            cy.waitUntil(() => cy.get('.login-button').then($el => $el.val('Hi, PQR XYZ')))
        }) 
    })