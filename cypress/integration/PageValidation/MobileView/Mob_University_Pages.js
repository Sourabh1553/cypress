describe('Verify Elements and page structure- Mob University Pags', () => {
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

    it('Mob- University Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_admission)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Gallery Page', function () { 
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_gallery)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_gallery)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University CourseFee Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_courseFee)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_courseFee)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Faculty Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_faculty)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_faculty)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_news)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Placements Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_placement)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_placement)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Ranking Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_ranking)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_ranking)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Hostel Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_hostel)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_hostel)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_review)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_review)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Info Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_info)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_info)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Single Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_singleCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_singleCourse)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Single Course Page With Params', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_singleCourseParams)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_singleCourseParams)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Affiliated Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_affiliated)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_affiliated)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection('norating');
    }) 

    it('Mob- University Department Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_department)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_department)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection();
    }) 

    it('Mob- University Affiliated City Page-1', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_affiliated_city)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_affiliated_city)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection('norating');
    }) 

    it('Mob- University Affiliated City Page-2', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_affiliated_city2)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_affiliated_city2)
            }
        })
        cy.commonMobPageElementVal();
        cy.mobCommonButton();
        cy.mobCommonSection('norating');
    }) 
})