let ouslBtnEl = document.getElementById("ousl");
let dropMenuEl = document.querySelector(".drop-menu");
    
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
function handleClick(){
    if(dropMenuEl.style.display === "block"){
        dropMenuEl.style.display = "none";
    }else {
        dropMenuEl.style.display = "block";
    }
}

function handleMenuBehavior(){
    let width = window.innerWidth;
    if(width > 767){
        ouslBtnEl.addEventListener("mouseover", function(){
            dropMenuEl.style.display = "block";
        });
        ouslBtnEl.addEventListener("mouseout", function(){
            dropMenuEl.style.display = "none";
        });

        ouslBtnEl.removeEventListener("click", handleClick);
    }else {
        ouslBtnEl.addEventListener("click", handleClick);

        ouslBtnEl.removeEventListener("mouseover", function(){
            dropMenuEl.style.display = "block";
        });
        ouslBtnEl.removeEventListener("mouseout", function(){
            dropMenuEl.style.display = "none";
        });
    }
}

handleMenuBehavior();

window.addEventListener("resize", function(){
    handleMenuBehavior();
});
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


document.addEventListener("DOMContentLoaded", function(){
    let tabs = document.querySelectorAll("#nav-bar .inWork");
    let pageContents = document.querySelectorAll(".content-container");

    tabs.forEach(function(tab, index){
        if(index != 2){
            tab.addEventListener("click", function(){
                tabs.forEach(function(t){
                    t.classList.remove("active-tab");
                });
                pageContents.forEach(function(content){
                    content.style.display = "none";
                });

                tab.classList.add("active-tab");
                if(index === 0){
                    pageContents[0].style.display = "flex";
                } else if(index === 1) {
                    pageContents[1].style.display = "flex";
                }
            });
        }else {
           
        }
    });
});

