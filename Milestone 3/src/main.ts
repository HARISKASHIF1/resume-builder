// Getting form elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContent = document.getElementById("resumeContent") as HTMLElement;

// Handle form submission
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collecting form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const gradDate = (document.getElementById("gradDate") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const duration = (document.getElementById("duration") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

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
