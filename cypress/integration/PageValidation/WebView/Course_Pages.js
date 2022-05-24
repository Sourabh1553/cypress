describe('Verify Elements and page structure- Course Pages', () => {
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_overviewList,null)
        cy.ValidateElement(this.testData.course_singleCourse,null)
        cy.ValidateElement(this.testData.course_singleCourse_btns,null)
        cy.ValidateElement(this.testData.course_viewall_btn,null)
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_overviewList,null)
        cy.ValidateElement(this.testData.course_singleCourse,null)
        cy.ValidateElement(this.testData.course_singleCourse_btns,null)
        cy.ValidateElement(this.testData.course_viewall_btn,null)
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_overviewList,null)
        cy.ValidateElement(this.testData.course_singleCourse,null)
        cy.ValidateElement(this.testData.course_singleCourse_btns,null)
        cy.ValidateElement(this.testData.course_viewall_btn,null)
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_overviewList,null)
        cy.ValidateElement(this.testData.course_singleCourse,null)
        cy.ValidateElement(this.testData.course_singleCourse_btns,null)
        cy.ValidateElement(this.testData.course_viewall_btn,null)
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_overviewList,null)
        cy.ValidateElement(this.testData.course_singleCourse,null)
        cy.ValidateElement(this.testData.course_singleCourse_btns,null)
        cy.ValidateElement(this.testData.course_viewall_btn,null)
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_overviewList,null)
        cy.ValidateElement(this.testData.course_singleCourse,null)
        cy.ValidateElement(this.testData.course_singleCourse_btns,null)
        cy.ValidateElement(this.testData.course_viewall_btn,null)
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_sidebar_1,null)
        cy.ValidateElement(this.testData.course_courselist_2,null)
        cy.ValidateElement(this.testData.course_courselist_2_btns,null)
        cy.ValidateElement(this.testData.course_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_subsidebar_1_heading,'TOP Engineering COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.course_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_subsidebar_2_heading,'TOP BE/B.Tech COLLEGES IN INDIA')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_sidebar_1,null)
        cy.ValidateElement(this.testData.course_courselist_2,null)
        cy.ValidateElement(this.testData.course_courselist_2_btns,null)
        cy.ValidateElement(this.testData.course_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_subsidebar_1_heading,'TOP Aviation COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.course_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_subsidebar_2_heading,'TOP BBA (Aviation) COLLEGES IN INDIA')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_sidebar_1,null)
        cy.ValidateElement(this.testData.course_courselist_2,null)
        cy.ValidateElement(this.testData.course_courselist_2_btns,null)
        cy.ValidateElement(this.testData.course_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_subsidebar_1_heading,'TOP Animation COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.course_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_subsidebar_2_heading,'TOP null COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_submenu,null)
        cy.ValidateElement(this.testData.course_askaquestion_btn,null)
        cy.ValidateElement(this.testData.SA_article_dg_btn,null)
        cy.ValidateElement(this.testData.course_subsidebar_3,null)
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
        cy.commonPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.course_sidebar_1,null)
            cy.ValidateElement(this.testData.course_courselist_2,null)
            cy.ValidateElement(this.testData.course_courselist_2_btns,null)
            cy.ValidateElement(this.testData.course_subsidebar_1,null)
        }else{
            cy.ValidateElement(this.testData.course_submenu,null)
            cy.ValidateElement(this.testData.course_askaquestion_btn,null)
            cy.ValidateElement(this.testData.SA_article_dg_btn,null)
            cy.ValidateElement(this.testData.course_subsidebar_3,null)
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
        cy.commonPageElementVal()
        if(Cypress.env("varEnv")=='stage'){
            cy.ValidateElement(this.testData.course_sidebar_1,null)
            cy.ValidateElement(this.testData.course_courselist_2,null)
            cy.ValidateElement(this.testData.course_courselist_2_btns,null)
            cy.ValidateElement(this.testData.course_subsidebar_1,null)
        }else{
            cy.ValidateElement(this.testData.course_submenu,null)
            cy.ValidateElement(this.testData.course_askaquestion_btn,null)
            cy.ValidateElement(this.testData.SA_article_dg_btn,null)
            cy.ValidateElement(this.testData.course_subsidebar_3,null)
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_sidebar_1,null)
        cy.ValidateElement(this.testData.course_courselist_2,null)
        cy.ValidateElement(this.testData.course_courselist_2_btns,null)
        cy.ValidateElement(this.testData.course_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_subsidebar_1_heading,'TOP BE/B.Tech COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.course_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_subsidebar_2_heading,'TOP Engineering COLLEGES IN INDIA')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_sidebar_1,null)
        cy.ValidateElement(this.testData.course_courselist_2,null)
        cy.ValidateElement(this.testData.course_courselist_2_btns,null)
        cy.ValidateElement(this.testData.course_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_subsidebar_1_heading,'TOP Bachelors in Vocational Courses COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.course_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_subsidebar_2_heading,'TOP Vocational Courses COLLEGES IN INDIA')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_sidebar_1,null)
        cy.ValidateElement(this.testData.course_courselist_2,null)
        cy.ValidateElement(this.testData.course_courselist_2_btns,null)
        cy.ValidateElement(this.testData.course_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_subsidebar_1_heading,'TOP M.Sc (Aviation) COLLEGES IN INDIA')
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_submenu,null)
        cy.ValidateElement(this.testData.course_askaquestion_btn,null)
        cy.ValidateElement(this.testData.SA_article_dg_btn,null)
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.course_submenu,null)
        cy.ValidateElement(this.testData.course_askaquestion_btn,null)
        cy.ValidateElement(this.testData.SA_article_dg_btn,null)
        cy.ValidateElement(this.testData.course_subsidebar_3,null)
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_content_sec,null)
        cy.ValidateElement(this.testData.course_sidebar_2,null)
        cy.ValidateElement(this.testData.course_sidebar_btn1,'GET MORE INFO')
        cy.ValidateElement(this.testData.course_sidebar_btn2,'ASK A QUESTION')
        cy.ValidateElement(this.testData.course_spec_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_spec_subsidebar_1_heading,' Integrated COURSES with B.Tech')
        cy.ValidateElement(this.testData.course_spec_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_spec_subsidebar_2_heading,'FEATURED COURSES')
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        cy.ValidateElement(this.testData.exam_content_sec,null)
        cy.ValidateElement(this.testData.course_sidebar_2,null)
        cy.ValidateElement(this.testData.course_sidebar_btn1,'GET MORE INFO')
        cy.ValidateElement(this.testData.course_sidebar_btn2,'ASK A QUESTION')
        cy.ValidateElement(this.testData.course_spec_subsidebar_1,null)
        cy.ValidateElement(this.testData.course_spec_subsidebar_1_heading,' Integrated COURSES with B.Tech')
        cy.ValidateElement(this.testData.course_spec_subsidebar_2,null)
        cy.ValidateElement(this.testData.course_spec_subsidebar_2_heading,'FEATURED COURSES')
        cy.ValidateElement(this.testData.rating_1,null)
        cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
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
        cy.commonPageElementVal()
        if(Cypress.env("varEnv")=='prod'){
            cy.ValidateElement(this.testData.exam_content_sec,null)
            cy.ValidateElement(this.testData.exam_content_sec,null)
            cy.ValidateElement(this.testData.review_btn_1,null) 
            cy.ValidateElement(this.testData.notification_section,null)
            cy.ValidateElement(this.testData.rating_1,null)
            cy.ValidateElement(this.testData.rating_content_1,'1Not so likely2345678910Highly Likely')
        }else{
            cy.ValidateElement(this.testData.exam_content_sec,null)
            cy.ValidateElement(this.testData.exam_content_sec,null)
            cy.ValidateElement(this.testData.review_btn_1,null)
        }
    })
})