/* =========================
   1. SMOOTH SCROLLING
========================= */

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   2. ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =========================
   3. DARK / LIGHT MODE
========================= */

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});


/* =========================
   4. REMEMBER THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "☀️";

}


/* =========================
   5. SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    "#About, #skills, #projects, #education, #contact"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(function(element) {

    observer.observe(element);

});


/* =========================
   6. PROJECT DATA
========================= */

const projects = [

    {
        title: "Registration Web App",
        description: "A responsive registration application with form validation and Firebase authentication.",
        technologies: "HTML, CSS, JavaScript, React, Firebase",
        github: "#",
        live: "#"
    },

    {
        title: "Personal Portfolio",
        description: "A responsive personal portfolio website showcasing my skills, projects and education.",
        technologies: "HTML, CSS, JavaScript, React",
        github: "#",
        live: "#"
    }

];


/* =========================
   7. CREATE PROJECT CARDS
========================= */

const projectContainer = document.querySelector("#projects-container");

projects.forEach(function(project) {

    const projectCard = document.createElement("article");

    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <p>${project.technologies}</p>

        <a href="${project.live}" target="_blank">
            Live Demo
        </a>

        <a href="${project.github}" target="_blank">
            GitHub
        </a>
    `;

    projectContainer.appendChild(projectCard);

});


const root = ReactDOM.createRoot(
    document.getElementById("react-projects")
);

function ProjectMessage() {
    return React.createElement(
        "h3",
        null,
        "My Projects"
    );
}

root.render(
    React.createElement(ProjectMessage)
);


const root = ReactDOM.createRoot(
    document.getElementById("react-projects")
);

function ProjectMessage() {
    return React.createElement(
        "h3",
        null,
        "My Projects"
    );
}

root.render(
    React.createElement(ProjectMessage)
);