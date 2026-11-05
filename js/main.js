import { initNavigation } from './nav.js';
import { renderProjects } from './projects.js';
import { loadMediumArticles } from './medium.js';
import { initTheme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    renderProjects();
    loadMediumArticles();
});
