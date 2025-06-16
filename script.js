// script.js

// Add smooth text animation on load
document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll("main p, .feature-box");

    texts.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "all 0.8s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, i * 200);
    });
});
