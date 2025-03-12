document.addEventListener("DOMContentLoaded", function () {
    const sections = {
        home: document.getElementById("second"),
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

});