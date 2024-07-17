export let level3_semester1 = [];
export let level3_semester2 = [];
export let level4_semester1 = [];
export let level4_semester2 = [];
export let level5_semester1 = [];
export let level5_semester2 = [];
export let level6_semester1 = [];
export let level6_semester2 = [];

let l3s1_container = document.getElementById("level3-sem1-container");
let l3s2_container = document.getElementById("level3-sem2-container");
let l4s1_container = document.getElementById("level4-sem1-container");
let l4s2_container = document.getElementById("level4-sem2-container");
let l5s1_container = document.getElementById("level5-sem1-container");
let l5s2_container = document.getElementById("level5-sem2-container");
let l6s1_container = document.getElementById("level6-sem1-container");
let l6s2_container = document.getElementById("level6-sem2-container");


let container = ``;
let course = ` <div class="course-container">
                    <div class="course-details">
                        <div class="course-id">
                            <span>ID</span>
                        </div>
                        <div class="credit-val">
                            <span class="value">0</span><span> Credit</span>
                        </div>
                        <div class="course-name">
                            <span>COURSE NAME</span>
                        </div>
                    </div>

                    <div class="btn-area">
                        <div class="grade-selection-btn">
                            <span>grade 🥇</span>
                        </div>
                    </div>
                </div>
                <div class="grade-list-container">
                    <div class="empty-container"></div>
                    <div class="list-container">
                        <ul class="grade-list hidden">
                        </ul>
                    </div>  
                </div> `;

function createCourseContainer(courseArr, courseCont){
    for(let i in courseArr){
        container += course;
    }
    document.getElementById(courseCont.id).innerHTML = container;
    container = ``;
}

document.addEventListener('coursesAdded', function(){

    createCourseContainer(level3_semester1, l3s1_container);
    createCourseContainer(level3_semester2, l3s2_container);
    createCourseContainer(level4_semester1, l4s1_container);
    createCourseContainer(level4_semester2, l4s2_container);
    createCourseContainer(level5_semester1, l5s1_container);
    createCourseContainer(level5_semester2, l5s2_container);
    createCourseContainer(level6_semester1, l6s1_container);
    createCourseContainer(level6_semester2, l6s2_container);
    document.dispatchEvent(new Event('courseCreated'));
});


