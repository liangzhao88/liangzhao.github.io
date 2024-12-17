document.addEventListener("DOMContentLoaded", function () {
    const topbar = document.querySelector(".topbar");
    const main_wrapper = document.querySelector(".main-wrapper-mo");
    let isAtTop = true; // 用于记录当前是否在顶部

    if (!topbar || !main_wrapper) {
        console.error("topbar 或 main-wrapper-mo 未找到");
        return;
    }

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0 && !isAtTop) {
            // 滚动回到顶部
            topbar.classList.remove("shrink");
            topbar.classList.add("full");
            main_wrapper.classList.remove("full");
            main_wrapper.classList.add("shrink");
            isAtTop = true; // 更新状态为在顶部
        } else if (currentScrollY > 0 && isAtTop) {
            // 离开顶部
            topbar.classList.add("shrink");
            topbar.classList.remove("full");
            main_wrapper.classList.add("full");
            main_wrapper.classList.remove("shrink");
            isAtTop = false; // 更新状态为离开顶部
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".topbar a");
    const sections = document.querySelectorAll(".section-mo");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});