let level3BtnEl = document.getElementById("level3-button");
let level4BtnEl = document.getElementById("level4-button");
let level5BtnEl = document.getElementById("level5-button");
let level6BtnEl = document.getElementById("level6-button");

let level3ContainerEl = document.getElementById("level3-container");
let level4ContainerEl = document.getElementById("level4-container");
let level5ContainerEl = document.getElementById("level5-container");
let level6ContainerEl = document.getElementById("level6-container");

function setAllLevelBtnDefault(){
    level3BtnEl.classList.remove("clicked");
    level4BtnEl.classList.remove("clicked");
    level5BtnEl.classList.remove("clicked");
    level6BtnEl.classList.remove("clicked");
}

function hideAllContainers(){
    level3ContainerEl.style.display = "none";
    level4ContainerEl.style.display = "none";
    level5ContainerEl.style.display = "none";
    level6ContainerEl.style.display = "none";
}

function displayContainers(button){
    hideAllContainers();
    switch(button){
        case level3BtnEl :
            level3ContainerEl.style.display = "block";
            break;
        case level4BtnEl :
            level4ContainerEl.style.display = "block";
            break;
        case level5BtnEl :
            level5ContainerEl.style.display = "block";
            break;
        case level6BtnEl :
            level6ContainerEl.style.display = "block";
            break;
        default:
            console.log("Invalid button parameter: " + button);
            break;
    }
}

function levelBtnClicked(button){
    button.addEventListener("click", function(){
        setAllLevelBtnDefault();
        button.classList.add("clicked");
        displayContainers(button);
    });
}

levelBtnClicked(level3BtnEl);
levelBtnClicked(level4BtnEl);
levelBtnClicked(level5BtnEl);
levelBtnClicked(level6BtnEl);