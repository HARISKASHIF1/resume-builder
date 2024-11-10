// Getting form elements
const resumeForm = document.getElementById("resumeForm");
const resumeContent = document.getElementById("resumeContent");
// Handle form submission
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collecting form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;
    const gradDate = document.getElementById("gradDate").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const duration = document.getElementById("duration").value;
    const skills = document.getElementById("skills").value;
    // Dynamically updating resume content
    resumeContent.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h4>Education</h4>
        <p>${degree} from ${school} (Graduated: ${gradDate})</p>

        <h4>Work Experience</h4>
        <p>${jobTitle} at ${company} (${duration})</p>

        <h4>Skills</h4>
        <p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
    `;
});
export {};
