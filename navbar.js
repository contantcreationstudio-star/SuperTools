document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Path Fixer (Raasta theek karna)
    let path = "./";
    if (window.location.href.includes("/tools/")) {
        // Agar tool folder ke andar hain, to 2 step peeche jao
        path = "../../"; 
    }

    // 2. Header HTML
    const headerHTML = `
        <div class="nav-container">
            <a href="${path}index.html" class="logo">SuperTools ⚡</a>
            <div class="nav-actions">
                <button class="theme-btn" id="theme-toggle">🌙</button>
                <button class="hamburger" id="hamburger-btn">☰</button>
            </div>
            <div class="nav-links" id="nav-menu">
                <a href="${path}index.html">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    `;

    // 3. Footer HTML
    const footerHTML = `<p>© 2025 SuperTools. Free & Secure.</p>`;

    // Inject
    const headerEl = document.getElementById("global-header");
    const footerEl = document.getElementById("global-footer");
    if(headerEl) headerEl.innerHTML = headerHTML;
    if(footerEl) footerEl.innerHTML = footerHTML;

    // 4. Logic (Menu + Dark Mode)
    const menuBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if(menuBtn) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuBtn.innerHTML = navMenu.classList.contains("active") ? "✕" : "☰";
        });
    }

    // Dark Mode Memory
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeBtn.innerText = "☀️";
    }
    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeBtn.innerText = isDark ? "☀️" : "🌙";
    });

    // 5. Automated Schema (SEO)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": window.location.href.includes("/tools/") ? "SoftwareApplication" : "WebSite",
        "name": document.title,
        "url": window.location.href,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any"
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
});