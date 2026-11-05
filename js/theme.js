export function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        updateThemeDisplay(savedTheme);
    } else {
        root.setAttribute('data-theme', 'light');
        updateThemeDisplay('light');
    }

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeDisplay(newTheme);
    });

    function updateThemeDisplay(theme) {
        if (!toggle) return;
        const isDark = theme === 'dark';
        toggle.innerHTML = `
            <span class="theme-label">${isDark ? 'Paper' : 'Inkroom'}</span>
            <span class="theme-icon">${isDark ? '☼' : '☾'}</span>
        `;
        toggle.setAttribute('title', isDark ? 'Switch to Archival Paper' : 'Switch to Inkroom');
    }
}
