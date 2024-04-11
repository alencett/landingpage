// Get references to elements
const roll = document.querySelector('.roll');
const sections = document.querySelectorAll('[id^="section"]'); // Select all sections with id starting with "section"
const closeBtns = document.querySelectorAll('[id^="closeBtn"]'); // Select all close buttons with id starting with "closeBtn"

// Add click event listener to each photo in the roll
roll.addEventListener('click', function(event) {
    // Hide all detail sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the detail section corresponding to the clicked photo
    let targetSectionId;
    if (event.target.closest('.roll-itema')) {
        targetSectionId = 'section4';
    } else if (event.target.closest('.roll-itemb')) {
        targetSectionId = 'section5';
    } else if (event.target.closest('.roll-itemc')) {
        targetSectionId = 'section6';
    }
    // Add more conditions for other photos and sections as needed

    // Show the target section
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        // Scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Add click event listeners to close buttons
closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', function() {
        // Hide the corresponding detail section
        sections[index].style.display = 'none';
    });
});