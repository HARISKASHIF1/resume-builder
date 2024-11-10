// Getting form element tags
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContent = document.getElementById("resumeContent") as HTMLElement;
const shareableLinkContainer = document.getElementById('shareable-button') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// adding event listener for form submission
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collecting form data
    const username = (document.getElementById("username") as HTMLInputElement).value;
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
        <div contenteditable="true" class="editable"><p><strong>Username:</strong> ${username}</p></div>
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
        });
    });

    // Generate a shareable URL with username
    const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save and download as PDF
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);

        if(savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById("username") as HTMLInputElement).value = username;
            (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
            (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
            (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
            (document.getElementById("degree") as HTMLInputElement).value = resumeData.degree;
            (document.getElementById("school") as HTMLInputElement).value = resumeData.school;
            (document.getElementById("gradDate") as HTMLInputElement).value = resumeData.gradDate;
            (document.getElementById("jobTitle") as HTMLInputElement).value = resumeData.jobTitle;
            (document.getElementById("company") as HTMLInputElement).value = resumeData.company;
            (document.getElementById("duration") as HTMLInputElement).value = resumeData.duration;
            (document.getElementById("skills") as HTMLInputElement).value = resumeData.skills;
        }
    }
});