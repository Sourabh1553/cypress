//Common Methods
import 'cypress-wait-until';
import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();

Cypress.Commands.add('LeadForm', (param) =>{
    //web_india_MBBS
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //for web-view
        if(arr.includes('web')){ 
            //for web view-> india-flow
            if(arr[1]=='india'){
                if(!(arr.includes('loggedIN'))){
                    cy.LeadFormCommonData()
                }
                //web view-> india-flow -> Medical Flow
                if(arr[2]=='MBBS'){
                    cy.log('Filling course:' + data.course1);
                    cy.get('#leadcourse_tag_id').clear().type(data.course1)
                    cy.log('Clicking on course name');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Clicking on Distant course button');
                    cy.get('span.off').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    cy.MBBSpage2()
                    cy.log('Click on Submit button');
                    cy.get('.ml-auto > .btn').click()
                    cy.ColAppliedpage();
                }
                //web view-> india-flow -> Masters Flow
                else if(arr[2]=='MBA'){
                    cy.log('Filling course:' + data.course1);
                    cy.get('#leadcourse_tag_id').clear().type(data.course2)
                    cy.log('Clicking on course name');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Clicking on Distant course button');
                    cy.get('span.off').click()
                    cy.log('Clicking on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    if(arr.length > 3 && !(arr.includes('loggedIN')) && !(arr.includes('HomePage'))){
                        cy.MBBSpage2()
                        cy.log('Clicking on Submit button');
                        cy.get('.ml-auto > .btn').click()
                    }
                    cy.MBApage2()
                    cy.log('Clicking on Submit button');
                    cy.get('.ml-auto > .btn').click()   
                    cy.ColAppliedpage();
                }
                //web view-> india-flow -> Ask a question
                else if(arr[2]=='QUES'){
                    cy.log('Filling message:' + data.message);
                    cy.get('#leadmessage').type(data.message)
                    cy.log('Filling Course:' + data.course3);
                    cy.get('#leadcourse_tag_id').clear().type(data.course3)
                    cy.log('Selecting course');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Clicking on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    if(arr.length > 3 && !(arr.includes('loggedIN')) && !(arr.includes('HomePage'))){
                        cy.MBBSpage2()
                        cy.log('Clicking on Submit button');
                        cy.get('.ml-auto > .btn').click()
                    }  
                    cy.ColAppliedpage();
                }
                //web view-> india-flow -> BCA -New button
                else if(arr[2]=='BCA'){
                    cy.log('Filling course:' + data.course6);
                    cy.get('#leadcourse_tag_id').clear().type(data.course6)
                    cy.log('Clicking on course name');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Clicking on Distant course button');
                    cy.get('span.off').click()
                    cy.log('Clicking on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    cy.MBBSpage2('addBtns')
                    cy.log('Clicking on Submit button');
                    cy.get('.ml-auto > .btn').click()
                    cy.ColAppliedpage();
                }
                //web view-> india-flow -> Undergrad flow
                else{
                    cy.log('Filling course:' + data.course3);
                    cy.get('#leadcourse_tag_id').clear().type(data.course3)
                    cy.log('Clicking on course name');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Clicking on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    if(arr.length > 3 && !(arr.includes('loggedIN')) && !(arr.includes('HomePage'))){
                        cy.MBBSpage2()
                        cy.log('Clicking on Submit button');
                        cy.get('.ml-auto > .btn').click()
                    }
                    cy.ColAppliedpage();
                }
                if(Cypress.env("varEnv")!='prod'){
                    if(arr[2]=='QUES'){
                        cy.OTP_TYmodal('Ques')
                    }else if(arr.includes('loggedIN')){
                        cy.ThankYou()
                        cy.get('.thankyou-modal-container > .jsx-1616745675').click()
                    }else if(arr.includes('HomePage')){
                        cy.OTP_TYmodal('HomePage');
                    }else{
                        cy.OTP_TYmodal();
                    }
                }
            }
            //For web view-> Study abroad-flow
            else{
                if(!(arr.includes('loggedIN'))){
                    cy.LeadFormCommonData_SA()
                    cy.log('Enter city: '+ data.city);
                    cy.get('#leadcity').clear().type(data.city)
                    cy.log('Select city');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                }
                //web view-> Study abroad-flow -> Masters Flow
                if(arr[2]=='MBA'){
                    cy.log('Enter course: '+ data.course2);
                    cy.get('#leadsa_course_group').clear().type(data.course2)
                    cy.log('Select course');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Enter course specialization: '+ data.courseMapper2);
                    cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper2)
                    cy.log('Select course specialization');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    cy.SApage2_EduPreference('GRE')
                    if(arr.length > 3){
                        cy.log('Enter and select country');
                        cy.get('#leaddestination_country').type('Canada').get('.custom-search-submenu-option > :nth-child(1)').click()
                    }
                    cy.log('Click on Submit button');
                    cy.get('.ml-auto > .btn').click()
                    cy.SApage_undergrad()
                    cy.log('Click on Submit button');
                    cy.get('.ml-auto > .btn').click()
                    cy.ColAppliedpage('SA');
                }
                //web view-> Study abroad-flow -> LoggedIn Flow
                else if(arr.includes('loggedIN')){
                    if(arr.includes('MBBS')){
                        cy.get('#leadsa_course_group').clear().type(data.course4)
                        cy.get('ul.custom-search-submenu').invoke('show').click()
                        cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper1)
                        cy.get('ul.custom-search-submenu').invoke('show').click()
                        cy.get('.col-md-3 > .btn').click()
                    }
                    else if(arr.includes('MBA')){
                        cy.get('#leadsa_course_group').clear().type(data.course2)
                        cy.get('ul.custom-search-submenu').invoke('show').click()
                        cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper2)
                        cy.get('ul.custom-search-submenu').invoke('show').click()
                        cy.get('.col-md-3 > .btn').click()
                    }else{
                        cy.get('#leadsa_course_group').clear().type(data.course5)
                        cy.get('ul.custom-search-submenu').invoke('show').click()
                        cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper3)
                        cy.get('ul.custom-search-submenu').invoke('show').click()
                        cy.get('.col-md-3 > .btn').click()
                    }
                }
                //web view-> Study abroad-flow -> Undergrad flow
                else{
                    cy.log('Enter course: '+ data.course5);
                    cy.get('#leadsa_course_group').clear().type(data.course5)
                    cy.log('Select course');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Enter course specialization: '+ data.courseMapper2);
                    cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper3)
                    cy.log('Select course');
                    cy.get('ul.custom-search-submenu').invoke('show').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .btn').click()
                    cy.SApage2_EduPreference('LSAT')
                    if(arr.length > 3){
                        cy.log('Enter and select country');
                        cy.get('#leaddestination_country').type('Canada').get('.custom-search-submenu-option > :nth-child(1)').click()
                    }
                    cy.log('Enter and select country');
                    cy.get('.ml-auto > .btn').click()
                    cy.SApage_highschool()
                    cy.log('Enter and select country');
                    cy.get('.ml-auto > .btn').click()
                    cy.ColAppliedpage('SA');
                }
                if(Cypress.env("varEnv")!='prod'){
                    if(arr.includes('loggedIN')){
                        cy.ThankYou()
                        cy.log('Close the thank you modal form');
                        cy.get('.thankyou-modal-container > .jsx-1616745675').click()
                    }else{
                        cy.OTP_TYmodal()
                    }
                }
            }
        }
        //for mobile-View
        else{
            //for mobile-View -> india-flow
            if(arr[1]=='india'){
                if(!(arr.includes('loggedIN'))){
                    cy.LeadFormCommonDataMob()
                }
                //mobile-View -> india-flow -> Medical Flow
                if(arr[2]=='MBBS'){
                    cy.log('Click on Course');
                    cy.get('#leadcourse_tag_id').click()
                    cy.log('Enter course:' + data.course1);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course1)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Select distant coaching as YES');
                    cy.get('.slider').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    cy.MBBSpage2Mob()
                    cy.log('Click on Submit button');
                    cy.get('.btn-primary.btn-block.py-2.mb-2').click()    
                    cy.ColAppliedpageMob()
                }
                //mobile-View -> india-flow -> BCA btn
                else if(arr[2]=='BCA'){
                    cy.log('Click on Course');
                    cy.get('#leadcourse_tag_id').click()
                    cy.log('Enter course:' + data.course6);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course6)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Select distant coaching as YES');
                    cy.get('.slider').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    cy.MBBSpage2Mob('addBtns')
                    cy.log('Click on Submit button');
                    cy.get('.position-absolute > :nth-child(1) > .jsx-197552324').click()    
                    cy.ColAppliedpageMob()
                }
                //mobile-View -> india-flow -> Masters Flow
                else if(arr[2]=='MBA'){
                    cy.log('Click on Course');
                    cy.get('#leadcourse_tag_id').click()
                    cy.log('Enter course:' + data.course2);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course2)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Select distant coaching as YES');
                    cy.get('.slider').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    if(arr.length > 3 && !(arr.includes('loggedIN'))){
                        cy.MBBSpage2Mob()
                        cy.log('Click on Submit button');
                        cy.get('.lead-submit-section > :nth-child(1) > .jsx-197552324').click()
                    }
                    cy.MBApage2Mob()
                    cy.log('Click on Submit button');
                    cy.get('.position-absolute > :nth-child(1) > .jsx-197552324').click() 
                    cy.ColAppliedpageMob()
                }
                //mobile-View -> india-flow -> Ask a question
                else if(arr[2]=='QUES'){
                    cy.log('Click on Course');
                    cy.get('#leadcourse_tag_id').click()
                    cy.log('Enter course:' + data.course3);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course3)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Enter message:' + data.message);
                    cy.get('#leadmessage').type(data.message)
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    if(arr.length > 3 && !(arr.includes('loggedIN'))){
                        cy.MBBSpage2Mob()
                        cy.log('Click on Submit button');
                        cy.get('.lead-submit-section > :nth-child(1) > .jsx-197552324').click()
                    } 
                    cy.ColAppliedpageMob()
                }
                //mobile-View -> india-flow -> Undergrad flow
                else{
                    cy.log('Click on Course');
                    cy.get('#leadcourse_tag_id').click()
                    cy.log('Enter course:' + data.course3);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course3)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    if(arr.length > 3 && !(arr.includes('loggedIN'))){
                        cy.MBBSpage2Mob()
                        cy.log('Click on Submit button');
                        cy.get('.lead-submit-section > :nth-child(1) > .jsx-197552324').click()                        
                    }   
                    cy.ColAppliedpageMob()
                }
                if(Cypress.env("varEnv")!='prod'){
                    if(arr[2]=='QUES'){
                        cy.OTP_TYmodal('QuesMob')
                    }else if(arr.includes('loggedIN')){
                        cy.ThankYou('mobile')
                        cy.log('Closing the Thank You Modal');
                        cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
                    }else{
                        cy.OTP_TYmodal('mob')
                    }
                }
            }
            //for mobile-View -> Study abroad-flow
            else{
                if(!(arr.includes('loggedIN'))){
                    cy.LeadFormCommonDataMob()
                }
                //mobile-View -> Study abroad-flow -> Masters Flow
                if(arr[2]=='MBA'){
                    cy.log('Click on Course');
                    cy.get('#leadsa_course_group').click()
                    cy.log('Enter course:' + data.course2);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course2)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Click on Course-Specialization');
                    cy.get('#leadsa_course_mapper_id').click()
                    cy.log('Enter course-specialization:' + data.courseMapper2);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper2)
                    cy.log('Click on Course-Specialization');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    cy.SApage2_EduPreferenceMob('GRE')
                    if(arr.length > 3 && !(arr.includes('loggedIN'))){
                        cy.log('Click on Country');
                        cy.get('#leaddestination_country').click()
                        cy.log('Select the option from dropdown');
                        cy.get('li[data-index="0-0"]').click()
                        cy.get(':nth-child(3) > .jsx-3290172389').click()
                    }
                    cy.log('Click on Submit button');
                    cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
                    cy.SApage_undergradMob()
                    cy.log('Click on Submit button');
                    cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
                    cy.ColAppliedpageMob('SA')
                }
                //mobile-View -> Study abroad-flow -> LoggedIN Flow
                else if(arr.includes('loggedIN')){
                    if(arr.includes('MBBS')){
                        cy.get('#leadsa_course_group').click()
                        cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course4)
                        cy.get('.custom-search-submenu-option').click()
                        cy.get('#leadsa_course_mapper_id').click()
                        cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper1)
                        cy.get('.custom-search-submenu-option').click()
                        cy.get('.col-md-3 > .jsx-197552324').click()
                    }
                    else if(arr.includes('MBA')){
                        cy.get('#leadsa_course_group').click()
                        cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course2)
                        cy.get('.custom-search-submenu-option').click()
                        cy.get('#leadsa_course_mapper_id').click()
                        cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper2)
                        cy.get('.custom-search-submenu-option').click()
                        cy.get('.col-md-3 > .jsx-197552324').click()
                    }else{
                        cy.get('#leadsa_course_group').click()
                        cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course5)
                        cy.get('.custom-search-submenu-option').click()
                        cy.get('#leadsa_course_mapper_id').click()
                        cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper3)
                        cy.get('.custom-search-submenu-option').click()
                        cy.get('.col-md-3 > .jsx-197552324').click()
                    }
                }
                //mobile-View -> Study abroad-flow -> Undergrad flow
                else{
                    cy.log('Click on Course');
                    cy.get('#leadsa_course_group').click()
                    cy.log('Enter course:' + data.course5);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course5)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Click on Course-Specialization');
                    cy.get('#leadsa_course_mapper_id').click()
                    cy.log('Enter course-specialization:' + data.courseMapper3);
                    cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper3)
                    cy.log('Select the option from dropdown');
                    cy.get('.custom-search-submenu-option').click()
                    cy.log('Click on Submit button');
                    cy.get('.col-md-3 > .jsx-197552324').click()
                    cy.SApage2_EduPreferenceMob('LSAT')
                    if(arr.length > 3 && !(arr.includes('loggedIN'))){
                        cy.log('Click on Country');
                        cy.get('#leaddestination_country').click()
                        cy.log('Select the option from dropdown');
                        cy.get('li[data-index="0-0"]').click()
                        cy.get(':nth-child(3) > .jsx-3290172389').click()
                    }
                    cy.log('Click on Submit button');
                    cy.get('.lead-submit-section > :nth-child(1) > .jsx-197552324').click()
                    cy.SApage_highschoolMob()
                    cy.log('Click on Submit button');
                    cy.get('.lead-submit-section > :nth-child(1) > .jsx-197552324').click()   
                    cy.ColAppliedpageMob('SA')
                }
                if(Cypress.env("varEnv")!='prod'){
                    if(arr.includes('loggedIN')){
                        cy.ThankYou('mobile')
                        cy.log('Closing the Thank You Modal');
                        cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
                    }else{
                        cy.OTP_TYmodal('mob')
                    }
                }
            }
        }
    })
})

Cypress.Commands.add('WebRegression_CollegePriorityForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Web View
        if(arr.includes('web')){ 
            cy.LeadFormCommonData()
            cy.log('Enter Course');
            cy.get('#leadcourse_tag_id').clear().type(data.course1)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            
            //Coaching leadform as NO
            cy.MBBSpage2('No');
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click();
            if(arr.includes('VerifyPage')){
                cy.log('Verify Page elements');
                cy.VerifyColPriorityForm();
                cy.log('Verify Page errors');
                cy.VerifyColPriorityFormErrors();
            }
            if(arr.includes('noCollege')){
                cy.VerifyColApplied('noCollege');
            }else if(arr.includes('statInterested')){
                cy.VerifyColApplied('interestedStatus');
            }else if(arr.includes('statAwaitingResult')){
                cy.VerifyColApplied('awaitingResult');
            }else if(arr.includes('addCollege')){
                //Add a row
                cy.addRowsColAppliedPage();
                //Add data in the rows
                cy.MultipleColApplied('1');
                cy.MultipleColApplied('2');
                cy.MultipleColApplied('3');
                cy.MultipleColApplied('4');
                cy.MultipleColApplied('5');
                //Change priorities of college
                cy.log('Hover over to the button');
                cy.get('.position-relative.input-row').eq(4).trigger('mouseover')
                cy.log('Verify that Priority-Down button is disabled');
                cy.get('.icon.icon-danger.disabled').should('exist');
                cy.log('Hover over to the button');
                cy.get('.position-relative.input-row').eq(0).trigger('mouseover')
                cy.log('Verify that Priority-Up button is disabled');
                cy.get('.icon.icon-success.disabled').should('exist');
                cy.log('Hover over to the button');
                cy.get('.position-relative.input-row').eq(4).trigger('mouseover')
                cy.log('Click on Priority-Up button');
                cy.get('div:nth-child(6) > > div.pb-1.rotate.icon.icon-success > svg > path').invoke('show').click({force:true})
                cy.log('Hover over to the button');
                cy.get('.position-relative.input-row').eq(3).trigger('mouseover')
                cy.log('Click on Priority-Down button');
                cy.get('div:nth-child(4) > > .icon.icon-danger').eq(0).invoke('show').click({force:true})
                cy.log('Verify the college on row 3');
                cy.get('.form-control.equi-padded.pr-6.clearable').eq(2).should('have.value','IIT Bombay - Indian Institute of Technology, Mumbai, India')
                cy.log('Enter Study-Start year');
                cy.get('#leadstudy_start').click().type(data.study_start)
                cy.log('Select option from the dropdown');
                cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
                cy.log('Click on Submit button');
                cy.get('.ml-auto > .btn').click()
            }else if(arr.includes('applicationStat')){
                cy.addRowsColAppliedPage();
                cy.addColNameAppliedPage();
                cy.log('Enter Study-Start year');
                cy.get('#leadstudy_start').click().type(data.study_start)
                cy.log('Select option from the dropdown');
                cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
                cy.log('Click on Submit button');
                cy.get('.ml-auto > .btn').click();
                cy.VerifyColPriorityFormErrors2();
                cy.deleteRowAppliedPage();
                cy.log('Click on Submit button');
                cy.get('.ml-auto > .btn').click();
            }else{
                cy.VerifyColApplied();
            }
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('Ques')
            }else if(arr.includes('HomePage')){
                cy.OTP_TYmodal('HomePage');
            }else{
                cy.OTP_TYmodal();
            }
        }
    })
})

Cypress.Commands.add('WebRegression_CoachingForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Web View
        if(arr.includes('web')){ 
            cy.LeadFormCommonData()
            cy.log('Enter course');
            cy.get('#leadcourse_tag_id').clear().type(data.course1)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            //web view-> Distant Coaching Btn as Yes
            if(arr.includes('DistantLearning-Yes')){  
                cy.log('Click on Distant Coaching as YES');    
                cy.get('span.off').click()  
            }        
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            //web view-> Attend Distant Coaching Btn as Yes/No 
            if(arr.includes('AttendCoaching-Yes')){    
                if(arr.includes('VerifyPage')){
                    //Verify coaching form lists
                    cy.VerifyCoachingForm();
                    //Verify coaching form errors
                    cy.VerifyCoachingFormErrors();
                }  
                //Enter values in the form
                cy.MBBSpage2();
            }else if(arr.includes('AttendCoaching-No')){      
                cy.MBBSpage2('No');
            }   
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click();
            cy.ColAppliedpage();    
            
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('Ques')
            }else if(arr.includes('HomePage')){
                cy.OTP_TYmodal('HomePage');
            }else{
                cy.OTP_TYmodal();
            }
        }
    })
})

Cypress.Commands.add('WebRegression_MastersForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Web View
        if(arr.includes('web')){ 
            cy.LeadFormCommonData()
            cy.log('Enter Course');
            cy.get('#leadcourse_tag_id').clear().type(data.course2)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            //web view-> Distant Coaching Btn as Yes
            if(arr.includes('DistantLearning-Yes')){  
                cy.log('Select Distant Learning as YES');    
                cy.get('span.off').click()  
            }        
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            //web view-> Verify Master page values
            if(arr.includes('VerifyPage')){   
                cy.log('Verify Heading');
                cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
                    expect($el).to.contain('CURRENT EDUCATION DETAILS')
                })
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.ml-auto > .btn').then($el => $el.trigger('click')))
                cy.VerifyMasterFormErrors();
                cy.MBApage2('verifyAll')
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.ml-auto > .btn').then($el => $el.trigger('click')))
            }else if(arr.includes('noScheduledExams')){   
                cy.log('Verify Heading');
                cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
                    expect($el).to.contain('CURRENT EDUCATION DETAILS')
                })
                cy.MBApage2('noSchedule')
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.ml-auto > .btn').then($el => $el.trigger('click')))
            }else if(arr.includes('bookedExams')){   
                cy.log('Verify Heading');
                cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
                    expect($el).to.contain('CURRENT EDUCATION DETAILS')
                })
                cy.MBApage2('bookedExams')
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.ml-auto > .btn').then($el => $el.trigger('click')))
            }else{
                cy.MBApage2()
                cy.log('Click on Submit button');
                cy.get('.ml-auto > .btn').click() 
            }   
            cy.VerifyColApplied('noCollege');
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('Ques')
            }else if(arr.includes('HomePage')){
                cy.OTP_TYmodal('HomePage');
            }else{
                cy.OTP_TYmodal();
            }
        }
    })
})

Cypress.Commands.add('WebRegressionSA_EduPreferenceForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Web View
        if(arr.includes('web')){ 
            cy.LeadFormCommonData_SA()
            cy.log('Enter city');
            cy.get('#leadcity').clear().type(data.city)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Enter course');
            cy.get('#leadsa_course_group').clear().type(data.course2)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Enter course-specialization');
            cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper2)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Click on Submit button'); 
            cy.get('.col-md-3 > .btn').click()
            cy.log('Verify Heading');
            cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
                expect($el).to.contain('Educational Prefrences')
            })
            if(arr.includes('VerifyEduPrefPage')){
                //Verify Education preference Page
                cy.log('Click on Submit button');
                cy.get('.ml-auto > .btn').click()
                cy.VerifyEducationPrefSAPage();
                cy.SApage2_EduPreference('GRE')
            }
            //English Proficiency Section
            if(arr.includes('EnglishProficiency-Yes')){
                cy.log('Verify EnglishProficiency as YES');
                cy.waitUntil(() => cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').then($el => $el.trigger('click')))
                cy.log('Select option-1');
                cy.get(':nth-child(4) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter option-1 value');
                cy.get(':nth-child(4) > .material-form-field > .d-flex > div > ').type(data.ielts)
            }else if(arr.includes('EnglishProficiency-No')){
                cy.log('Verify EnglishProficiency as NO');
                cy.waitUntil(() => cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))
            }else if(arr.includes('EnglishProficiency-Booked')){
                cy.log('Verify EnglishProficiency as BOOKED');
                cy.waitUntil(() => cy.get(':nth-child(3) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(3) > label').then($el => $el.trigger('click')))
                cy.log('Select option-1');
                cy.get(':nth-child(4) > .material-form-field > .d-flex > .mb-0 > span').click();
                cy.log('Enter option-1 value');
                cy.get(':nth-child(4) > .material-form-field > .d-flex > div > ').click();
                cy.log('Select month');
                cy.get('.react-datepicker__month-11').click();
            }
            //Entrance Exam Section
            if(arr.includes('EntranceExam-Yes')){
                cy.log('Verify EntranceExam as YES');
                cy.waitUntil(() => cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(1) > label').then($el => $el.trigger('click')))
                cy.log('Select option-1');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter option-1 value');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').clear().type(data.GRE)
                if(!arr.includes('EnglishProficiency-No')){
                    cy.log('Verify Academics as YES');
                    cy.get(':nth-child(10) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
                }
            }else if(arr.includes('EntranceExam-No')){
                cy.log('Verify EntranceExam as NO');
                cy.waitUntil(() => cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))
                if(!arr.includes('EnglishProficiency-No')){
                    cy.log('Verify Academics as YES');
                    cy.get(':nth-child(10) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
                }
            }else if(arr.includes('EntranceExam-Booked')){
                cy.log('Verify EntranceExam as BOOKED');
                cy.waitUntil(() => cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(3) > label').then($el => $el.trigger('click')))
                cy.log('Select option-1');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter option-1 value');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').click();
                cy.log('Select month');
                cy.get('.react-datepicker__month-11').click();
                if(!arr.includes('EnglishProficiency-No')){
                    cy.log('Verify Academics as YES');
                    cy.get(':nth-child(10) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
                }
            }
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click()
            cy.SApage_undergrad()
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click()
            cy.VerifyColApplied('noCollege');
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('Ques')
            }else if(arr.includes('HomePage')){
                cy.OTP_TYmodal('HomePage');
            }else{
                cy.OTP_TYmodal();
            }
        }
    })
})

Cypress.Commands.add('WebRegressionSA_PastEdu_UGForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Web View
        if(arr.includes('web')){ 
            cy.LeadFormCommonData_SA()
            cy.log('Enter city');
            cy.get('#leadcity').clear().type(data.city)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Enter Course');
            cy.get('#leadsa_course_group').clear().type(data.course2)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Enter Course-specialization');
            cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper2)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
                expect($el).to.contain('Educational Prefrences')
            })
            cy.log('Verify EnglishProficiency as NO');
            cy.waitUntil(() => cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))
            cy.log('Verify EntranceExam as NO');
            cy.waitUntil(() => cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))                
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click()
            if(arr.includes('VerifyPage')){
                cy.VerifyPastEduUGPage()
            }
            if(arr.includes('Passport-No')){
                cy.SApage_undergrad('No')
            }else{
                cy.SApage_undergrad('Yes')
            }
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click()
            cy.VerifyColApplied('noCollege');
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('Ques')
            }else if(arr.includes('HomePage')){
                cy.OTP_TYmodal('HomePage');
            }else{
                cy.OTP_TYmodal();
            }
        }
    })
})

Cypress.Commands.add('WebRegressionSA_PastEdu_HighSchoolForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Web View
        if(arr.includes('web')){ 
            cy.LeadFormCommonData_SA()
            cy.log('Enter city');
            cy.get('#leadcity').clear().type(data.city)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Enter Course');
            cy.get('#leadsa_course_group').clear().type(data.course5)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Enter Course-Specialization');
            cy.get('#leadsa_course_mapper_id').clear().type(data.courseMapper3)
            cy.log('Select option from dropdown');
            cy.get('ul.custom-search-submenu').invoke('show').click()
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
                expect($el).to.contain('Educational Prefrences')
            })
            cy.log('Verify EnglishProficiency as NO');
            cy.waitUntil(() => cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))
            cy.log('Verify EntranceExam as NO');
            cy.waitUntil(() => cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))                
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click()
            if(arr.includes('VerifyPage')){
                cy.VerifyPastEduHighSchoolPage()
            }
            if(arr.includes('Passport-No')){
                cy.SApage_highschool('No')
            }else{
                cy.SApage_highschool('Yes')
            }
            cy.log('Click on Submit button');
            cy.get('.ml-auto > .btn').click()
            cy.VerifyColApplied('noCollege');
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('Ques')
            }else if(arr.includes('HomePage')){
                cy.OTP_TYmodal('HomePage');
            }else{
                cy.OTP_TYmodal();
            }
        }
    })
})

Cypress.Commands.add('MobRegression_CoachingForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Mob View
        if(arr.includes('mob')){ 
            cy.LeadFormCommonDataMob()
            cy.log('Click on course');
            cy.get('#leadcourse_tag_id').click()
            cy.log('Enter course');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course1)
            cy.log('Select option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            //mob view-> Distant Coaching Btn as Yes
            if(arr.includes('DistantLearning-Yes')){ 
                cy.log('DistantLearning as YES');       
                cy.get('.slider').click()
            }        
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            //mob view-> Attend Distant Coaching Btn as Yes/No 
            if(arr.includes('AttendCoaching-Yes')){    
                if(arr.includes('VerifyPage')){
                    //Verify coaching form lists
                    cy.VerifyCoachingFormMob();
                    //Verify coaching form errors
                    cy.log('Click on Submit button');
                    cy.get('.btn-primary.btn-block.py-2.mb-2').click();
                    cy.VerifyCoachingFormErrorsMob();
                }  
                //Enter values in the form
                cy.MBBSpage2Mob()
            }else if(arr.includes('AttendCoaching-No')){      
                cy.MBBSpage2Mob('No')
            }   
            cy.log('Click on Submit button');
            cy.get('.btn-primary.btn-block.py-2.mb-2').click();
            cy.ColAppliedpageMob('noCollege')
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('QuesMob')
            }else if(arr.includes('loggedIN')){
                cy.ThankYou('mobile')
                cy.log('Close the thank you modal');
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            }else{
                cy.OTP_TYmodal('mob')
            }
        }
    })
})

Cypress.Commands.add('MobRegression_CollegePriorityForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //mob View
        if(arr.includes('mob')){ 
            cy.LeadFormCommonDataMob()
            cy.log('Click Course');
            cy.get('#leadcourse_tag_id').click()
            cy.log('Enter Course');
            cy.get('.form-control.search-field.border-0').type(data.course1)
            cy.log('Select option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            //mob view-> Distant Coaching Btn as Yes
            if(arr.includes('DistantLearning-Yes')){  
                cy.log('DistantLearning as YES');      
                cy.get('.slider').click()
            }  
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()
            //Coaching leadform as NO
            cy.MBBSpage2Mob('No')
            cy.log('Click on Submit button');
            cy.get('.btn-primary.btn-block.py-2.mb-2').click();
            //Verify College Priority form
            if(arr.includes('VerifyPage')){
                cy.VerifyColPriorityFormMob();
                cy.VerifyColPriorityFormErrorsMob();
            }
            //Different testcases
            if(arr.includes('noCollege')){
                cy.log('in no college part');
                cy.ColAppliedpageMob('noCollege')
            }else if(arr.includes('statInterested')){
                cy.log('in statInterested part');
                cy.ColAppliedpageMob('interestedStatus');
            }else if(arr.includes('statAwaitingResult')){
                cy.log('in statAwaitingResult part');
                cy.ColAppliedpageMob('awaitingResult');
            }else if(arr.includes('addCollege')){
                //Add a row
                cy.addRowsColAppliedPageMob();
                //Add data in the rows
                cy.MultipleColAppliedMob('1');
                cy.MultipleColAppliedMob('2');
                cy.MultipleColAppliedMob('3');
                cy.MultipleColAppliedMob('4');
                cy.MultipleColAppliedMob('5');
                //Change priorities of college
                cy.log('Verify Priority-Down is disabled');
                cy.get('.icon.icon-danger.disabled').should('exist');
                cy.log('Verify Priority-Up is disabled');
                cy.get('.icon.icon-success.disabled').should('exist');
                cy.log('Click on Priority-Up button');
                cy.get(':nth-child(5) > .left-bar > .mb-2 > svg').click()
                cy.log('Click on Priority-down button');
                cy.get(':nth-child(3) > .left-bar > .mt-2 > svg').click()
                cy.log('Verify college on row-3');
                cy.get('#college_name-2-label').should('have.value','IIT Bombay - Indian Institute of Technology, Mumbai, India')
                cy.log('Click on Study-Start button');
                cy.get('#leadstudy_start').click()
                cy.log('Enter Study-Start year');
                cy.get('.col > :nth-child(1) > .form-control').type(data.study_start)
                cy.log('Select option from dropdown');
                cy.get('.custom-search-submenu-option').click()
                cy.log('Click on Submit button');
                cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
            }else if(arr.includes('applicationStat')){
                cy.addRowsColAppliedPageMob();
                cy.addColNameAppliedPageMob();
                cy.log('Click on Study-Start button');
                cy.get('#leadstudy_start').click()
                cy.log('Enter Study-Start year');
                cy.get('.col > :nth-child(1) > .form-control').click().type(data.study_start)
                cy.log('Select option from dropdown');
                cy.get('.custom-search-submenu-option').click()
                cy.log('Click on Submit button');
                cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
                cy.VerifyColPriorityFormErrorsMob2();
                cy.deleteRowAppliedPage();
                cy.log('Click on Submit button');
                cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
            }else{
                cy.ColAppliedpageMob('noCollege')
            }
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('QuesMob')
            }else if(arr.includes('loggedIN')){
                cy.ThankYou('mobile')
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            }else{
                cy.OTP_TYmodal('mob')
            }
        }
    })
})

Cypress.Commands.add('MobRegression_MastersForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Mob View
        if(arr.includes('mob')){ 
            cy.LeadFormCommonDataMob()
            cy.log('Click Course');
            cy.get('#leadcourse_tag_id').click()
            cy.log('Enter Course');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course2)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            //mob view-> Distant Coaching Btn as Yes
            if(arr.includes('DistantLearning-Yes')){    
                cy.log('DistantLearning as YES');  
                cy.get('.slider').click()
            }        
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .btn').click()

            //mob view-> Verify Master page values
            cy.log('Verify Heading');

            if(arr.includes('VerifyPage')){   
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
                cy.MBApage2Mob('verifyAll')
                cy.MBApage2Mob()
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            }else if(arr.includes('noScheduledExams')){   
                cy.MBApage2Mob('noSchedule')
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            }else if(arr.includes('bookedExams')){   
                cy.MBApage2Mob('bookedExams')
                cy.log('Click on Submit button');
                cy.waitUntil(() => cy.get('.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            }else{
                cy.MBApage2Mob()
                cy.log('Click on Submit button');
                cy.get('.btn-primary.btn-block.py-2.mb-2').click();
            }   
            cy.ColAppliedpageMob('noCollege')
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('QuesMob')
            }else if(arr.includes('loggedIN')){
                cy.ThankYou('mobile')
                cy.log('Close the Thank You Modal');
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            }else{
                cy.OTP_TYmodal('mob')
            }
        }
    })
})

Cypress.Commands.add('MobRegressionSA_EduPreferenceForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Mob View
        if(arr.includes('mob')){ 
            cy.LeadFormCommonDataMob()
            cy.log('Click Course');
            cy.get('#leadsa_course_group').click()
            cy.log('Enter Course');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course2)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click Course-specialization');
            cy.get('#leadsa_course_mapper_id').click()
            cy.log('Click Course-specialization');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper2)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click on Submit Button');
            cy.get('.col-md-3 > .jsx-197552324').click()
            cy.log('Verify Heading');
            if(arr.includes('VerifyEduPrefPage')){
                //Verify Education preference Page
                cy.log('Click on Submit Button');
                cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
                // cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
                cy.VerifyEducationPrefSAPageMob();
                cy.log('Click on NO Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(1).click();
                cy.log('Click on NO Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(4).click();
            }
            //English Proficiency Section
            if(arr.includes('EnglishProficiency-Yes')){
                cy.log('Click on YES Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(0).click()
                cy.log('Select option-1');
                cy.get('.mb-0.min-w-75px').eq(0).click()
                cy.log('Enter option-1 value');
                cy.get('.form-control.equi-padded.px-1.py-2').eq(0).type(data.ielts)
            }else if(arr.includes('EnglishProficiency-No')){
                cy.log('Click on NO Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(1).click()
            }else if(arr.includes('EnglishProficiency-Booked')){
                cy.log('Click on BOOKED Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(2).click()
                cy.log('Select option-1');
                cy.get('.mb-0.min-w-75px').eq(0).click()
                cy.log('Enter option-1');
                cy.get('.react-datepicker__input-container > .form-control').eq(0).click()
                cy.log('Select month');
                cy.get('.react-datepicker__month-11').click();
            }
            //Entrance Exam Section
            if(arr.includes('EntranceExam-Yes')){
                cy.log('Click on YES Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(3).click()
                cy.log('Select option-1');
                cy.get('.mb-0.min-w-75px').eq(4).click()
                cy.log('Enter option-1 value');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').type(data.GRE)
                if(!arr.includes('EnglishProficiency-No')){
                    cy.log('Academics- YES');
                    cy.get(':nth-child(10) > .material-form-field > :nth-child(2) > label').click()
                }
            }else if(arr.includes('EntranceExam-No')){
                cy.log('Click on NO Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(4).click()
                if(!arr.includes('EnglishProficiency-No')){
                    cy.log('Academics- YES');
                    cy.get(':nth-child(10) > .material-form-field > :nth-child(2) > label').click()
                }
            }else if(arr.includes('EntranceExam-Booked')){
                cy.log('Click on BOOKED Button');
                cy.get('.pb-1.md-radio.md-radio-inline').eq(5).click()
                cy.log('Select option-1');
                cy.get('.mb-0.min-w-75px').eq(4).click()
                cy.log('Enter option-1 value');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > div > :nth-child(1) > .react-datepicker__input-container > .form-control').click()
                cy.log('Select month');
                cy.get('.react-datepicker__month-11').click();
                if(!arr.includes('EnglishProficiency-No')){
                    cy.log('Academics- YES');
                    cy.get(':nth-child(10) > .material-form-field > :nth-child(2) > label').click()
                }
            }
            cy.log('Click on Submit button');
            cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
            cy.SApage_undergradMob()
            cy.log('Click on Submit button');
            cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
            cy.ColAppliedpageMob('noCollege')
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('QuesMob')
            }else if(arr.includes('loggedIN')){
                cy.ThankYou('mobile')
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            }else{
                cy.OTP_TYmodal('mob')
            }
        }
    })
})

Cypress.Commands.add('MobRegressionSA_PastEdu_UGForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Mob View
        if(arr.includes('mob')){ 
            cy.LeadFormCommonDataMob()
            cy.log('Click Course');
            cy.get('#leadsa_course_group').click()
            cy.log('Enter Course');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course2)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Enter Course-specialization');
            cy.get('#leadsa_course_mapper_id').click()
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper2)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click on Submit button');
            cy.get('.col-md-3 > .jsx-197552324').click()
            
            //Different page
            cy.log('Verify Heading');
            cy.log('Verify EnglishProficiency as NO');
            cy.get('.pb-1.md-radio.md-radio-inline').eq(1).click()
            cy.log('Verify EntranceExam as NO');
            cy.get('.pb-1.md-radio.md-radio-inline').eq(4).click()
            cy.log('Click on Submit button');
            cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            
            //Different page
            cy.log('Verify Heading');
            if(arr.includes('VerifyPage')){
                cy.wait(1000)
                cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
                cy.wait(1000)
                cy.VerifyPastEduUGPageMob()
            }
            if(arr.includes('Passport-No')){
                cy.SApage_undergradMob('No')
            }else{
                cy.SApage_undergradMob('Yes')
            }
            cy.log('Click on Submit button');
            cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            cy.ColAppliedpageMob('noCollege')
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('QuesMob')
            }else if(arr.includes('loggedIN')){
                cy.ThankYou('mobile')
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            }else{
                cy.OTP_TYmodal('mob')
            }
        }
    })
})

Cypress.Commands.add('MobRegressionSA_PastEdu_HighSchoolForm', (param)=>{
    cy.fixture('testData').then((data)=>{
        const arr = param.split("_");
        //Mob View
        if(arr.includes('mob')){ 
            cy.LeadFormCommonDataMob()
            cy.log('Click on course');
            cy.get('#leadsa_course_group').click()
            cy.log('Enter course');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.course5)
            cy.log('Select option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click on course-specialization');
            cy.get('#leadsa_course_mapper_id').click()
            cy.log('Enter course-specialization');
            cy.get('.py-2 > .col > :nth-child(1) > .form-control').type(data.courseMapper3)
            cy.log('Select option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click on submit button');
            cy.get('.col-md-3 > .jsx-197552324').click()

            //Different page
            cy.log('Verify Heading');
            cy.log('Verify EnglishProficiency as NO');
            cy.get('.pb-1.md-radio.md-radio-inline').eq(1).click()
            cy.log('Verify EntranceExam as NO');
            cy.get('.pb-1.md-radio.md-radio-inline').eq(4).click()
            cy.log('Click on Submit button');
            cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            
            //Different page
            cy.log('Verify Heading');
            if(arr.includes('VerifyPage')){
                cy.VerifyPastEduHighSchoolPageMob()
            }
            if(arr.includes('Passport-No')){
                cy.SApage_highschoolMob('No')
            }else{
                cy.SApage_highschoolMob('Yes')
            }
            cy.log('Click on Submit button');
            cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
            cy.ColAppliedpageMob('noCollege')
        }
        if(Cypress.env("varEnv")!='prod'){
            if(arr[2]=='QUES'){
                cy.OTP_TYmodal('QuesMob')
            }else if(arr.includes('loggedIN')){
                cy.ThankYou('mobile')
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            }else{
                cy.OTP_TYmodal('mob')
            }
        }
    })
})

Cypress.Commands.add('VerifyColApplied', (page) =>{
    cy.fixture('testData').then((data)=>{
        //0 Colleges in the applied college list
        if(page=='noCollege'){
            cy.get('div.right-bar > span > svg > path:nth-child(2)').invoke('show').click({force:true})
            cy.get('#leadstudy_start').click().type(data.study_start)
            cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
            cy.get('.ml-auto > .btn').click()
        }
        //Status as Interested.
        else if(page=='interestedStatus'){
            cy.wait(1000);
            cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.waitUntil(() => cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni))
            cy.wait(1000);
            cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.get('[data-position="1"]').invoke('show').click()
            cy.get('#status-0-label').click()
            cy.get('ul.custom-search-dropdown').contains('Interested').invoke('show').click()
            cy.get('#leadstudy_start').click().type(data.study_start)
            cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
            cy.get('.ml-auto > .btn').click()
        }
        //Status as Awaiting Result.
        else if(page=='awaitingResult'){
            cy.wait(1000);
            cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.waitUntil(() => cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni))
            cy.wait(1000);
            cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.get('[data-position="1"]').invoke('show').click()
            cy.get('#status-0-label').click()
            cy.get('ul.custom-search-dropdown').contains('Awaiting Result').invoke('show').click()
            cy.get('.react-datepicker__input-container > .form-control').click()
            cy.get('.react-datepicker__month-container').should('exist')
            cy.get('.react-datepicker__month-11').invoke('show').click()
            cy.get('#leadstudy_start').click().type(data.study_start)
            cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
            cy.get('.ml-auto > .btn').click()
        }
        //Only one college in the applied college list
        else{
            cy.wait(1000);
            cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.waitUntil(() => cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni))
            cy.wait(1000);
            cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            if(page=='SA'){
                cy.get('[data-position="1"]').invoke('show').click()
            }else{
                cy.get('[data-position="1"]').invoke('show').click()
            }
            cy.get('#status-0-label').click()
            cy.get('ul.custom-search-dropdown').should(($li) => {
                expect($li).to.contain('Applied')
            })
            cy.get('ul.custom-search-dropdown').should(($li) => {
                expect($li).to.contain('Interested')
            })
            cy.get('ul.custom-search-dropdown').should(($li) => {
                expect($li).to.contain('Awaiting Result')
            })
            cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
            cy.get('.react-datepicker__input-container > .form-control').click()
            cy.get('.react-datepicker__month-container').should('exist')
            cy.get('.react-datepicker__month-11').invoke('show').click()
            cy.get('#leadstudy_start').click().type(data.study_start)
            cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
            cy.get('.ml-auto > .btn').click()
        }
    })
})

Cypress.Commands.add('MultipleColApplied', (colNum) =>{
    cy.fixture('testData').then((data)=>{
        if(colNum=='1'){
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Type college name');
            cy.waitUntil(() => cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni))
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Select college name');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-0-label').click()
            cy.log('Select station option');
            cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
            cy.log('Click on applied month option');
            cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()        
        }
        if(colNum=='2'){
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Type college name');
            cy.waitUntil(() => cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni2))
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Select college name');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-1-label').click()
            cy.log('Select station option');
            cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
            cy.log('Click on applied month option');
            cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        }
        if(colNum=='3'){
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Type college name');
            cy.waitUntil(() => cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni3))
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Select college name');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-2-label').click()
            cy.log('Select station option');
            cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
            cy.log('Click on applied month option');
            cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        }
        if(colNum=='4'){
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Type college name');
            cy.waitUntil(() => cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni4))
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Select college name');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-3-label').click()
            cy.log('Select station option');
            cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
            cy.log('Click on applied month option');
            cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        }
        if(colNum=='5'){
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Type college name');
            cy.waitUntil(() => cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni5))
            cy.wait(1000);
            cy.log('Click on add college name');
            cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
            cy.wait(1000);
            cy.log('Select college name');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-4-label').click()
            cy.log('Select station option');
            cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
            cy.log('Click on applied month option');
            cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click()
        }
        cy.log('Select month');
        cy.get('.react-datepicker__month-11').invoke('show').click()
    })
})

Cypress.Commands.add('MultipleColAppliedMob', (colNum) =>{
    cy.fixture('testData').then((data)=>{
        if(colNum=='1'){
            cy.log('Click on add college name');
            cy.get('#college_name-0-label').click()
            cy.log('Type college name');
            cy.get('.search-input').clear().type(data.grad_uni)
            cy.log('Select college name option');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-0-label').click()
            cy.log('Select Option');
            cy.get('.custom-search-submenu-option').contains('Interested').invoke('show').click()
        }
        if(colNum=='2'){
            cy.log('Click on add college name');
            cy.get('#college_name-1-label').click()
            cy.log('Type college name');
            cy.get('.search-input').clear().type(data.grad_uni2)
            cy.log('Select college name option');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-1-label').click()
            cy.log('Select Option');
            cy.get('.custom-search-submenu-option').contains('Awaiting Result').invoke('show').click()
            cy.log('Click on applied month');
            cy.get(':nth-child(2) > .flex-wrap >  > :nth-child(1) > .react-datepicker__input-container > .form-control').click()
            cy.log('Select month');
            cy.get('.react-datepicker__month-11').invoke('show').click()
        }
        if(colNum=='3'){
            cy.log('Click on add college name');
            cy.get('#college_name-2-label').click()
            cy.log('Type college name');
            cy.get('.search-input').clear().type(data.grad_uni3)
            cy.log('Select college name option');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-2-label').click()
            cy.log('Select Option');
            cy.get('.custom-search-submenu-option').contains('Applied').invoke('show').click()
            cy.log('Click on applied month');
            cy.get(':nth-child(3) > .flex-wrap >  > :nth-child(1) > .react-datepicker__input-container > .form-control').click()
            cy.log('Select month');
            cy.get('.react-datepicker__month-11').invoke('show').click()
        }
        if(colNum=='4'){
            cy.log('Click on add college name');
            cy.get('#college_name-3-label').click()
            cy.log('Type college name');
            cy.get('.search-input').clear().type(data.grad_uni4)
            cy.log('Select college name option');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-3-label').click()
            cy.log('Select Option');
            cy.get('.custom-search-submenu-option').contains('Applied').invoke('show').click()
            cy.log('Click on applied month');
            cy.get(':nth-child(4) > .flex-wrap >  > :nth-child(1) > .react-datepicker__input-container > .form-control').click()
            cy.log('Select month');
            cy.get('.react-datepicker__month-11').invoke('show').click()
        }
        if(colNum=='5'){
            cy.log('Click on add college name');
            cy.get('#college_name-4-label').click()
            cy.log('Type college name');
            cy.get('.search-input').clear().type(data.grad_uni5)
            cy.log('Select college name option');
            cy.get('[data-position="1"]').invoke('show').click()
            cy.log('Click on status option');
            cy.get('#status-4-label').click()
            cy.log('Select Option');
            cy.get('.custom-search-submenu-option').contains('Interested').invoke('show').click()
        }    
    })
})

Cypress.Commands.add('addRowsColAppliedPage',()=>{
    cy.log('Verify add a new row exists');
    cy.get(':nth-child(2) > .align-items-baseline > .flex-fill').should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify add a new row exists');
    cy.get(':nth-child(3) > .align-items-baseline > .flex-fill').should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify add a new row exists');
    cy.get(':nth-child(4) > .align-items-baseline > .flex-fill').should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify add a new row exists');
    cy.get(':nth-child(5) > .align-items-baseline > .flex-fill').should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify add a new row exists');
    cy.get(':nth-child(6) > .align-items-baseline > .flex-fill').should('exist');
    cy.log('Verify add a new row does not exist');
    cy.get('.text-right > .btn').should('not.exist');
})

Cypress.Commands.add('addRowsColAppliedPageMob',()=>{
    cy.log('Verify new row exists');
    cy.get('.input-row').eq(0).should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify new row exists');
    cy.get('.input-row').eq(1).should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify new row exists');
    cy.get('.input-row').eq(2).should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify new row exists');
    cy.get('.input-row').eq(3).should('exist');
    cy.log('Click on Add more button');
    cy.get('.text-right > .btn').contains('Add More').click();
    cy.log('Verify new row exists');
    cy.get('.input-row').eq(4).should('exist');
    cy.log('Verify add a new row button does not exists');
    cy.get('.text-right > .btn').should('not.exist');
})

Cypress.Commands.add('addColNameAppliedPage',()=>{
    cy.fixture('testData').then((data)=>{
        cy.wait(1000);
        cy.log('Click on add college name');
        cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Type college name');
        cy.waitUntil(() => cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni))
        cy.wait(1000);
        cy.log('Click on add college name');
        cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Select college option');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000);

        cy.log('Click on add college name');
        cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Type college name');
        cy.waitUntil(() => cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni2))
        cy.wait(1000);
        cy.log('Click on add college name');
        cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Select college option');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000);
        
        cy.log('Click on add college name');
        cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Type college name');
        cy.waitUntil(() => cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni3))
        cy.wait(1000);
        cy.log('Click on add college name');
        cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Select college option');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000);

        cy.log('Click on add college name');
        cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Type college name');
        cy.waitUntil(() => cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni4))
        cy.wait(1000);
        cy.log('Click on add college name');
        cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Select college option');
        cy.get('[data-position="1"]').contains('Maharaja Surajmal Institute of Technology - [MSIT], New Delhi, India').invoke('show').click()
        cy.wait(1000);

        cy.log('Click on add college name');
        cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Type college name');
        cy.waitUntil(() => cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').type(data.grad_uni5))
        cy.wait(1000);
        cy.log('Click on add college name');
        cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .material-form-field-wrapper > .position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Select college option');
        cy.get('[data-position="1"]').invoke('show').click()
    })
})

Cypress.Commands.add('addColNameAppliedPageMob',()=>{
    cy.fixture('testData').then((data)=>{
        cy.log('Click on adding college name');
        cy.get('#college_name-0-label').click()
        cy.wait(1000) 
        cy.log('Type college name');
        cy.get('.search-input').clear().type(data.grad_uni)
        cy.wait(1000)
        cy.log('Select option from the list');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000)
        cy.log('Click on adding college name');
        cy.get('#college_name-1-label').click()
        cy.wait(1000)
        cy.log('Type college name');
        cy.get('.search-input').clear().type(data.grad_uni2)
        cy.wait(1000)
        cy.log('Select option from the list');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000)
        cy.log('Click on adding college name');
        cy.get('#college_name-2-label').click()
        cy.wait(1000)
        cy.log('Type college name');
        cy.get('.search-input').clear().type(data.grad_uni3)
        cy.wait(1000)
        cy.log('Select option from the list');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000)
        cy.log('Click on adding college name');
        cy.get('#college_name-3-label').click()
        cy.wait(1000)
        cy.log('Type college name');
        cy.get('.search-input').clear().type(data.grad_uni4)
        cy.wait(1000)
        cy.log('Select option from the list');
        cy.get('[data-position="1"]').contains('Maharaja Surajmal Institute of Technology - [MSIT], New Delhi, India').invoke('show').click()
        cy.wait(1000)
        cy.log('Click on adding college name');
        cy.get('#college_name-4-label').click()
        cy.wait(1000)
        cy.log('Type college name');
        cy.get('.search-input').clear().type(data.grad_uni5)
        cy.wait(1000)
        cy.log('Select option from the list');
        cy.get('[data-position="1"]').invoke('show').click()
        cy.wait(1000)
    })
})

Cypress.Commands.add('deleteRowAppliedPage',()=>{
    cy.fixture('testData').then((data)=>{
        cy.log('Delete a row');
        cy.get('.icon.icon-danger.pointer').eq(0).click({force:true})
        cy.log('Delete a row');
        cy.get('.icon.icon-danger.pointer').eq(0).click({force:true})
        cy.log('Delete a row');
        cy.get('.icon.icon-danger.pointer').eq(0).click({force:true})
        cy.log('Delete a row');
        cy.get('.icon.icon-danger.pointer').eq(0).click({force:true})
        cy.log('Delete a row');
        cy.get('.icon.icon-danger.pointer').eq(0).click({force:true})
    })
})

Cypress.Commands.add('VerifyCoachingForm', () =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Click on Yes');
        cy.waitUntil(() => cy.get('.material-form-field > :nth-child(1) > label').then($el => $el.trigger('click')))
        cy.log('Click on coaching start option');
        cy.get('#leadcoaching_start').click()
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('Immediately')
        })
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('Within a month')
        })
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('Not sure, Looking for options')
        })
        cy.get(':nth-child(4) > .col').click();
        cy.log('Click on coaching mode option');
        cy.get('#leadcoaching_mode').click()
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('Live Online Sessions')
        })
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('Offline Sessions')
        })
        cy.get(':nth-child(5) > .col').click();
        cy.log('Click on coaching sub city option');
        cy.get('#leadcoaching_subcity').click();
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('North Delhi')
        })
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('South Delhi')
        })
        cy.log('Verify the option');
        cy.get('ul.custom-search-dropdown').should(($li) => {
            expect($li).to.contain('East Delhi')
        })
    })        
})

Cypress.Commands.add('VerifyCoachingFormMob', () =>{
    cy.fixture('testData').then((data)=>{
        cy.waitUntil(() => cy.get('.material-form-field > :nth-child(1) > label').then($el => $el.trigger('click')))
        cy.get(':nth-child(2) > label').click();
        //Verify starting-list
        cy.log('Click on coaching start option');
        cy.get('#leadcoaching_start').click()
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('Immediately')
        })
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('Within a month')
        })
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('Not sure, Looking for options')
        })
        cy.get('.back-arrow').click();
        
        //Verify mode-list
        cy.log('Click on coaching start option');
        cy.get('#leadcoaching_mode').click()
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('Live Online Sessions')
        })
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('Offline Sessions')
        })
        cy.get('.back-arrow').click();

        //Verify SubCity-List
        cy.log('Click on coaching start option');
        cy.get('#leadcoaching_subcity').click();
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('North Delhi')
        })
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('South Delhi')
        })
        cy.log('Verify the option');
        cy.get('.custom-search-submenu-option').should(($li) => {
            expect($li).to.contain('East Delhi')
        })
        cy.get('.back-arrow').click();
    })        
})

Cypress.Commands.add('VerifyCoachingFormErrors', () =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Click on submit button');
        cy.get('.material-form-field > :nth-child(1) > label').click();
        cy.NegativeValidationMBBSPage();
    })        
})

Cypress.Commands.add('VerifyCoachingFormErrorsMob', () =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Verify the error');
        cy.get(':nth-child(3) > .invalid-feedback').should(($li) => {
            expect($li).to.contain('Select a valid Option')
        })
        cy.log('Verify the error');
        cy.get(':nth-child(4) > .invalid-feedback').should(($li) => {
            expect($li).to.contain('Select a valid Option')
        })
        cy.log('Verify the error');
        cy.get(':nth-child(6) > .invalid-feedback').should(($li) => {
            expect($li).to.contain('Select a valid Location')
        })
    })        
})

Cypress.Commands.add('VerifyColPriorityForm', () =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Verify the heading');
        cy.waitUntil(() => cy.get('form > :nth-child(1) > .text-uppercase').then($el => $el.val(data.page_heading_5)))
        cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.log('click on start study option');
        cy.get('#leadstudy_start').click()
        cy.get('.icon.icon-primary.rotate-180').click()
    })     
})

Cypress.Commands.add('VerifyColPriorityFormMob', () =>{
    cy.fixture('testData').then((data)=>{
            cy.get('#college_name-0-label').click()
            cy.get('.search-input').clear().type(data.grad_uni)
            cy.get('[data-position="1"]').invoke('show').click()
            cy.get('#status-0-label').click()
            cy.log('Verify option');
            cy.get('.custom-search-submenu-option').eq(0).should(($el) => {
                expect($el).to.contain('Applied')
            })
            cy.log('Verify option');
            cy.get('.custom-search-submenu-option').eq(1).should(($el) => {
                expect($el).to.contain('Interested')
            })
            cy.log('Verify option');
            cy.get('.custom-search-submenu-option').eq(2).should(($el) => {
                expect($el).to.contain('Awaiting Result')
            })
            cy.get('.icon.icon-gray').click();
    })        
})

Cypress.Commands.add('VerifyColPriorityFormErrors', () =>{
    cy.fixture('testData').then((data)=>{
        cy.get('.ml-auto > .btn').click()
        cy.get('.material-form-error > ').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('VerifyColPriorityFormErrorsMob', () =>{
    cy.fixture('testData').then((data)=>{
        cy.get('.btn-primary.btn-block.py-2.mb-2').click();
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(0).should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(1).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.text-danger.mt-1.text-sm').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('VerifyColPriorityFormErrors2', () =>{
    cy.fixture('testData').then((data)=>{
        cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .col-6 > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .col-6 > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .col-6 > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .col-6 > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get(':nth-child(2) > .align-items-baseline > .flex-fill > .col-6 > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get(':nth-child(3) > .align-items-baseline > .flex-fill > .col-md-4 > .jsx-3678689765').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(4) > .align-items-baseline > .flex-fill > .col-md-4 > .jsx-3678689765').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(5) > .align-items-baseline > .flex-fill > .col-md-4 > .jsx-3678689765').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(6) > .align-items-baseline > .flex-fill > .col-md-4 > .jsx-3678689765').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('VerifyColPriorityFormErrorsMob2', () =>{
    cy.fixture('testData').then((data)=>{
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(0).should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(1).should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(2).should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(3).should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(4).should(($el) => {
            expect($el).to.contain('Select a valid option')
        })
        cy.get('.text-danger.mt-1.text-sm').eq(0).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.text-danger.mt-1.text-sm').eq(1).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.text-danger.mt-1.text-sm').eq(2).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.text-danger.mt-1.text-sm').eq(3).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.text-danger.mt-1.text-sm').eq(4).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('VerifyMasterFormErrors', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.get('.material-form-error > .jsx-964466918').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.jsx-3020513512.material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Please Select at least one option')
        })
        //Validate Entrance Exams
        cy.get(':nth-child(7) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(7) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 300')
        })
        cy.get(':nth-child(7) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(8) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 800')
        })
        cy.get(':nth-child(8) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 74')
        })
        cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(10) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 200 and 800')
        })
        cy.get(':nth-child(10) > .material-form-field > .d-flex > .mb-0 > span').click()
    })        
})

Cypress.Commands.add('VerifyEducationPrefSAPage', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.get(':nth-child(3) > .col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Please Select at least one option')
        })
        cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Please Select at least one option')
        })        
        //Validate Education Preference Page
            //English Proficiency section
                //Yes Button
        cy.get(':nth-child(4) > .material-form-field > .d-flex > .mb-0 > span').click();
        cy.get(':nth-child(1) > :nth-child(4) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 9')
        })
        cy.get(':nth-child(5) > .material-form-field > .d-flex > .mb-0 > span').click();
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 120')
        })
        cy.get(':nth-child(6) > .material-form-field > .d-flex > .mb-0 > span').click();
        cy.get(':nth-child(6) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 10 and 90')
        })
            //No Button
        cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(2) > label').click(); 
            //Booked Button
        cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(3) > label').click();
        cy.get(':nth-child(4) > .material-form-field > .d-flex > .mb-0 > span').click();
        cy.get(':nth-child(5) > .material-form-field > .d-flex > .mb-0 > span').click();
        cy.get(':nth-child(6) > .material-form-field > .d-flex > .mb-0 > span').click();
        cy.get(':nth-child(1) > :nth-child(4) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
        cy.get(':nth-child(6) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })

            //Entrance Exams
            //Yes Button
        cy.get(':nth-child(7) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
        cy.get(':nth-child(8) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 200 and 800')
        })
        cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 260 and 340')
        })
        // No Button
        cy.get(':nth-child(7) > .col-5 > .d-block > .material-form-field > :nth-child(2) > label').click();
        //Booked Button
        cy.get(':nth-child(7) > .col-5 > .d-block > .material-form-field > :nth-child(3) > label').click();
        cy.get(':nth-child(8) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
        cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
    })        
})

Cypress.Commands.add('VerifyEducationPrefSAPageMob', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.get('.mb-1.material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Please Select at least one option')
        })
        cy.get(':nth-child(7) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Please Select at least one option')
        })        
        //Validate Education Preference Page
            //English Proficiency section
                //Yes Button
        cy.get('.pb-1.md-radio.md-radio-inline').eq(0).click()
        cy.get('.mb-0.min-w-75px').eq(0).click()
        cy.get('.mb-0.min-w-75px').eq(1).click()
        cy.get('.mb-0.min-w-75px').eq(2).click()
        cy.get(':nth-child(4) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 9')
        })
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 0 and 120')
        })
        cy.get(':nth-child(6) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 10 and 90')
        })
            //No Button
        cy.get('.pb-1.md-radio.md-radio-inline').eq(2).click()
            //Booked Button
        cy.get('.pb-1.md-radio.md-radio-inline').eq(3).click()
        cy.get('.mb-0.min-w-75px').eq(0).click()
        cy.get('.mb-0.min-w-75px').eq(1).click()
        cy.get('.mb-0.min-w-75px').eq(2).click()
        cy.get(':nth-child(4) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
        cy.get(':nth-child(6) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })

            //Entrance Exams
            //Yes Button
        cy.get('.pb-1.md-radio.md-radio-inline').eq(3).click()
        cy.get('.mb-0.min-w-75px').eq(3).click()
        cy.get('.mb-0.min-w-75px').eq(4).click()
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 200 and 800')
        })
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a score between 260 and 340')
        })
        // No Button
        cy.get('.pb-1.md-radio.md-radio-inline').eq(4).click()
        //Booked Button
        cy.get('.pb-1.md-radio.md-radio-inline').eq(5).click()
        cy.get('.mb-0.min-w-75px').eq(3).click()
        cy.get('.mb-0.min-w-75px').eq(4).click()
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select Date')
        })
    })        
})

Cypress.Commands.add('VerifyPastEduUGPage', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
            expect($el).to.contain('Past Educational Details')
        })
        cy.get('.ml-auto > .btn').click()
        cy.get('.material-form-error > .jsx-964466918').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.jsx-3020513512.material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('VerifyPastEduUGPageMob', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
        cy.get('.invalid-feedback.text-sm.d-block').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(0).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.invalid-feedback.mat-feedback.d-block').eq(1).should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get('.form-control.text-center.p-1').eq(0).clear().type('101')
        cy.get('.invalid-feedback.mat-feedback.range-err.mb-1.d-block').eq(0).should(($el) => {
            expect($el).to.contain('Select a value between 0 and 100')
        })
        // cy.get('.col-md-4 > .align-items-center > div > ').clear().type('50')
        // cy.get('.form-control.text-center.p-1').eq(0).clear().type('-15')
        // cy.get('.invalid-feedback.mat-feedback.range-err.mb-1.d-block').eq(0).should(($el) => {
        //     expect($el).to.contain('Select a value between 0 and 100')
        // })
        // cy.get('.invalid-feedback.mat-feedback.range-err.mb-1.d-block').eq(1).should(($el) => {
        //     expect($el).to.contain('Select a value between 0 and 40')
        // })
        cy.get('.form-control.text-center.p-1').eq(1).clear().type('12')
        cy.get('.invalid-feedback.mat-feedback.range-err.mb-1.d-block').eq(1).should(($el) => {
            expect($el).to.contain('Select a value between 0 and 10')
        })
    })        
})

Cypress.Commands.add('VerifyPastEduHighSchoolPage', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.get('form > :nth-child(1) > .text-uppercase').should(($el) => {
            expect($el).to.contain('Past Educational Details')
        })
        cy.get('.ml-auto > .btn').click()
        //10th Details
        cy.get(':nth-child(3) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(1) > :nth-child(4) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(6) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Enter a valid Name')
        })
        cy.get('#leadtenth_percentage').clear().type('101');
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 1 and 100')
        })
        cy.get('.ml-auto > .btn').click()
        cy.get('#leadtenth_percentage').clear().type('0');
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 1 and 100')
        })

        //12th Details
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(11) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Enter a valid Name')
        })
        cy.get('.compact-range > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Specialization')
        })
        cy.get('#leadtwelfth_percentage').clear().type('102')
        cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 30 and 100')
        })
        cy.get('.ml-auto > .btn').click()
        cy.get('#leadtwelfth_percentage').clear().type('10')
        cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 30 and 100')
        })

        //Passport validation
        cy.get('.col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('VerifyPastEduHighSchoolPageMob', (param) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Verify errors')
        cy.waitUntil(() => cy.get('.btn.btn-primary.btn-block.py-2.mb-2').then($el => $el.trigger('click')))
        //10th Details
        cy.get(':nth-child(3) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(4) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(6) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Enter a valid Name')
        })
        cy.get('#leadtenth_percentage').clear().type('101');
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 1 and 100')
        })
        cy.get('#leadtenth_percentage').clear().type('0');
        cy.get(':nth-child(5) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 1 and 100')
        })

        //12th Details
        cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
        cy.get(':nth-child(11) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Enter a valid Name')
        })
        cy.get('.compact-range > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Specialization')
        })
        cy.get('#leadtwelfth_percentage').clear().type('102')
        cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 30 and 100')
        })
        cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
        cy.get('#leadtwelfth_percentage').clear().type('10')
        cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a value between 30 and 100')
        })

        //Passport validation
        cy.get('.px-3 > .invalid-feedback').should(($el) => {
            expect($el).to.contain('Select a valid Option')
        })
    })        
})

Cypress.Commands.add('LeadFormCommonData', () => {
    cy.fixture('testData').then((data)=>{
        cy.LeadFormCommonData_SA()
        cy.log('Filling city:' + data.city);
        cy.get('#leadcity').clear().type(data.city)
        cy.log('Clicking on city name');
        cy.get('ul.custom-search-submenu').invoke('show').click()
    })
})

Cypress.Commands.add('LeadFormCommonDataMob', () => {
    cy.fixture('testData').then((data)=>{
        cy.LeadFormCommonData_SA()
        cy.log('Clicking to fill city name');
        cy.get('#leadcity').click()
        cy.log('Filling city:' + data.city);
        cy.get('.form-control.search-field.border-0').click().type(data.city)
        cy.log('Clicking on city name');
        cy.get('.custom-search-submenu-option').click()
    })
})

Cypress.Commands.add('LeadFormCommonData_SA', () => {
    cy.fixture('testData').then((data)=>{
        cy.log('Enter Name:' + data.name);
        cy.get('#leadname').clear().type(data.name)
        cy.log('Enter email:' + data.email);
        cy.get('#leademail').clear().type(data.email)
        let num= Math.floor(Math.random()*90000) + 10000;
        cy.log('Enter phone number: ' + data.number + ', Random number: ' + num);
        cy.get('#leadphone_no').clear().type(data.number+ num)   
    })
})


Cypress.Commands.add('ColAppliedpage', (page) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Applied college page');
        cy.wait(1000);
        cy.log('Clicking on adding college name button');
        cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        cy.log('Typing college name: '+data.grad_uni);
        cy.waitUntil(() => cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').then($el => $el.trigger('click')).invoke('show').clear().type(data.grad_uni))
        cy.wait(1000);
        cy.log('Clicking on adding college name button');
        cy.get('.position-relative > :nth-child(1) > .material-form-field > .form-control').click()
        cy.wait(1000);
        if(page=='SA'){
            cy.log('Clicking on college name item');
            cy.get('[data-position="1"]').invoke('show').click()
        }else{
            cy.log('Clicking on college name item');
            cy.get('[data-position="1"]').invoke('show').click()
        }
        cy.log('Clicking on adding status');
        cy.get('#status-0-label').click()
        cy.log('Clicking on adding status as: Applied');
        cy.get('ul.custom-search-dropdown').contains('Applied').invoke('show').click()
        cy.log('Clicking on applied date');
        cy.get('.react-datepicker__input-container > .form-control').click()
        cy.log('Selecting applied month');
        cy.get('.react-datepicker__month-11').invoke('show').click()
        cy.log('Typing start year: ' + data.study_start);
        cy.get('#leadstudy_start').click().clear().type(data.study_start)
        cy.log('Clicking on start year');
        cy.get('.custom-search-submenu-option').contains(data.study_start).invoke('show').click()
        cy.log('Clicking on next button');
        cy.get('.ml-auto > .btn').click()
    })
})

Cypress.Commands.add('ColAppliedpageMob', (page) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('APPLIED/INTERESTED COLLEGE PAGE');
        if(page=='noCollege'){
            cy.log('Clicking on delete college button');
            cy.get('.icon.icon-danger.pointer').click();
        }else{
            cy.log('Clicking on adding college name button');
            cy.get('#college_name-0-label').click()
            cy.wait(1000)
            cy.log('Entering college name');
            cy.get('.search-input').clear().clear().type(data.grad_uni)
            cy.wait(1000)
            if(page=='SA'){
                cy.log('Clicking on college name item');
                cy.get('[data-position="1"]').invoke('show').click()
            }else{
                cy.log('Clicking on college name item');
                cy.get('[data-position="1"]').invoke('show').click()
            }
            cy.log('Clicking on status of the college');
            cy.get('#status-0-label').click()
            if(page=='interestedStatus'){
                cy.log('Clicking on status of the college as Interested');
                cy.get('.custom-search-submenu-option').contains('Interested').invoke('show').click()
            }else if(page=='awaitingResult'){
                cy.log('Clicking on status of the college as Awaiting Result');
                cy.get('.custom-search-submenu-option').contains('Awaiting Result').invoke('show').click()
                cy.log('Selecting the applied month ');
                cy.get('.react-datepicker__input-container > .form-control').click()
                cy.log('Selecting the month');
                cy.get('.react-datepicker__month-11').invoke('show').click()
            }else{
                cy.log('Clicking on status of the college as Applied');
                cy.get('.custom-search-submenu-option').contains('Applied').invoke('show').click()
                cy.log('Selecting the applied month ');
                cy.get('.react-datepicker__input-container > .form-control').click()
                cy.log('Selecting the month');
                cy.get('.react-datepicker__month-11').invoke('show').click()
            }
        }
        cy.log('Clicking on start year button');
        cy.get('#leadstudy_start').click()
        cy.log('Typing start year: ' + data.study_start);
        cy.get('.col > :nth-child(1) > .form-control').clear().type(data.study_start)
        cy.log('Selecting the year');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Clicking on the submit button');
        cy.get('.btn.btn-primary.btn-block.py-2.mb-2').click()
    })
})

Cypress.Commands.add('MBBSpage2', (page) =>{
    cy.fixture('testData').then((data)=>{
        if(page=='No'){
            cy.log('Clicking on No button');
            cy.get(':nth-child(2) > label').contains('No').click();
        }else{
            cy.log('Clicking on Yes button');
            cy.waitUntil(() => cy.get('.material-form-field > :nth-child(1) > label').then($el => $el.trigger('click')))
            
            cy.log('Filling start coaching button with '+data.coaching_start);
            cy.get('#leadcoaching_start').clear().type(data.coaching_start)
            cy.log('Clicking on '+ data.coaching_start);
            cy.get('ul.custom-search-dropdown').invoke('show').click()

            cy.log('Filling start coaching mode with '+data.coaching_start);
            cy.get('#leadcoaching_mode').clear().type(data.coaching_mode)
            cy.log('Clicking on '+ data.coaching_mode);
            cy.get('ul.custom-search-dropdown').invoke('show').click()

            cy.log('Filling start coaching subcity with '+data.coaching_start);
            cy.get('#leadcoaching_subcity').clear().type(data.coaching_subcity)
            cy.log('Clicking on '+ data.coaching_subcity);
            cy.get('ul.custom-search-submenu').invoke('show').click()
            if(page=='addBtns'){
                cy.log('Filling specialization with Other');
                cy.get('#leadcoaching_specialization').click().type('Other')
                cy.log('Clicking on Others');
                cy.get('.custom-search-submenu-option').click()
                cy.log('Typing others as Cyber Security');
                cy.get('#leadcoaching_other_specialization').type('Cyber Security');
            }
        }
    })
})

Cypress.Commands.add('MBBSpage2Mob', (page) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Verify text for coaching form');
        cy.get('.material-form-field > :nth-child(1) > label').should(($el) => {
            expect($el).to.contain('Would you like to attend coaching for')
        })
        if(page=='No'){
            cy.log('Distant coaching as NO');
            cy.get(':nth-child(3) > label').click()
        }else{
            cy.log('Distant coaching as YES');
            cy.get('.material-form-field > :nth-child(2) > label').click()
            cy.log('Click on Start-Coaching option');
            cy.get('#leadcoaching_start').click()
            cy.log('Enter option');
            cy.get('.col > :nth-child(1) > .form-control').type(data.coaching_start)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click on Coaching-Mode option');
            cy.get('#leadcoaching_mode').click()
            cy.log('Enter option');
            cy.get('.col > :nth-child(1) > .form-control').type(data.coaching_mode)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            cy.log('Click on Coaching-SubCity option');
            cy.get('#leadcoaching_subcity').click()
            cy.log('Enter option');
            cy.get('.col > :nth-child(1) > .form-control').type(data.coaching_subcity)
            cy.log('Select the option from dropdown');
            cy.get('.custom-search-submenu-option').click()
            if(page=='addBtns'){
                cy.log('Click on Coaching-Specialization option');
                cy.get('#leadcoaching_specialization').click()
                cy.log('Select the option from dropdown');
                cy.get('[data-index="9"]').click()
                cy.log('Enter other specialization name');
                cy.get('#leadcoaching_other_specialization').type('Cyber Security');
            }
        }
    })
})

Cypress.Commands.add('MBApage2',(page) =>{
    cy.fixture('testData').then((data)=>{
        
        cy.log('Enter Grad University: ' + data.grad_uni);
        cy.get('#leadgrad_uni').clear().type(data.grad_uni)
        cy.log('Select Grad University');
        cy.get('.drop-list > :nth-child(1)').click()

        cy.log('Enter Grad Course: ' + data.grad_course);
        cy.get('#leadgrad_course').clear().type(data.grad_course)
        cy.log('Select Grad Course');
        cy.get('.custom-search-submenu-option').click()

        cy.log('Enter Grad Percentage: ' + data.grad_per);
        cy.get('.form-control.text-center.p-1').eq(0).clear().type(data.grad_per)
        cy.log('Enter Work Ex: ' + data.workex);
        cy.get('.form-control.text-center.p-1').eq(1).clear().type(data.workex)
        if(page=='noSchedule'){ 
            cy.log('Select No');
            cy.get(':nth-child(2) > label').click()
        }else{
            if(page=='bookedExams'){
                cy.log('Select Booked');
                cy.get(':nth-child(3) > label').click();
                cy.get(':nth-child(7) > .material-form-field > .d-flex > .mb-0 > span').click();
                cy.get(':nth-child(7) > .material-form-field > .d-flex > div > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control').click();
                cy.get('.react-datepicker__month-11').click();
            }else if(page=='verifyAll'){
                cy.log('Select Booked');
                cy.get('.col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
                cy.log('Click on Option-1');
                cy.get(':nth-child(7) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter data in option-1');
                cy.get(':nth-child(7) > .material-form-field > .d-flex > div > ').clear().type(data.cat)
                cy.log('Click on Option-2');
                cy.get(':nth-child(8) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter data in option-2');
                cy.get(':nth-child(8) > .material-form-field > .d-flex > div > ').clear().type(data.mat)
                cy.log('Click on Option-3');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter data in option-3');
                cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').clear().type(data.xat)
                cy.log('Click on Option-4');
                cy.get(':nth-child(10) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter data in option-4');
                cy.get(':nth-child(10) > .material-form-field > .d-flex > div > ').clear().type(data.gmat)
            }else{
                cy.log('Select Yes');
                cy.get('.col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
                cy.log('Click on Option-1');
                cy.get(':nth-child(7) > .material-form-field > .d-flex > .mb-0 > span').click()
                cy.log('Enter data in option-1');
                cy.get(':nth-child(7) > .material-form-field > .d-flex > div > ').clear().type(data.cat)
            }
        }
    })
})

Cypress.Commands.add('MBApage2Mob',(page) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Click on grad university button');
        cy.get('#leadgrad_uni').click()
        cy.wait(1000)
        cy.log('Enter Grad University: ' + data.grad_uni);
        cy.get('.search-input').clear().type(data.grad_uni)
        cy.wait(1000)
        cy.log('Click on college name');
        cy.get('.drop-list > :nth-child(1)').invoke('show').click({force:true})
        
        cy.log('Click on grad course button');
        cy.get('#leadgrad_course').click()
        cy.log('Enter Grad Course: ' + data.course2);
        cy.get('.col > :nth-child(1) > .form-control').type(data.course2)
        cy.log('Click on grad course name');
        cy.get('.custom-search-submenu-option').click()

        cy.log('Entering grad percentage');
        cy.get('.form-control.text-center.p-1').eq(0).clear().type(data.grad_per)
        cy.log('Entering work ex');
        cy.get('.form-control.text-center.p-1').eq(1).clear().type(data.workex)
        if(page=='noSchedule'){
            cy.log('Selecting No Scheduled exams button');
            cy.get(':nth-child(3) > label').click();
        }else{
            if(page=='bookedExams'){
                cy.log('Selecting Booked exams button');
                cy.get(':nth-child(4) > label').click();
                cy.log('Selecting Option-1');
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(0).click();
                cy.log('Click on input field-1');
                cy.get('.form-control.px-1').eq(0).click();
                cy.log('Selecting booked month');
                cy.get('.react-datepicker__month-11').click()
            }else if(page=='verifyAll'){
                cy.log('Verify all error messages');
                cy.log('Selecting Yes button');
                cy.get(':nth-child(2) > label').contains('Yes').click();
                cy.log('Selecting Option-1');
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(0).click();
                cy.log('Selecting Option-2');
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(1).click();
                cy.log('Selecting Option-3');
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(2).click();
                cy.log('Selecting Option-4');
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(3).click();
                cy.log('Verify error-1');
                cy.get(':nth-child(7) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select a score between 0 and 300')
                })
                cy.log('Verify error-2');
                cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select a score between 0 and 800')
                })
                cy.log('Verify error-3');
                cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select a score between 0 and 74')
                })
                cy.log('Verify error-4');
                cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select a score between 200 and 800')
                })
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(0).click();
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(1).click();
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(2).click();
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(3).click();
                cy.log('Selecting Booked exams button');
                cy.get(':nth-child(4) > label').click();
                cy.log('Verify error-1');
                cy.get(':nth-child(7) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select Date')
                })
                cy.log('Verify error-2');
                cy.get(':nth-child(8) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select Date')
                })
                cy.log('Verify error-3');
                cy.get(':nth-child(9) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select Date')
                })
                cy.log('Verify error-4');
                cy.get(':nth-child(10) > .invalid-feedback').should(($el) => {
                    expect($el).to.contain('Select Date')
                })
            }else{
                cy.log('Select YES button');
                cy.get(':nth-child(2) > label').contains('Yes').click()
                cy.log('Selecting Option-1');
                cy.get('.d-flex.align-items-center > .mb-0.min-w-75px').eq(0).click();
                cy.log('Entering Option-3 value');
                cy.get(':nth-child(7) > .material-form-field > .d-flex > div > ').clear().type(data.cat)
            }
        }
    })
})

Cypress.Commands.add('SApage2_EduPreference',(page) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('English Proficiency as YES');
        cy.waitUntil(() => cy.get(':nth-child(3) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').then($el => $el.trigger('click')))
        cy.log('Select IELTS option');
        cy.get(':nth-child(4) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.log('Enter result for IELTS');
        cy.get(':nth-child(4) > .material-form-field > .d-flex > div > ').type(data.ielts)
        cy.log('Entrance exams as YES');
        cy.get(':nth-child(7) > .col-5 > .material-form-field-wrapper > .material-form-field > :nth-child(1) > label').click()
        cy.log('Select GRE/LSAT');
        cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
        if(page=='GRE'){
            cy.log('Enter result');
            cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').clear().type(data.GRE)
        }else if(page=='LSAT'){
            cy.log('Enter result');
            cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').clear().type(data.lsat)
        }
        cy.log('Select Interest');
        cy.get(':nth-child(10) > .col-5 > .d-block > .material-form-field > :nth-child(1) > label').click()
    })
})

Cypress.Commands.add('SApage2_EduPreferenceMob',(page) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('English Proficiency as YES');
        cy.waitUntil(() => cy.get('.d-block.mb-1 > .material-form-field > :nth-child(2) > label').then($el => $el.trigger('click')))
        cy.log('Select IELTS option');
        cy.get(':nth-child(4) > .material-form-field > .d-flex > .mb-0 > span').click()
        cy.log('Enter result for IELTS');
        cy.get(':nth-child(4) > .material-form-field > .d-flex > div > ').type(data.ielts)
        cy.log('Entrance exams as YES');
        cy.get(':nth-child(7) > .material-form-field > :nth-child(2) > label').click()
        cy.log('Select GRE/LSAT');
        cy.get(':nth-child(9) > .material-form-field > .d-flex > .mb-0 > span').click()
        if(page=='GRE'){
            cy.log('Enter result');
            cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').clear().type(data.GRE)
        }else if(page=='LSAT'){
            cy.log('Enter result');
            cy.get(':nth-child(9) > .material-form-field > .d-flex > div > ').clear().type(data.lsat)
        }
        cy.log('Select academics option');
        cy.get(':nth-child(10) > .material-form-field > :nth-child(2) > label').click()
    })
})

Cypress.Commands.add('SApage_undergradMob',(param) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Click on University button');
        cy.waitUntil(() => cy.get('#leadgrad_uni').then($el => $el.trigger('click')))
        cy.wait(1000)
        cy.log('Enter grad univeristy: '+ data.grad_uni);
        cy.get('.search-input').clear().type(data.grad_uni)
        cy.wait(1000)
        cy.log('Select University');
        cy.get('.drop-list > :nth-child(1)').invoke('show').click({force:true})
        cy.log('Click on course button');
        cy.get('#leadgrad_course').click()
        cy.log('Enter grad course: '+ data.grad_course);
        cy.get('.col > :nth-child(1) > .form-control').type(data.grad_course)
        cy.log('Select course');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Enter grad percentage');
        cy.get('.form-control.text-center.p-1').eq(0).clear().type(data.grad_per)
        cy.log('Enter work ex in years');
        cy.get('.form-control.text-center.p-1').eq(1).clear().type(data.workex)
        if(param=='Yes'){
            cy.log('Passport as YES');
            cy.get(':nth-child(2) > label').click().click();
        }else{
            cy.log('Passport as NO');
            cy.get(':nth-child(3) > label').click().click();
        }
    })
})

Cypress.Commands.add('SApage_undergrad',(param) =>{
    cy.fixture('testData').then((data)=>{
        cy.log('Enter grad univeristy: '+ data.grad_uni);
        cy.get('#leadgrad_uni').type(data.grad_uni)
        cy.log('Select University');
        cy.get('.drop-list > :nth-child(1)').click()
        cy.log('Enter grad course: '+ data.grad_course);
        cy.get('#leadgrad_course').type(data.grad_course)
        cy.log('Select course');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Enter grad percentage');
        cy.get('.form-control.text-center.p-1').eq(0).clear().type(data.grad_per)
        cy.log('Enter work ex in years');
        cy.get('.form-control.text-center.p-1').eq(1).clear().type(data.workex)
        if(param=='Yes'){
            cy.log('Passport as YES');
            cy.get('.material-form-field > :nth-child(1) > label').click();
        }else{
            cy.log('Passport as NO');
            cy.get('.material-form-field > :nth-child(2) > label').click();
        }
    })
})

Cypress.Commands.add('SApage_highschool',(param) =>{
    cy.fixture('testData').then((data)=>{
        //10th details
        cy.log('Enter 10th board: '+ data.board);
        cy.get('#leadtenth_board').type(data.board);
        cy.log('Select the option from dropdown');
        cy.get('ul.custom-search-submenu').invoke('show').click();
        cy.log('Enter 10th year: '+ data.tenth_year);
        cy.get('#leadtenth_year').type(data.tenth_year);
        cy.log('Select the option from dropdown');
        cy.get('.custom-search-submenu-option').click();
        cy.log('Enter 10th percentage: '+ data.tenth_per);
        cy.get('#leadtenth_percentage').clear().type(data.tenth_per);
        cy.log('Enter 10th school name: '+ data.highschool);
        cy.get('#leadtenth_school').type(data.highschool);

        //12th details
        cy.log('Enter 12th board: '+ data.board);
        cy.get('#leadtwelfth_board').type(data.board);
        cy.log('Select the option from dropdown');
        cy.get('ul.custom-search-submenu').invoke('show').click();
        cy.log('Enter 12th year: '+ data.twelth_year);
        cy.get('#leadtwelfth_year').type(data.twelth_year);
        cy.log('Select the option from dropdown');
        cy.get('.custom-search-submenu-option').click();
        cy.log('Enter 12th percentage: '+ data.tenth_per);
        cy.get('#leadtwelfth_percentage').clear().type(data.tenth_per);
        cy.log('Enter 12th school name: '+ data.highschool);
        cy.get('#leadtwelfth_school').type(data.highschool).click();
        cy.log('Enter specialization: '+ data.specialization);
        cy.get('#leadtwelfth_specialization').type(data.specialization);
        cy.log('Select the option from dropdown');
        cy.get('[data-index="0"]').contains('Medical Science').click();

        //Passport Yes/No
        if(param=='Yes'){
            cy.log('Passport as YES');
            cy.get('.material-form-field > :nth-child(1) > label').click();
        }else{
            cy.log('Passport as NO');
            cy.get('.material-form-field > :nth-child(2) > label').click();
        }    
    })
})

Cypress.Commands.add('SApage_highschoolMob',(param) =>{
    cy.fixture('testData').then((data)=>{
        //10th details
        cy.log('Click on 10th Board');
        cy.get('#leadtenth_board').click()
        cy.log('Enter 10th board: '+ data.board);
        cy.get('.col > :nth-child(1) > .form-control').type(data.board)
        cy.log('Select the option from dropdown');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Click on 10th year');
        cy.get('#leadtenth_year').click()
        cy.log('Enter 10th year: '+ data.tenth_year);
        cy.get('.col > :nth-child(1) > .form-control').type(data.tenth_year)
        cy.log('Select the option from dropdown');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Enter 10th percentage: '+ data.tenth_per);
        cy.get('#leadtenth_percentage').clear().type(data.tenth_per)
        cy.log('Select the option from dropdown');
        cy.get(':nth-child(2) > label').click()
        cy.get('#leadtenth_school').type(data.highschool);

        //12th details
        cy.log('Click on 12th Board');
        cy.get('#leadtwelfth_board').click()
        cy.log('Enter 12th board: '+ data.board);
        cy.get('.col > :nth-child(1) > .form-control').type(data.board)
        cy.log('Select the option from dropdown');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Click on 12th year');
        cy.get('#leadtwelfth_year').click()
        cy.log('Enter 12th year: '+ data.twelth_year);
        cy.get('.col > :nth-child(1) > .form-control').type(data.twelth_year)
        cy.log('Select the option from dropdown');
        cy.get('.custom-search-submenu-option').click()
        cy.log('Enter 12th percentage: '+ data.tenth_per);
        cy.get('#leadtwelfth_percentage').clear().type(data.tenth_per)
        cy.log('Enter 12th school name: '+ data.highschool);
        cy.get('#leadtwelfth_school').type(data.highschool).click();
        cy.log('Enter specialization');
        cy.get('#leadtwelfth_specialization').click();
        cy.log('Select the option from dropdown');
        cy.get('[data-index="1"]').click();

        if(param=='Yes'){
            cy.log('Passport as YES');
            cy.get(':nth-child(2) > label').click();
        }else{
            cy.log('Passport as NO');
            cy.get(':nth-child(3) > label').click();
        }
    })
})

Cypress.Commands.add('EnterOTP', () => {
    cy.log('VERIFY PAGE HEADING: Verify phone number');
    cy.waitUntil(() => cy.get('.otp__title > b').then($el => expect($el).to.have.text('Verify phone number')));  
    cy.log('Enter OTP digit 1: 1');
    cy.get('.otp__container > :nth-child(1)').type('1')
    cy.log('Enter OTP digit 2: 2');
    cy.get('.otp__container > :nth-child(2)').type('2')
    cy.log('Enter OTP digit 3: 3');
    cy.get('.otp__container > :nth-child(3)').type('3')
    cy.log('Enter OTP digit 4: 4');
    cy.get('.otp__container > :nth-child(4)').type('4')
})

Cypress.Commands.add('EnterWrongOTP', () => {
    cy.get('.otp__title > b').should('have.text','Verify phone number')
    cy.get('.otp__container > :nth-child(1)').type('2')
    cy.get('.otp__container > :nth-child(2)').type('3')
    cy.get('.otp__container > :nth-child(3)').type('4')
    cy.get('.otp__container > :nth-child(4)').type('1')
})

Cypress.Commands.add('OTP_TYmodal',(pageMode)=>{
    cy.fixture('testData').then((data)=>{
        cy.EnterOTP()
        cy.log('Click On Submit Button');
        cy.get('form > .btn').contains(data.OTPbtn).click()
        //For ASK A question button-web
        if(pageMode=='Ques'){
            cy.log('Verify Heading:'+ data.tymessage);
            cy.get('.modal-title').contains(data.tymessage)
            cy.log('Close Thank you modal');
            cy.get('.thankyou-modal-container > .jsx-1616745675').click()
            // cy.wait(3000)
            // cy.get('.login-button').should('have.text',data.loginText).end()
            cy.log('Verify name :'+ data.loginText);
            cy.waitUntil(() => cy.get('.login-button').then($el => $el.val(data.loginText)))
            cy.end()
        }
        //For ASK A question button-web
        else if(pageMode=='QuesMob'){
            cy.log('Verify Heading:'+ data.tymessage);
            cy.get('.form-active > h3.mb-2.font-weight-semi').contains(data.tymessage)
            cy.log('Close Thank you modal');
            cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
            cy.log('Click on notification bar');
            cy.get('#js-header-menu-toggle-btn > svg').click()
            // cy.wait(3000)
            // cy.get('.m-0 > .font-weight-semi').should('have.text',data.loginTextmob).end()
            cy.log('Verify name :'+ data.loginTextmob);
            cy.waitUntil(() => cy.get('.m-0 > .font-weight-semi').then($el => $el.val(data.loginTextmob)))
            cy.end()
        }
        // For Others
        else{
            //For mobile view
            if(pageMode=='mob'){
                cy.ThankYou('mobile')
                cy.log('Close Thank you modal');
                cy.get(':nth-child(3) > .jsx-1450311951 > svg').click()
                cy.log('Click on notification bar');
                cy.get('#js-header-menu-toggle-btn > svg').click()
                // cy.wait(3000)
                // cy.get('.m-0 > .font-weight-semi').should('have.text',data.loginTextmob).end()
                cy.log('Verify name :'+ data.loginTextmob);
                cy.waitUntil(() => cy.get('.m-0 > .font-weight-semi').then($el => $el.val(data.loginTextmob)))
                cy.end()
            }
            //For Web view
            else{
                cy.ThankYou()
                cy.log('Close Thank you modal');
                cy.get('.thankyou-modal-container > .jsx-1616745675').click()
                if(pageMode=='HomePage'){
                    cy.log('Verify name :'+ data.loginText);
                    cy.waitUntil(() => cy.get('div.align-items-center > .jsx-3925053037').then($el => $el.val(data.loginText)))
                    cy.end()    
                }else{
                    cy.log('Verify name :'+ data.loginText);
                    cy.waitUntil(() => cy.get('.login-button').then($el => $el.val(data.loginText)))
                    cy.end()
                }
            }
        }
        
    })
})

Cypress.Commands.add('ThankYou', (useragent) =>{
    cy.fixture('testData').then((data)=>{
        if(useragent=='mobile'){
            cy.log('Verify message heading :'+ data.tymessage);
            cy.waitUntil(() => cy.get('.form-active > h3.mb-2.font-weight-semi').then($el => $el.val(data.tymessage)))
        }else{
            cy.log('Verify message heading :'+ data.tymessage);
            cy.waitUntil(() => cy.get('.modal-title').then($el => $el.val(data.tymessage)))
        }
        cy.log('Click on ask a question');
        cy.get('#js-ask-a-question').click()
        cy.log('Type question');
        cy.get('textarea[name="askQuestion"]').click().type(data.message)
        cy.log('Click on submit question');
        cy.get('#js-ask-a-question-submit').click()
        if(useragent=='mobile'){
            cy.wait(1000)
            cy.log('Verify message');
            cy.waitUntil(() => cy.get('.form-active > h3.mb-2.font-weight-semi').then($el => $el.val(data.tymessage)))
        }else{
            cy.log('Verify message');
            cy.waitUntil(() => cy.get('.modal-title').then($el => $el.val(data.tymessage)))
        }
        cy.log('Verify message');
        cy.get('#js-ask-question-response > .text-primary').should('have.text',data.tyresponse)
    })
})

Cypress.Commands.add('NegativeValidation', ()=>{
    cy.get('.col-8 > form > :nth-child(1) > :nth-child(1) > .invalid-feedback').should('have.text','Enter a valid Name')
    cy.get(':nth-child(2) > .invalid-feedback').should('have.text','Enter a valid Email Address')
    cy.get('.phone_no > .invalid-feedback').should('have.text','Enter a valid Mobile Number')
    cy.get(':nth-child(1) > .jsx-3020513512.material-form-field-wrapper > .invalid-feedback').should('have.text','Select a valid City')
    cy.get(':nth-child(2) > .jsx-3020513512.material-form-field-wrapper > .invalid-feedback').should('have.text','Select a valid Course')
})

Cypress.Commands.add('NegativeValidationMBBSPage', ()=>{
    cy.log('Verify the error');
    cy.get(':nth-child(3) > .col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
        expect($el).to.contain('Select a valid Option')
    })
    cy.log('Verify the error');
    cy.get(':nth-child(4) > .col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
        expect($el).to.contain('Select a valid Option')
    })
    cy.log('Verify the error');
    cy.get(':nth-child(6) > .col-5 > .material-form-field-wrapper > .invalid-feedback').should(($el) => {
        expect($el).to.contain('Select a valid Location')
    })
});

Cypress.Commands.add('ValidateElement', (xpath,text)=>{
    cy.get(xpath).then($element => {
        if ($element.is(':visible')){
            //you get here only if button is visible
            expect(xpath).to.exist
        }
    })
    if(text!=null){
        cy.get(xpath).should((xpath) => {
                expect(xpath).to.contain(text)
        })
    }
});

Cypress.Commands.add('commonPageElementVal', (page)=>{
    cy.fixture('xpath').then((data)=>{
        //Headings
        if(page=='HomePage'){
            cy.ValidateElement(data.common_menu_header_1,null)
            cy.ValidateElement(data.common_menu_header_2,null)
            cy.ValidateElement(data.login_btn_homepage,'Login')
        }else if(page=='SA'){
            cy.ValidateElement(data.SA_header_silo_1,null)
            cy.ValidateElement(data.SA_header_silo_2,null)
            cy.ValidateElement(data.SA_login_btn,'Login')
        }else{
            cy.ValidateElement(data.common_menu_header_1,null)
            cy.ValidateElement(data.common_menu_header_2,null)
            cy.ValidateElement(data.login_btn,'Login')
        }

        if(page=='HomePage'){
            cy.get('body').find('img').should('have.attr', 'src').should('include','/public/college_data/images/logos/BITS Pilani Logo.png?tr=w-35,h-35,c-force')
        }else if(page=='SA'){
            cy.get('.nav-logo').should('have.attr', 'src').should('include','/public/asset/img/cd_logo.png')
        }else{
            cy.get('body').find('img').should('have.attr', 'src').should('include','/public/asset/img/cd_logo.png')
        } 
        //Page Footers
        if(page=='HomePage'){
            cy.ValidateElement(data.home_page_footer_1,null)
            cy.ValidateElement(data.home_page_footer_2,null)
            cy.ValidateElement(data.home_page_footer_1_heading,'Subscribe to our news letter')
            cy.ValidateElement(data.home_page_footer_2_heading,'Download the Collegedunia app on')
        }else if(page=='SA'){
            cy.ValidateElement(data.SA_footer1,null)
            cy.ValidateElement(data.SA_footer2,null)
            cy.ValidateElement(data.SA_footer_heading_1,'SUBSCRIBE TO OUR NEWS LETTER')
            cy.ValidateElement(data.SA_footer_heading_2,'Download the Collegedunia app on')
        }else{
            cy.ValidateElement(data.page_footer,null)
            cy.ValidateElement(data.page_footer_submenu,null)
            cy.ValidateElement(data.page_footer_heading_1,'SUBSCRIBE TO OUR NEWS LETTER')
            cy.ValidateElement(data.page_footer_heading_2,'Download the Collegedunia app on')
        }
    })
});

Cypress.Commands.add('commonExamPageElementVal', (page)=>{
    cy.fixture('xpath').then((data)=>{
        //Common buttons
        cy.ValidateElement(data.exam_getmoreinfo,null)
        cy.ValidateElement(data.exam_samplepaper,null)
        cy.ValidateElement(data.exam_askaquestion,null)
        
        //Side-bar elements
        if(page!='pracpapers'){
            cy.ValidateElement(data.exam_side_nav,null)
        }
        cy.ValidateElement(data.exam_silo_nav,null)
        cy.ValidateElement(data.exam_sidebar_notification,null)
        cy.ValidateElement(data.exam_noti_heading,'Notifications')
        cy.ValidateElement(data.exam_content_sec,null)
        cy.ValidateElement(data.exam_sidebar_topcourses,null)
        cy.ValidateElement(data.exam_sidebar_othercolleges,null)
        cy.ValidateElement(data.exam_sidebar_othercatpapers,null)
        cy.ValidateElement(data.exam_sidebar_otherpages,null)
    })
});

Cypress.Commands.add('newsCommentExamPage', (news)=>{
    cy.fixture('xpath').then((data)=>{
        //News section
        cy.ValidateElement(data.page_news_holder,null)
        if(news=='MustSeeNews'){
            cy.ValidateElement(data.page_news_heading,null) 
        }else if(news=='mains'){
            cy.ValidateElement(data.page_news_heading,null) 
        }else{
            cy.ValidateElement(data.page_news_heading,null) 
        }
        //Comment section
        cy.ValidateElement(data.exam_comment_section,null)
        cy.ValidateElement(data.exam_comment_section_heading,null) 
    })
});

Cypress.Commands.add('flexButtons', ()=>{
    cy.fixture('xpath').then((data)=>{
        //Flex Buttons
        cy.ValidateElement(data.exam_flex_btns,null)
        cy.ValidateElement(data.exam_flex_AN_btn,null) 
        cy.ValidateElement(data.exam_flex_CE_btn,null) 
        cy.ValidateElement(data.exam_flex_GU_btn,null) 
    })
});

Cypress.Commands.add('commonCollegeListPageElements', ()=>{
    cy.fixture('xpath').then((data)=>{
        //Flex Buttons
        cy.ValidateElement(data.exam_filter_nav,null)
        cy.ValidateElement(data.col_listing,null) 
        cy.ValidateElement(data.other_applynow1,null) 
        cy.ValidateElement(data.other_db1,null) 
    })
});

Cypress.Commands.add('mobCommonCollegeListPageElements', (page)=>{
    cy.fixture('xpath').then((data)=>{
        if(page=='SA'){
            cy.ValidateElement(data.mob_colList_1,null) 
            cy.ValidateElement(data.mob_colList_btns_1,null)
        }else{
            cy.ValidateElement(data.mob_colList_2,null) 
            cy.ValidateElement(data.mob_colList_btns_2,null)   
        }
    })
});

Cypress.Commands.add('commonPageButton', ()=>{
    cy.fixture('xpath').then((data)=>{
        cy.ValidateElement(data.uni_sidebar,null)
        cy.ValidateElement(data.uni_tablist,null)
        //Common Buttons
        cy.ValidateElement(data.col_apply_now_btn,null)
        cy.ValidateElement(data.col_DB_btn,null) 
        cy.ValidateElement(data.col_header_like_btn,null)
        cy.ValidateElement(data.col_header_getmoredetails_btn,null) 
        cy.ValidateElement(data.col_askaquestion_btn,null) 
    })
});

Cypress.Commands.add('mobCommonButton', ()=>{
    cy.fixture('xpath').then((data)=>{
        //Common Buttons
        cy.ValidateElement(data.mob_header_applynow_btn,null)
        cy.ValidateElement(data.mob_header_db_btn,null) 
        cy.ValidateElement(data.mob_footer_applynow_btn,null) 
        cy.ValidateElement(data.mob_footer_db_btn,null)
    })
});

Cypress.Commands.add('mobCommonButtonSA', ()=>{
    cy.fixture('xpath').then((data)=>{
        //Common Buttons
        cy.ValidateElement(data.mob_sacol_startapp_btn,null)
        cy.ValidateElement(data.mob_footer_applynow_btn,null) 
        cy.ValidateElement(data.mob_footer_db_btn,null) 
    })
});

Cypress.Commands.add('mobCommonSection', (page)=>{
    cy.fixture('xpath').then((data)=>{
        cy.ValidateElement(data.mob_similar_col_section,null)
        cy.ValidateElement(data.mob_nearby_col_section,null) 
        cy.ValidateElement(data.mob_similar_btn,null) 
        cy.ValidateElement(data.mob_nearby_btn,null);
        if(page!='norating'){
            cy.ValidateElement(data.exam_rating_1,null);
        } 
    })
});

Cypress.Commands.add('mobCommonSectionSA', (page)=>{
    cy.fixture('xpath').then((data)=>{
        cy.ValidateElement(data.mob_saSimilar_col_section,null)
        cy.ValidateElement(data.mob_saNearby_col_section,null) 
        cy.ValidateElement(data.mob_sacol_similar_btn,null) 
        cy.ValidateElement(data.mob_sacol_nearby_btn,null);
        if(page!='norating'){
            cy.ValidateElement(data.exam_rating_1,null);
        } 
    })
});

Cypress.Commands.add('commonMobPageElementVal', (page) =>{
    cy.fixture('xpath').then((data)=>{
        if(page=='SA'){
            cy.ValidateElement(data.mob_SA_footer_1,null)
            cy.ValidateElement(data.mob_SA_footer_btn_1,'SUBMIT')
            cy.ValidateElement(data.mob_SA_footer_heading_1,'Subscribe to our Newsletter')
            cy.ValidateElement(data.mob_SA_footer_heading_2,'COPYRIGHT © 2021 COLLEGEDUNIA WEB PVT. LTD. ALL RIGHTS RESERVED')
        }else{
            //Header
            cy.ValidateElement(data.mob_mian_header_1,null)
            if(page!='list' && page=='HomePage'){
                //Footer
                cy.ValidateElement(data.mob_footer_1,null)
                cy.ValidateElement(data.mob_footer_2,null)
                cy.ValidateElement(data.mob_footer_2_submit_btn,'Submit')
                cy.ValidateElement(data.mob_footer_2_heading,'Subscribe to Our News letter')
                cy.ValidateElement(data.mob_footer_1_botton_text,'Copyright © Collegedunia Web Pvt. Ltd. All rights reserved')
            }else{
                cy.ValidateElement(data.mob_footer_main_1,null)
                cy.ValidateElement(data.mob_footer_2_submit_btn_2,'SUBMIT')
                cy.ValidateElement(data.mob_footer_main_heading_1,'Subscribe to Our News letter')
                cy.ValidateElement(data.mob_footer_1_botton_text,'COPYRIGHT © COLLEGEDUNIA WEB PVT. LTD. ALL RIGHTS RESERVED')
            }
        }
    })
})

Cypress.Commands.add('commonMobExamPageElementVal', (page) =>{
    cy.fixture('xpath').then((data)=>{
        let arr = [];
        if(page!=null){
            arr = page.split("_");
        }
        cy.ValidateElement(data.exam_content_headsilo_1,null);
        cy.ValidateElement(data.exam_rating_1,null);
        cy.ValidateElement(data.exam_rating_numbers_1,'12345678910');
        if(!arr.includes('withoutfaqsection')){
            cy.ValidateElement(data.exam_faqs_section_1,null);
        }
        if(!arr.includes('withoutfaqs')){
            cy.ValidateElement(data.mobfaqs,null)
        }
        cy.ValidateElement(data.exam_news_section_2,null);
        cy.ValidateElement(data.exam_comments_section_3,null);
        cy.ValidateElement(data.exam_comments_section_3_heading,'Comments');
    })
})

Cypress.Commands.add('commonMobScrollElementVal', () =>{
    cy.fixture('xpath').then((data)=>{
        cy.scrollTo(10,10)
        cy.ValidateElement(data.scroll_btn_1,null);
        cy.ValidateElement(data.scroll_btn_2,null);
    })
})

Cypress.Commands.add('mobFlexButtons', ()=>{
    cy.fixture('xpath').then((data)=>{
        //Flex Buttons
        cy.ValidateElement(data.exam_flex_btns,null)
        cy.ValidateElement(data.exam_flex_AN_btn,null) 
        cy.ValidateElement(data.exam_flex_GU_btn,null) 
    })
});

Cypress.Commands.add('mobCourse1', ()=>{
    cy.fixture('xpath').then((data)=>{
        cy.ValidateElement(data.mob_course_section_1,null);
        cy.ValidateElement(data.mob_course_section_btn_1,' Apply Now');
        cy.ValidateElement(data.mob_course_section_btn_2,' View All Courses ');
        cy.ValidateElement(data.rating_1,null);
        cy.ValidateElement(data.mob_rating_content_1,'Notso likelyHighly Likely');
    })
});

Cypress.Commands.add('mobCourse2', ()=>{
    cy.fixture('xpath').then((data)=>{
        cy.ValidateElement(data.mob_course_section_2,null);
        cy.ValidateElement(data.mob_course_section_heading_1,null);
        cy.ValidateElement(data.mob_course_section_btn_3,null);
    })
});

Cypress.Commands.add('commonCollegePages', (page) =>{
    cy.fixture('xpath').then((data)=>{
        //side Notification bar
        cy.ValidateElement(data.uni_tablist,null);
        cy.ValidateElement(data.uni_sidebar,null);
        cy.ValidateElement(data.uni_noti_folshare_section,null);
        cy.ValidateElement(data.uni_noti_topcourse_section,null);
        cy.ValidateElement(data.uni_noti_topcourse_section_heading,'Top Courses');

        //Common buttons on every page
        cy.ValidateElement(data.col_apply_now_btn,null);
        cy.ValidateElement(data.col_DB_btn,null);
        cy.ValidateElement(data.col_header_like_btn,null);
        cy.ValidateElement(data.col_header_getmoredetails_btn,null);
        cy.ValidateElement(data.col_askaquestion_btn,null);
        if(page=='affiliated'){
            cy.ValidateElement(data.col_news_section_2,' Affiliated Colleges ');
            cy.ValidateElement(data.col_affiliated_card_1,null);
        }else{
            if(page!='norating'){
                cy.ValidateElement(data.rating_1,null);
                cy.ValidateElement(data.rating_content_1,'1Not so likely2345678910Highly Likely');
            }
        }
        if(page=='department'){
            cy.ValidateElement(data.col_department_heading,'Departments');
        }
        cy.ValidateElement(data.col_similar_col_section,null);
        if(page=='coursefees'){
            cy.ValidateElement(data.col_similar_col_section_heading,' Colleges Offering Similar Course Fee Structure ');
        }else{
            cy.ValidateElement(data.col_similar_col_section_heading,' Similar Colleges ');
        }
        cy.ValidateElement(data.col_nearby_col_section,null);
        cy.ValidateElement(data.col_nearby_col_section_heading,' Nearby Colleges ');
        if(page=='news'){
            cy.ValidateElement(data.col_news_section_1,'college   News and Article');
        }else if(page=='nonews'){            
        }else{
            cy.ValidateElement(data.col_news_section,null);
            cy.ValidateElement(data.col_news_section_heading,' NewsView All');
        }
    })
})

Cypress.Commands.add('commonSAPages', () =>{
    cy.fixture('xpath').then((data)=>{
        //Header
        cy.ValidateElement(data.common_menu_header_1,null)
        cy.ValidateElement(data.login_btn,'Login')
        //Footer
        cy.ValidateElement(data.page_footer,null)
        cy.ValidateElement(data.page_footer_submenu,null)
        cy.ValidateElement(data.page_footer_heading_1,'SUBSCRIBE TO OUR NEWS LETTER')
        cy.ValidateElement(data.page_footer_heading_2,'Download the Collegedunia app on')
    })
})

Cypress.Commands.add('commonSAPageSections', (page) =>{
    cy.fixture('xpath').then((data)=>{
        //Common Sections
        cy.log('Verify SA home sidebar container');
        cy.ValidateElement(data.SA_Home_sidebar_container_1,null);
        cy.log('Verify SA notification- follow share section');
        cy.ValidateElement(data.uni_noti_folshare_section,null);
        cy.log('Verify SA side bar section');
        cy.ValidateElement(data.SA_Home_sidebar_section_1,null);
        if(page=='scholarship'){
            cy.log('Verify SA side bar section heading');
            cy.ValidateElement(data.SA_Home_sidebar_section__heading_1,'Faculty, schools and campuses');
        }else{
            cy.log('Verify SA side bar section heading');
            cy.ValidateElement(data.SA_Home_sidebar_section__heading_1,'Affilated colleges');   
        }
        cy.ValidateElement(data.SA_similar_col_section_1,null);
        cy.ValidateElement(data.SA_similar_col_section_heading_1,'Similar Colleges');
        cy.ValidateElement(data.SA_similar_db_btn,'Download Brochure');
    })
})

Cypress.Commands.add('commonSAButtons', (page) =>{
    cy.fixture('xpath').then((data)=>{
        //Common buttons on every page
        cy.log('Verify apply now button');
        cy.ValidateElement(data.SA_applynow_btn,null);
        cy.log('Verify Download Brochure button');
        cy.ValidateElement(data.SA_db_btn,null);
        cy.log('Verify header button-like button');
        cy.ValidateElement(data.SA_header_like_btn,null);
        cy.log('Verify header button- Get free counselling button')
        cy.ValidateElement(data.SA_header_getmoredetails_btn,null);
        cy.log('Verify Get free counselling button')
        cy.ValidateElement(data.SA_getcounselling_btn,null);
        if(page=='additionalbtns'){
            cy.log('Verify Check Detailed Fees button')
            cy.ValidateElement(data.SA_checkdetails_btn,null);
            cy.log('Verify Download Brochure button');
            cy.ValidateElement(data.SA_db_course_btn,null);
        }
    })
})