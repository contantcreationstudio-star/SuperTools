document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Path Fixer
    let path = "./";
    if (window.location.href.includes("/tools/") || window.location.href.includes("/age-calculator/")) {
        path = "../../"; 
    }

    // 2. NEW PROFESSIONAL HEADER HTML
    const headerHTML = `
        <div class="nav-container">
            <a href="${path}index.html" class="logo">
                <span class="logo-icon">⚡</span> Super<span class="logo-highlight">Tools</span>
            </a>
            
            <div class="nav-right">
                
                <div class="nav-links" id="nav-menu">
                    <a href="${path}index.html" class="nav-item active">Home</a>
                    <a href="#" class="nav-item">Most Popular</a>
                    <a href="#" class="nav-item">About</a>
                </div>

                <div class="nav-divider"></div>

                <div class="action-buttons">
                    <button class="theme-btn" id="theme-toggle" aria-label="Toggle Dark Mode">
                        <span class="theme-icon">🌙</span>
                    </button>
                    <a href="#" class="github-btn">GitHub 😺</a>
                </div>

                <button class="hamburger" id="hamburger-btn">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    `;

    const footerHTML = `<p>© 2025 SuperTools. Crafted for You. 🚀</p>`;

    // Inject
    const headerEl = document.getElementById("global-header");
    const footerEl = document.getElementById("global-footer");
    if(headerEl) headerEl.innerHTML = headerHTML;
    if(footerEl) footerEl.innerHTML = footerHTML;

    // 3. Logic (Menu + Dark Mode)
    const menuBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Mobile Menu Toggle
    if(menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("open");
        });
    }

    // Dark Mode Logic
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        if(themeBtn) themeBtn.innerHTML = "☀️";
    }

    if(themeBtn) {
        themeBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeBtn.innerHTML = isDark ? "☀️" : "🌙";
        });
    }
});