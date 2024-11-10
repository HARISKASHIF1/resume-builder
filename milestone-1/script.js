
var ShowHide = document.getElementById("ShowHide");
var skill = document.getElementById("skills");
ShowHide.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = 'none';
    }
});
