// Getting form element tags
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContent = document.getElementById("resumeContent") as HTMLElement;

// adding event listener for form submission
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

    // updating resume content dynamically
    resumeContent.innerHTML = `
        <div contenteditable="true" class="editable"><h3>${name}</h3></div>
        <div contenteditable="true" class="editable"><p><strong>Email:</strong> ${email}</p></div>
        <div contenteditable="true" class="editable"><p><strong>Phone:</strong> ${phone}</p></div>

        <h4>Education</h4>
        <div contenteditable="true" class="editable"><p>${degree} from ${school} (Graduated: ${gradDate})</p></div>

        <h4>Work Experience</h4>
        <div contenteditable="true" class="editable"><p>${jobTitle} at ${company} (${duration})</p></div>

        <h4>Skills</h4>
        <div contenteditable="true" class="editable"><p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p></div>
    `;

    // Select all editable sections and add event listeners
    const editableSections = resumeContent.querySelectorAll('[contenteditable="true"]');
    editableSections.forEach(section => {
        // Save content when editing is complete (on blur)
        section.addEventListener('blur', () => {
            const updatedContent = section.innerHTML;
            console.log('Content updated:', updatedContent);
            // You can add code here to store this change in local storage or send it to the server.
        });

        // Highlight the section on focus for better user experience
        section.addEventListener('focus', () => {
            section.classList.add('editing');
        });

        // Remove highlight after editing is done
        section.addEventListener('blur', () => {
            section.classList.remove('editing');
        });
    });
});

// Add CSS for better UX when editing
const style = document.createElement('style');
style.innerHTML = `
    .editable {
        border: 1px solid transparent;
        padding: 5px;
        transition: border 0.3s ease;
    }
    .editable.editing {
        border: 1px solid #007bff;
        background-color: #f8f9fa;
    }
`;
document.head.appendChild(style);
