document.addEventListener("DOMContentLoaded", function () {
    const sections = {
        home: document.getElementById("about me"),
        about: document.getElementById("third"),
        project: document.getElementById("fourth"),
        contact: document.getElementById("contact")
    };

    function showSection(sectionId) {
        Object.values(sections).forEach(section => section.style.display = "none");
        sections[sectionId].style.display = "block";
    }

    document.querySelectorAll(".nav-links a").forEach(navLink => {
        navLink.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.textContent.toLowerCase().replace(/\s+/g, "");

            if (sections[sectionId]) {
                showSection(sectionId);
            }
        });
    });


    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 
            window.open("https://github.com/Purnima2005", "_blank"); 
        });
    });


    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

    
        const modal = document.getElementById("confirmationModal");
        modal.style.display = "block";
    });

   
    window.closeModal = function () {
        const modal = document.getElementById("confirmationModal");
        modal.style.display = "none";
    };
});
