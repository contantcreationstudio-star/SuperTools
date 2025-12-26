document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('tools-grid');
    const search = document.getElementById('search-input');
    let tools = [];

    fetch('tools.json').then(res => res.json()).then(data => {
        tools = data;
        render(tools);
    });

    function render(list) {
        grid.innerHTML = list.map(tool => `
            <a href="${tool.link}" class="tool-card">
                <div style="font-size:2rem;">${tool.icon}</div>
                <h3>${tool.name}</h3>
                <p style="font-size:0.9rem; color:var(--text-light);">${tool.desc}</p>
            </a>
        `).join('');
    }

    search.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        render(tools.filter(t => t.name.toLowerCase().includes(term) || t.keywords.includes(term)));
    });
});