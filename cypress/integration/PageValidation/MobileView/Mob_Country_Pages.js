describe('Verify Elements and page structure- Mob Country Pages', () => {
    beforeEach(function (){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.fixture('xpath').then(function(testData){
            this.testData = testData;
            Cypress.config('defaultCommandTimeout', 5000);
        })
    })

    it('Mob-Canada Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.canada)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.canada)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Canada Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    }) 

    it('Mob-USA Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.usa)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.usa)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search USA Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        // cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
        
    })

    it('Mob-UK Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.uk)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.uk)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search UK Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)        
    })

    it('Mob-Australia Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.australia)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.australia)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Australia Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null) 
    })

    it('Mob-Germany Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.germany)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.germany)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Germany Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-Ireland Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.ireland)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.ireland)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Ireland Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-Hong-kong Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.hong_kong)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.hong_kong)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Hong kong Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-Singapore Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.singapore)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.singapore)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Singapore Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-New-zealand Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.new_zealand)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.new_zealand)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search New zealand Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-Malaysia Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.malaysia)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.malaysia)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Malaysia Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-Sweden Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.sweden)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.sweden)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Sweden Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })

    it('Mob-Netherlands Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.netherlands)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.netherlands)
            }
        })
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_heading_1,'Search Netherlands Colleges')
        cy.ValidateElement(this.testData.mob_SA_home_searchbar_2,null)
        cy.ValidateElement(this.testData.mob_SA_course_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_university_section_2,null)
        cy.ValidateElement(this.testData.mob_SA_study_section_2,null)
    })
})