describe('Verify Elements and page structure- University Pags', () => {
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

    it('University Admission Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_admission)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_admission)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University Gallery Page', function () { 
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_gallery)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_gallery)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University CourseFee Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_courseFee)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_courseFee)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('coursefees');
    }) 

    it('University Faculty Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_faculty)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_faculty)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University News Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_news)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_news)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('news');
    }) 

    it('University Placements Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_placement)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_placement)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University Ranking Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_ranking)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_ranking)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University Hostel Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_hostel)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_hostel)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University Review Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_review)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_review)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University Info Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_info)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_info)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages();
    }) 

    it('University Single Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_singleCourse)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_singleCourse)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('coursefees');
        cy.ValidateElement(this.testData.col_btns,'Apply for this courseDownload Brochure Ask a question');
    }) 

    it('University Single Course Page With Params', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_singleCourseParams)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_singleCourseParams)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('coursefees');
        cy.ValidateElement(this.testData.col_btns,'Apply for this courseDownload Brochure Ask a question');
    }) 

    it('University Affiliated Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_affiliated)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_affiliated)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('affiliated');
    }) 

    it('University Department Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_department)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_department)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('department');
    }) 

    it('University Affiliated City Page-1', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_affiliated_city)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_affiliated_city)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('affiliated');
    }) 

    it('University Affiliated City Page-2', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.university_affiliated_city2)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.university_affiliated_city2)
            }
        })
        cy.commonPageElementVal();
        cy.commonCollegePages('affiliated');
    }) 
})