const axios = require('axios');
const fs = require('fs');
const path = require('path');
// const jsonData = require('../cypress/report/CDResult.json');
/**
 * sends mail using falconide on mailapi
 * options {
 *  from,
 *  fromName,
 *  tags,
 *  test, set to true for test mail
 * }
 * @param {string} content
 */
 async function negativeAlert() {
    let tags = [];
    let tags_testers = [];
    let tags_testers_name = [];
    if(process.env.branch_name== null){
      tags_testers_name = process.env.CI_COMMIT_MESSAGE.split("Tester-");
      tags_testers = tags_testers_name[1].split("Server-");
      tags = tags_testers[1].split("QAPipelineTags-");      
      process.env.branch_name =  tags[0];
    }
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'mail-setting':'6',
        'x-api-key':'mlfy_4x0PgBDp0thVigX',
        'x-api-secret':'123456',
        'Expect':''
    }
    let jsonPath = path.join(__dirname, '..','..', 'cypress', 'report', 'CDResult.json');
    let jsonString = fs.readFileSync(jsonPath, 'utf8');
    const date= process.env.datetime;
    const obj = JSON.parse(jsonString);
    const failurecount= obj.stats.failures;
    let arrTests = [];
    let objresult;
    for (let i = 0; i < obj.results.length; i++){
         objresult = obj.results[0];
        let objres = obj.results[i];
        for (let i = 0; i < objres.suites.length; i++){
          let objsuites = objres.suites[i];
          let finalobjtests= [];
            finalobjtests = objsuites.tests.filter(testobj => testobj.fail);
            for (let i = 0; i < finalobjtests.length; i++){
                let objtest= finalobjtests[i];
                arrTests.push(objtest);
            }
            objres.suites[i].tests=finalobjtests;
        }
    }

    obj.stats.suites= 0; 
    obj.stats.tests= 0;
    obj.stats.passes= 0;
    obj.stats.testsRegistered= 0;
    const myJSON = JSON.stringify(obj);
    let jsonPathWrite = path.join(__dirname, '..','..', 'cypress', 'report', 'NegativeCases.json');
    fs.writeFileSync(jsonPathWrite, myJSON);

    let subjectText;
    if(process.env.varEnv=='prod'){
      subjectText='Negative case count: '+ failurecount
    }else{
      subjectText='Negative case count: '+ failurecount +'; Tester- '+ tags_testers[0]
    }
    
    const mailData = [
      {
        recipients : [['cd-automation-negativ-aaaafhjykmrfjfqiv4xweiqhca@collegeduniaworkspace.slack.com']],
        content :
        'Failed cases: '+failurecount+'<br>'+
        'Report zip folder Link-'+ ' <a href="https://staticstage.collegedunia.com/gitlab-report/report_'+ date + '.zip">link</a>' +'<br>'+
        'HTML Report link- <a href="https://staticstage.collegedunia.com/gitlab-report/report_'+ date + '/NegativeCases.html">link</a>'+ '<br>',
        subject: subjectText, 
        from: 'GitLab-ci-reporting',
        mail_tags:'negative_alert',
        plain_text:'Negative Case Alert',
        fromname: 'Gitlab-CI',
        tags: 'collegedunia',
      },
    ]
    console.log(mailData)
    // mailify data format
    let data = {
      mail_data: JSON.stringify(mailData),
      ecategory: 'transactional',
      test: true, 
    }
    data = new URLSearchParams(data).toString()
    // calling api
    if(failurecount>0){
        try{
            const response = await axios({
                method: 'post',
                url: 'https://stage1.smtpmailify.com/api/sendMail',
                headers,
                data,
              })
        }catch(error ){
           console.log(error)
        }
    }   
  }
  negativeAlert()