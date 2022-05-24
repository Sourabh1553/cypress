describe('Verify Elements and page structure- Mob College Pages', () => {
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

    it('Mob College Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_admission)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Gallery Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_gallery)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_gallery)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College CourseFee Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_courseFee)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_courseFee)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Faculty Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_faculty)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_faculty)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_news)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Placements Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_placement)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_placement)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection('norating');
    }) 

    it('Mob College Result Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_result)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_result)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Hostel Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_hostel)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_hostel)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_review)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_review)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Info Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_info)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_info)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Single Course Page With Params', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_singleCourse_params)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_singleCourse_params)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 

    it('Mob College Single Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.college_singleCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.college_singleCourse)
            }
        })
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCommonButton();
        }
        cy.mobCommonSection();
    }) 
})