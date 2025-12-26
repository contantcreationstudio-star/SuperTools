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

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Path Fixer (Wahi purana logic)
    let path = "./";
    if (window.location.href.includes("/tools/") || window.location.href.includes("/age-calculator/")) {
        path = "../../"; 
    }

    // Header code yahan rahega (Jo humne pichle step me banaya tha)...
    // ...

    // 2. NEW PROFESSIONAL FOOTER HTML
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-col">
                <a href="${path}index.html" class="logo" style="margin-bottom:15px; display:inline-block;">
                    ⚡ SuperTools
                </a>
                <p>We provide free, fast, and secure online tools for daily use. No installation required.</p>
            </div>

            <div class="footer-col">
                <h3>Discover</h3>
                <div class="footer-links">
                    <a href="${path}index.html">Home</a>
                    <a href="#">Most Popular</a>
                    <a href="#">New Tools</a>
                    <a href="#">Blog (Coming Soon)</a>
                </div>
            </div>

            <div class="footer-col">
                <h3>Top Tools</h3>
                <div class="footer-links">
                    <a href="${path}tools/age-calculator/">Age Calculator</a>
                    <a href="#">Love Calculator</a>
                    <a href="#">Image Resizer</a>
                    <a href="#">Password Gen</a>
                </div>
            </div>

            <div class="footer-col">
                <h3>Legal & Help</h3>
                <div class="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2025 SuperTools. Made with ❤️ for the Web.</p>
        </div>
    `;

    // Inject Footer
    const footerEl = document.getElementById("global-footer");
    if(footerEl) footerEl.innerHTML = footerHTML;

    // ... Baaki Navbar ka Logic (Menu/Dark Mode) same rahega ...
});