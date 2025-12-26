document.addEventListener("DOMContentLoaded", function () {

    let path = "./";
    if (window.location.href.includes("/tools/") || window.location.href.includes("/age-calculator/")) {
        path = "../../";
    }

    const headerHTML = `
        <div class="nav-overlay" id="nav-overlay"></div>
        <div class="nav-container">
            <a href="${path}index.html" class="logo">
                <div class="logo-box">⚡</div> 
                <span class="logo-text">Super<span class="logo-highlight">Tools</span></span>
            </a>
            
            <div class="nav-right">
                
                <nav class="nav-links" id="nav-menu">
                    <div class="mobile-header">
                        <span class="mobile-logo">⚡ SuperTools</span>
                        <button class="close-menu" id="close-menu-btn">&times;</button>
                    </div>
                    <a href="${path}index.html" class="nav-item">Home</a>
                    <a href="#" class="nav-item">Most Popular</a>
                    <a href="#" class="nav-item">New & Fresh</a>
                    <div class="mobile-divider"></div>
                    <a href="#" class="nav-cta-mobile">All Tools</a>
                </nav>

                <div class="desktop-actions">
                    <button class="theme-btn" id="theme-toggle" aria-label="Toggle Dark Mode">
                        <span class="theme-icon">🌙</span>
                    </button>
                    <a href="#tools-grid" class="nav-cta">Explore Tools</a>
                    
                    <button class="hamburger" id="hamburger-btn">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Footer Code (Same as before)
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-col">
                <a href="${path}index.html" class="logo" style="margin-bottom:15px; display:inline-block;">⚡ SuperTools</a>
                <p>We provide free, fast, and secure online tools for daily use.</p>
            </div>
            <div class="footer-col">
                <h3>Discover</h3>
                <div class="footer-links">
                    <a href="${path}index.html">Home</a>
                    <a href="#">Popular Tools</a>
                    <a href="#">New Additions</a>
                </div>
            </div>
            <div class="footer-col">
                <h3>Top Tools</h3>
                <div class="footer-links">
                    <a href="${path}tools/age-calculator/">Age Calculator</a>
                    <a href="#">Love Calculator</a>
                    <a href="#">Image Resizer</a>
                </div>
            </div>
            <div class="footer-col">
                <h3>Legal</h3>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom"><p>© 2025 SuperTools. Made with ❤️.</p></div>
    `;

    const headerEl = document.getElementById("global-header");
    const footerEl = document.getElementById("global-footer");
    if (headerEl) headerEl.innerHTML = headerHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Logic
    const menuBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("nav-overlay");
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    function toggleMenu() {
        const isActive = navMenu.classList.contains("active");

        if (isActive) {
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
            menuBtn.classList.remove("active");
            body.style.overflow = "auto";
        } else {
            navMenu.classList.add("active");
            overlay.classList.add("active");
            menuBtn.classList.add("active");
            body.style.overflow = "hidden";
        }
    }

    if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
    if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", toggleMenu);

    // Active Link Highlight
    const currentUrl = window.location.href;
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(link => {
        if (link.href === currentUrl) link.classList.add('active');
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        if (themeBtn) themeBtn.innerHTML = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeBtn.innerHTML = isDark ? "☀️" : "🌙";
        });
    }
});