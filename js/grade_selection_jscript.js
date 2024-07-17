
let grades = ["A+", "A", "A-", "B+" , "B", "B-", "C+", "C", "C-", "D+", "D", "E"]
import {level3_semester1, 
        level3_semester2,
        level4_semester1,
        level4_semester2,
        level5_semester1,
        level5_semester2,
        level6_semester1,
        level6_semester2  } from './course_container.js';

/* Create Course class */
class Course {
    constructor(id, name, creditVal, level, semester) {
        this.id = id;
        this.name = name;
        this.creditVal = creditVal;
        this.level = level;
        this.semester = semester;
    };
};

/* Add courses to the lists */
function addCourse(id, name, creditVal, level, semester){
    let course00 = new Course(id, name, creditVal, level, semester);

    if(level === 3 && semester === 1){
        level3_semester1.push(course00);
    } else if(level === 3 && semester === 2) {
        level3_semester2.push(course00);
    } else if(level === 4 && semester === 1) {
        level4_semester1.push(course00);
    } else if(level === 4 && semester === 2) {
        level4_semester2.push(course00);
    } else if(level === 5 && semester === 1) {
        level5_semester1.push(course00);
    } else if(level === 5 && semester === 2) {
        level5_semester2.push(course00);
    } else if(level === 6 && semester === 1) {
        level6_semester1.push(course00);
    } else if(level === 6 && semester === 2) {
        level6_semester2.push(course00);
    } else {
        console.log("Somehting went wrong with the arguments.");
        console.log("Course ID: " + id);
        console.log("level : " + level + " / " + "semester : " + semester);
        
    }
};

/* Creating courses and add them to the arrays */
// Level 3 Semester 1 Courses - 5
addCourse("COU3300", "Computer Organization and Communication", 3, 3, 1);
addCourse("COU3301", "Database Management System", 3, 3, 1);
addCourse("COU3202", "System Analysis and Design", 2, 3, 1);
addCourse("COU3304", "Fundamentals of Programming", 3, 3, 1);
addCourse("ADU3330", "Discrete Mathematics I", 3, 3, 1);

// Level 3 Semester 2 Courses - 6
addCourse("COU3303", "Software Engineering", 3, 3, 2);
addCourse("COU3305", "Computer Security Concept", 3, 3, 2);
addCourse("COU3306", "Data Structures and Algorithm", 3, 3, 2);
addCourse("ISU3300", "Fundamentals of Information System", 3, 3, 2);
addCourse("ISU3201", "IT Organization", 2, 3, 2);
addCourse("ITU3201", "Web Development", 2, 3, 2);

// Level 4 Semester 1 Courses - 6
addCourse("COU4300", "Object Oriented Programming", 3, 4, 1 );
addCourse("COU4201", "Knowledge Representation and Logic Programming", 2, 4, 1);
addCourse("COU4302", "Operating System", 3, 4, 1);
addCourse("COU4304", "Computer Architecture", 3, 4, 1);
addCourse("ISU4200", "Professional Practices and Ethics", 2, 4, 1);
addCourse("ADU4230", "Discrete Mathematics II", 2, 4, 1);

// Level 4 Semester 2 Courses - 6
addCourse("COU4303", "Artificial Intelligence", 3, 4, 2);
addCourse("COU4305", "Computer Networks", 3, 4, 2);
addCourse("COU4306", "Cryptography", 3, 4, 2);
addCourse("ITU4200", "Software Validation and Assurance", 2, 4, 2);
addCourse("ITU4202", "User Experience Design", 2, 4, 2);
addCourse("ADU4231", "Probability and Statistics", 2, 4, 2);

// Level 5 Semester 1 Courses - 7
addCourse("COU5300", "Artificial Neural Network", 3, 5, 1);
addCourse("ADU5330", "Inferential Techniques and Statistical Modeling", 3, 5, 1);
addCourse("ISU5300", "Management Information System", 3, 5, 1);
addCourse("ITU5301", "Software Quality Assurance", 3, 5, 1);
addCourse("ITU5303", "Multimedia Design and Technology", 3, 5, 1);
addCourse("ITU5305", "Enterprise Application Development", 3, 5, 1);
addCourse("ITU5304", "Wireless and Cellular Networks", 3, 5, 1);

// Level 5 Semester 2 Courses - 7
addCourse("COU5301", "Cloud Computing", 3, 5, 2);
addCourse("ISU5301", "Industry Sustainability and Law", 3, 5, 2);
addCourse("ITU5300", "Human Computer Interaction", 3, 5, 2);
addCourse("ITU5306", "Internet of Thing", 3, 5, 2);
addCourse("ITU5307", "Cybersecurity", 3, 5, 2);
addCourse("ITU5309", "Virtual System and Services", 3, 5, 2);
addCourse("ITU5308", "Web Technologies", 3, 5, 2);

// Level 6 Semester 1 Courses - 5
addCourse("COU6303", "Advanced Database Management Systems", 3, 6, 1);
addCourse("COU6304", "Advanced Data Structures and Algorithms", 3, 6, 1);
addCourse("ISU6300", "IT Risk Management", 3, 6, 1);
addCourse("ITU6302", "Distributed Systems", 3, 6, 1);
addCourse("ITU6621", "Research Project", 6, 6, 1);

// Level 6 Semester 2 Courses - 6
addCourse("COU6306", "Data Mining", 3, 6, 2);
addCourse("COU6307", "Digial Forensics", 3, 6, 2);
addCourse("COU6308", "Machine Learning", 3, 6, 2);
addCourse("COU6309", "Information Security", 3, 6, 2);
addCourse("ISU6302", "Social Media and Global Computing", 3, 6, 2);
addCourse("ISU6305", "IT Project Management", 3, 6, 2);
// Total courses = 48

document.addEventListener('courseCreated', function(){

    let courseContainers = document.querySelectorAll(".course-container");
    let gradeSelectionBtns = document.querySelectorAll(".grade-selection-btn");
    let gradeLists = document.querySelectorAll(".grade-list");
    
    let l3s1CourseContainer = document.querySelectorAll("#level3-sem1-container .course-container");
    let l3s2CourseContainer = document.querySelectorAll("#level3-sem2-container .course-container");
    let l4s1CourseContainer = document.querySelectorAll("#level4-sem1-container .course-container");
    let l4s2CourseContainer = document.querySelectorAll("#level4-sem2-container .course-container");
    let l5s1CourseContainer = document.querySelectorAll("#level5-sem1-container .course-container");
    let l5s2CourseContainer = document.querySelectorAll("#level5-sem2-container .course-container");
    let l6s1CourseContainer = document.querySelectorAll("#level6-sem1-container .course-container");
    let l6s2CourseContainer = document.querySelectorAll("#level6-sem2-container .course-container");
    
    /* Display courses in the containers from the lists */
    function displayCourses(courseArr, container){
        let containerDiffer = courseArr.length - container.length;
        if(containerDiffer === 0){
            courseArr.forEach(function(course, index){
                container[index].querySelector(".course-id span").textContent = course.id;
                container[index].querySelector(".course-name span").textContent = course.name;
                container[index].querySelector(".credit-val span").textContent = course.creditVal;
            });
        }else if(containerDiffer > 0){
            console.log("Need " + containerDiffer + " more course container areas");
            console.log("for " + container + " container.");
    
            /*courseArr.forEach(function(course, index){
                container[index].querySelector(".course-id span").textContent = course.id;
                container[index].querySelector(".course-name span").textContent = course.name;
            });*/
        }else if(containerDiffer < 0){
            let exceededContainers = 0 - containerDiffer;
            console.log("Something wrong! " + exceededContainers + " empty containers are in..");
            console.log(container + " container.");
        }
    }
    
    displayCourses(level3_semester1, l3s1CourseContainer);
    displayCourses(level3_semester2, l3s2CourseContainer);
    displayCourses(level4_semester1, l4s1CourseContainer);
    displayCourses(level4_semester2, l4s2CourseContainer);
    displayCourses(level5_semester1, l5s1CourseContainer);
    displayCourses(level5_semester2, l5s2CourseContainer);
    displayCourses(level6_semester1, l6s1CourseContainer);
    displayCourses(level6_semester2, l6s2CourseContainer);
       
    
    function hideAllDropMenus(){
        gradeLists.forEach(function(item){
            item.classList.add("hidden");
        });
    }
     /* Reset selected button colors */
    function resetColor(gradeBtn){
        gradeBtn.classList.remove("grade-selected-A");
        gradeBtn.classList.remove("grade-selected-B");
        gradeBtn.classList.remove("grade-selected-C");
        gradeBtn.classList.remove("grade-selected-DE");
    }
    
    function resetActive(){
        gradeSelectionBtns.forEach(function(btn){
            btn.classList.remove("active");   
        });
    }
    
    /* Set colors for selected grades */
    function setColorForSelectedGrade(gradeBtn, gradeText){
        resetColor(gradeBtn);
        if(gradeText === "A+" || gradeText === "A" || gradeText === "A-"){
            gradeBtn.classList.add("grade-selected-A");
        }else if(gradeText === "B+" || gradeText === "B" || gradeText === "B-"){
            gradeBtn.classList.add("grade-selected-B");
        }else if(gradeText === "C+" || gradeText === "C" || gradeText === "C-"){
            gradeBtn.classList.add("grade-selected-C");
        }else if(gradeText === "D+" || gradeText === "D" || gradeText === "E"){
            gradeBtn.classList.add("grade-selected-DE");
        }
    }
    
    
    /* add grades to dropdown menu */
    gradeLists.forEach(function(item){
        grades.forEach(function(grade){
            let gradeEl = document.createElement("li");
            let spanEl = document.createElement("span");
            spanEl.textContent = grade;
            gradeEl.appendChild(spanEl);
            item.appendChild(gradeEl);
        });
    });
    
    /* toggle dropdown menu when click the button */
    gradeSelectionBtns.forEach(function(btn, index){
        btn.addEventListener("click", function(){
    
            if(btn.classList.contains("active")){
                btn.classList.toggle("active");
            }
            else {
                resetActive();
                btn.classList.toggle("active");
            }
    
            if(gradeLists[index].classList.contains("hidden")){
                hideAllDropMenus();
                gradeLists[index].classList.toggle("hidden");
            } else {
                gradeLists[index].classList.toggle("hidden");
                /* !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                calTotCreditForEachGrade(defaultGrade, defaultCredit, index);
                calGPA();
                
    
                gradeSelectionBtns[index].querySelector("span").textContent = "grade 🥇";
                gradeSelectionBtns[index].classList.remove("grade-selected-A");
                gradeSelectionBtns[index].classList.remove("grade-selected-B");
                gradeSelectionBtns[index].classList.remove("grade-selected-C");
                gradeSelectionBtns[index].classList.remove("grade-selected-DE");
                gradeSelectionBtns[index].classList.remove("active");
            } 
        });
    });
    
    let creditValues = document.querySelectorAll(".credit-val .value");
    
    /* display selected grade in dropdown menu text */
    gradeLists.forEach(function(item, index){
        let gradeBtns = item.querySelectorAll(".grade-list li");
        gradeBtns.forEach(function(btn){
            btn.addEventListener("click", function(){
                gradeSelectionBtns[index].querySelector("span").textContent = btn.textContent;
                /* Get grade and credit */
                
                let currentGradeBtn = gradeSelectionBtns[index];
                let currentGradeTxt = gradeSelectionBtns[index].querySelector("span").textContent;
                hideAllDropMenus();
                setColorForSelectedGrade(currentGradeBtn, currentGradeTxt);
    
                let grade = btn.textContent;
                let creditVal = parseInt(creditValues[index].textContent);
    
                calTotCreditForEachGrade(grade, creditVal, index);
                calGPA();
    
            });
        });
    });
    
    // Reset button.......
    let ResetBtnEl = document.getElementById("reset-button");
    
    ResetBtnEl.addEventListener("click", function(){
        gradeSelectionBtns.forEach(function(btn){
            btn.querySelector("span").textContent = "grade 🥇";
            btn.classList.remove("grade-selected-A");
            btn.classList.remove("grade-selected-B");
            btn.classList.remove("grade-selected-C");
            btn.classList.remove("grade-selected-DE");
        });
        hideAllDropMenus();
        resetActive();
        resetArrays();
        gpaValEl.textContent = "0.00";
        totCreditEl.textContent = "00";
        gpaSubTextEl.style.backgroundColor = "lightgray";
        totCreditSubTextEl.style.backgroundColor = "lightgray";
    });
    
    // gpa calculations....
    
    let gpaValEl = document.getElementById("gpaVal");
    let totCreditEl = document.getElementById("totCredit");
    
    const length = 48;
    const defaultCredit = 0;
    const defaultGrade = "0";
    
    const creditArray = Array.from({length}, () => defaultCredit);
    const gradeArray = Array.from({length}, () => defaultGrade);
    
    function resetArrays(){
        creditArray.forEach(function(credit, index){
            creditArray[index] = defaultCredit;
        });
        gradeArray.forEach(function(grade, index){
            gradeArray[index] = defaultGrade;
        });
    }
    
    let gpaSubTextEl = document.querySelector("#gpa-container .sub-text");
    let totCreditSubTextEl = document.querySelector("#total-credit-container .sub-text");
    
    function setGpaAndCreditColor(gpa, totCredit){
        if(gpa >= 3.7){
            gpaSubTextEl.style.backgroundColor = "#30f54a";
        } else if(gpa >= 3.3) {
            gpaSubTextEl.style.backgroundColor = "#8cf77e";
        } else if(gpa >= 3.0) {
            gpaSubTextEl.style.backgroundColor = "#c1f85b";
        } else if(gpa >= 2.0) {
            gpaSubTextEl.style.backgroundColor = "#f8c15b";
        } else if(gpa > 0.0) {
            gpaSubTextEl.style.backgroundColor = "#f53737";
        }else {
            if(totCredit > 0){
                gpaSubTextEl.style.backgroundColor = "#f53737";
            }else {
                gpaSubTextEl.style.backgroundColor = "lightgray";
            }  
        }
    
        if(totCredit === 0){
            totCreditSubTextEl.style.backgroundColor = "lightgray";
        } else if(totCredit < 30){
            totCreditSubTextEl.style.backgroundColor = "#f8c15b";
        } else if(totCredit < 60){
            totCreditSubTextEl.style.backgroundColor = "#c1f85b";
        } else if(totCredit < 90){
            totCreditSubTextEl.style.backgroundColor = "#8cf77e";
        } else if(totCredit <= 120){
            totCreditSubTextEl.style.backgroundColor = "#30f54a";
        }
    }
    
    function calTotCreditForEachGrade(grade, crediVal, index){
        if(index >= 0 && index < 48){
            gradeArray[index] = grade;
            creditArray[index] = crediVal;
        }else {
            console.log("something wrong with calTotCreditForEachGrade(grade, crediVal, index) arguments!");
            console.log("index value is exceeded the maximum length of arrays");
        }
    }
    
    
    function calGPA(){
        let A_PlusGPV = 0;
        let A_GPV = 0;
        let A_MinusGPV = 0;
        let B_PlusGPV = 0;
        let B_GPV = 0;
        let B_MinusGPV = 0;
        let C_PlusGPV = 0;
        let C_GPV = 0;
        let C_MinusGPV = 0;
        let D_PlusGPV = 0;
        let D_GPV = 0;
        let E_GPV = 0;
        let totalGPV = 0;
        let totalCredits = 0;
        let finalGPA = 0;
        gradeArray.forEach(function(grade, index){
            switch(grade){
                case "A+" : 
                    A_PlusGPV += (4.00 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "A" : 
                    A_GPV += (4.00 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "A-" : 
                    A_MinusGPV += (3.70 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "B+" : 
                    B_PlusGPV += (3.30 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "B" : 
                    B_GPV += (3.00 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "B-" : 
                    B_MinusGPV += (2.70 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break; 
                case "C+" : 
                    C_PlusGPV += (2.30 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "C" : 
                    C_GPV += (2.00 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "C-" : 
                    C_MinusGPV += (1.70 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break; 
                case "D+" : 
                    D_PlusGPV += (1.30 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "D" : 
                    D_GPV += (1.00 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                case "E" : 
                    E_GPV += (0.00 * creditArray[index]);
                    totalCredits += creditArray[index];
                    break;
                   
            }
        });
        totalGPV = (A_PlusGPV + A_GPV + A_MinusGPV + B_PlusGPV + B_GPV + B_MinusGPV + C_PlusGPV + C_GPV + C_MinusGPV + D_PlusGPV + D_GPV + E_GPV).toFixed(3);
        
        if(totalCredits === 0){
            finalGPA = "0.00";
        } else{
            finalGPA = (totalGPV / totalCredits).toFixed(2);
        }
        
        gpaValEl.textContent = finalGPA;
        totCreditEl.textContent = totalCredits;
        setGpaAndCreditColor(finalGPA, totalCredits);
        
    }

});

document.dispatchEvent(new Event('coursesAdded'));





