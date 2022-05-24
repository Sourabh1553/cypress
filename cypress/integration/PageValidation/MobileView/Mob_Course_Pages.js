describe('Verify Elements and page structure- Mob Course Pages', () => {
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

    it('Courses after 10th Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_afterTenth)
            }else{
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("stage")+data1.course_afterTenth)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse1();
    }) 

    it('Courses after 12th Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_after12th)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_after12th)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse1();
    }) 

    it('Diploma Courses Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_diploma)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_diploma)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse1();
    }) 

    it('Courses Certifactions Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_certi)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_certi)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse1();
    }) 

    it('Masters Courses Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_masters)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_masters)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse1();
    }) 

    it('PHD Courses Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_phd)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_phd)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse1();
    }) 

    it('Engineering courses after 12th Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.courses_list_engAfter12th)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.courses_list_engAfter12th)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse2();
    }) 

    it('Aviation courses after 12th Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.courses_list_aviationAfter12th)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.courses_list_aviationAfter12th)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse2();
    }) 

    it('Animation courses after 12th Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.courses_list_animationAfter12th)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.courses_list_animationAfter12th)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse2();
    }) 

    it('Engineering Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_engineering)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_engineering)
            }
        })  
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
    }) 

    it('Management Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_management)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_management)
            }
        })  
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCourse2();
        }else{
            cy.scrollTo(30,30);
            cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
            cy.ValidateElement(this.testData.exam_rating_1,null);
            cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
            cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
        }
    })
    
    it('Vocation Studies Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_vocation)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_vocation)
            }
        })  
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobCourse2();
        }else{
            cy.scrollTo(30,30);
            cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
            cy.ValidateElement(this.testData.exam_rating_1,null);
            cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
            cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
        }
    })

    it('Btech Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_btech)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_btech)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse2();
    })

    it('BVC Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_bvc)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_bvc)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse2();
    })

    it('MSC Aviation Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_mscaviation)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_mscaviation)
            }
        })  
        cy.commonMobPageElementVal();
        cy.mobCourse2();
    })

    it('Engineering Courses Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_listEngineer)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_listEngineer)
            }
        })  
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
        cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
    })

    it('Engineering Courses after 12th Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_engAfter12th)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_engAfter12th)
            }
        })  
        cy.commonMobPageElementVal();
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
    })

    it('Btech Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_bechcomp)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_bechcomp)
            }
        })  
        cy.commonMobPageElementVal();
        if(Cypress.env("varEnv")=='stage'){
            cy.mobFlexButtons();
        }
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_2,null);
        cy.ValidateElement(this.testData.mob_course_content_section_1,null);
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
    })

    it('Btech Course-Cutoff Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_cutoff)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_cutoff)
            }
        })  
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.mob_news_morenews_section_heading_2,null);
        cy.ValidateElement(this.testData.mob_course_content_section_1,null);
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_bottom_btns,'APPLY NOWCheck Eligibility');
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
        cy.ValidateElement(this.testData.mob_similar_colleges_section_1,null);
    })

    it('MBA Course Page', function () {
        cy.fixture('endpoint').then((data1)=>{
            if(Cypress.env("varEnv")=='prod'){
                cy.log(Cypress.env("varEnv"))
                cy.visit(Cypress.env("prod")+data1.course_mba_ad)
            }else{
                cy.log(Cypress.env("varEnv")) 
                cy.visit(Cypress.env("stage")+data1.course_mba_ad)
            }
        })  
        cy.commonMobPageElementVal();
        cy.ValidateElement(this.testData.exam_content_sec,null);
        cy.scrollTo(30,30);
        cy.ValidateElement(this.testData.mob_sa_downloadguide_btn,null);
        cy.ValidateElement(this.testData.mob_sa_free_counselling,null);
        cy.ValidateElement(this.testData.exam_rating_1,null);
        cy.ValidateElement(this.testData.exam_rating_numbers_1,'12345678910');
    })
})