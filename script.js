document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link, .nav-cta");
    const header = document.querySelector(".header");

    navToggle.addEventListener("click", () => {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", !isExpanded);
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});
