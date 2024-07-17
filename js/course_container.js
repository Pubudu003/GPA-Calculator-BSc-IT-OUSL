export let level3_semester1 = [];
export let level3_semester2 = [];
export let level4_semester1 = [];
export let level4_semester2 = [];
export let level5_semester1 = [];
export let level5_semester2 = [];
export let level6_semester1 = [];
export let level6_semester2 = [];

let l3s1_container = document.getElementById("level3-sem1-container");

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
    document.dispatchEvent(new Event('courseCreated'));
});


