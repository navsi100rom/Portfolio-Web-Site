const projectPic = [document.getElementById('pr-1'), document.getElementById('pr-2'), document.getElementById('pr-3'), document.getElementById('pr-4'),document.getElementById('pr-5')];
const projectName = [document.getElementById("name-1"), document.getElementById("name-2"), document.getElementById("name-3"), document.getElementById("name-4"), document.getElementById("name-5")];
const projectDesc = [document.getElementById("desc-1"), document.getElementById("desc-2"), document.getElementById("desc-3"), document.getElementById("desc-4"), document.getElementById("desc-5")];
const links = [document.getElementById("link-1"), document.getElementById("link-2"), document.getElementById("link-3"), document.getElementById("link-4"), document.getElementById("link-5")];
const show = " current-project-image corner-box";
const showName = " curr-name";
const showDesc = " curr-description"
const hide = " hide";
const previous = document.getElementById("left-arrow");
const next = document.getElementById("right-arrow")
const makePrevious = " previous-project";
const makeNext = " next-project";
const skillsButton = document.getElementById("skills-button-main");
const skillsPanel = document.getElementById("skills-panel");
const animationSkills = "black"
let elementNum=0;




function showNext () {
    links[elementNum].className += hide;
    projectName[elementNum].className += hide;
    projectDesc[elementNum].className += hide;
    projectPic[elementNum].className -= show;
    elementNum += 1 
    if (elementNum > projectPic.length-1) {
        elementNum -= projectPic.length
        
    
    }
    links[elementNum].className = -+ hide;
    projectPic[elementNum].className += show;
    projectName[elementNum].className -= hide;
    projectDesc[elementNum].className -= hide;
    projectName[elementNum].className += showName;
    projectDesc[elementNum].className += showDesc;
    
   
}

function showPrevious () {
    links[elementNum].className += hide;
    projectName[elementNum].className += hide;
    projectDesc[elementNum].className += hide;
    projectPic[elementNum].className -= show;
    elementNum -= 1 
    if (elementNum<0) {
        elementNum += projectPic.length;
    }
    links[elementNum].className -= hide;
    projectPic[elementNum].className += show;
    projectName[elementNum].className -= hide;
    projectDesc[elementNum].className -= hide;
    projectName[elementNum].className += showName;
    projectDesc[elementNum].className += showDesc;
    
}
// console.log(skillsPanel.style.animation)
// function skillsAccent () {
//     console.log(skillsPanel.style.animation)
//     if (skillsPanel.style.animation === "2s ease 0s 1 normal none running skills-accent") {
//         // skillsPanel.style.removeProperty(animation);
//         console.log(skillsPanel.style.animation)
//         skillsPanel.style.animation = "0s ease 0s 1 normal none running skills-accent";
//         console.log(skillsPanel.style.animation)
//     } 
//      skillsPanel.style.animation = "skills-accent 2s";
//      console.log(skillsPanel.style.animation);
//     // skillsPanel.style.backgroundColor = "red";
// }


// console.log(skillsPanel.style.animation)

next.addEventListener("click", showNext);



previous.addEventListener("click", showPrevious);


if(document.getElementById("skills-button-main")){
$("#skills-button-main").click(function() {
   
    
    const el = $("#skills-panel").addClass("skills-animation");
    setTimeout(function() {
        el.removeClass("skills-animation");
    }, 2000);
});
}


if (document.getElementById("skills-button-projects")){ 
    document.getElementById("skills-button-projects").addEventListener("click", function() {
    
    
    window.location.href = "./index.html";
    
    if(document.getElementById("skills-button-main")){
        $("#skills-button-main").click(function() {
            const el = $("#skills-panel").addClass("skills-animation");
            setTimeout(function() {
                el.removeClass("skills-animation");
            }, 2000);
        })};
    });
    // document.getElementById(localStorage.getItem("mykey")).style.animation = "skills-accent 2s";
   
        
        
    
};

// skillsButton.addEventListener("click", skillsAccent);

// projects[3].className -= show
// projects[0].className += show

// $(window).observe('domready', function () {
//     $(location.hash).click();
// });
















































// FOR LATER
// $("#skills-button-main").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//          $("#skills-panel").removeClass("skills-animation")  ;
//      })



// $(".line-transparent").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//     $(".lines").removeClass("animated")  
//   })
  
//   $(".line-transparent").hover(function(){
//     $(".lines").addClass("animated");        
//   })

// $(".contact").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//     $(".contact").removeClass("appear")  
//   })
  
//   $(".contact").hover(function(){
//     $(".contact").addClass("appear");        
//   })


//   $(".box").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//     $(this).removeClass("animate")  
//   })
  
//   $(".box").hover(function(){
//     $(this).addClass("animate");        
//   })

//   document.getElementById("line-1-animate").style.backgroundColor = "green";

//   document.getElementById("boxie").style.backgroundColor = "green";}
