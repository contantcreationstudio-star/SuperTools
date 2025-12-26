document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('tools-grid');
    const searchInput = document.getElementById('search-input');
    const countLabel = document.getElementById('tool-count');
    const tagsWrapper = document.getElementById('tags-wrapper');

    // --- 1. TOOL DATABASE (Yahin add karte rahen) ---
    const tools = [
        {
            id: "age-calc",
            name: "Age Calculator",
            desc: "Calculate your exact age, next birthday, and planetary ages live.",
            link: "tools/age-calculator/", // Live server ke liye '.html' hata diya
            icon: "📅",
            category: "Personal",
            isNew: true,
            keywords: "birthday, dob, year"
        },
        // Future mein yahan aur tools aayenge...
        // { id: "love-calc", name: "Love Calculator", ... }
    ];

    // --- 2. RENDER FUNCTION (List dikhane ke liye) ---
    function render(list) {
        if (!grid) return;
        
        // Counter Update
        if(countLabel) countLabel.innerText = `${list.length} Tools`;

        if(list.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--text-light);">
                    <h3>😕 No tools found</h3>
                    <p>Try searching for something else.</p>
                </div>`;
            return;
        }

        grid.innerHTML = list.map(tool => `
            <a href="${tool.link}" class="tool-card">
                ${tool.isNew ? '<span class="new-badge">NEW</span>' : ''}
                <div class="card-icon">${tool.icon}</div>
                <h3 class="card-title">${tool.name}</h3>
                <p class="card-desc">${tool.desc}</p>
            </a>
        `).join('');
    }

    // Pehli baar sab dikhao
    render(tools);

    // --- 3. SEARCH LOGIC 🔍 ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = tools.filter(t => 
                t.name.toLowerCase().includes(term) || 
                t.desc.toLowerCase().includes(term) ||
                t.keywords.includes(term)
            );
            render(filtered);
            
            // Search karte waqt "All" tag active kar do
            updateActiveTag('All');
        });
    }

    // --- 4. TAG FILTER LOGIC 🏷️ ---
    window.filterByTag = (category) => {
        // Search clear karo
        searchInput.value = '';
        
        // Button ko active dikhao
        updateActiveTag(category);

        if(category === 'All') {
            render(tools);
        } else {
            const filtered = tools.filter(t => t.category === category);
            render(filtered);
        }
    };

    function updateActiveTag(category) {
        const chips = tagsWrapper.getElementsByClassName('tag-chip');
        for(let chip of chips) {
            if(chip.innerText === category) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        }
    }
});