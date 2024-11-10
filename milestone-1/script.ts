
const ShowHide = document.getElementById("ShowHide") as HTMLButtonElement
const skill = document.getElementById("skills") as HTMLElement

ShowHide.addEventListener ("click",()=>{
    if(skill.style.display === "none"){
        skill.style.display = "block"
    } else {
        skill.style.display = 'none'
    }
});
