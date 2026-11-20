export const projectCategories = [
    { id: 'all', label: 'All' },
    { id: 'games', label: 'Games' },
    { id: 'tools', label: 'Tools' },
    { id: 'art-pipelines', label: 'Art Pipelines' },
    { id: 'event-production', label: 'Event Production' }
];

export const projects = [
    {
        id: 'tavern',
        category: 'games',
        isFeature: true,
        title: 'The Tavern at the End of the Road',
        subtitle: 'A Soulslike Deckbuilder',
        role: 'Director & Producer',
        type: 'Game · Steam',
        description: 'SOULS-LIKE Deckbuilder. Every run is the final tale of an Errant. Battle through a cursed road, slay mythical creatures and corrupted heroes, discover forgotten keepsakes, and reach the end to decide the fate of the world.',
        media: {
            url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3933280/0cba8edcb97339944512bfc1af5f5f1ef34d5f8e/capsule_616x353.jpg?t=1786419545',
            alt: 'The Tavern at the End of the Road: Steam Capsule'
        },
        links: [
            {
                label: 'View on Steam',
                url: 'https://store.steampowered.com/app/3933280/The_Tavern_at_the_End_of_the_Road'
            }
        ],
        tags: ['Soulslike', 'Deckbuilder', 'Roguelike', 'Production', 'Direction']
    },
    {
        id: 'yo-fire',
        category: 'games',
        isFeature: false,
        title: "Yo! This Gameplay's Fire",
        subtitle: 'Fast-Paced Indie Action',
        role: 'Solo Developer',
        type: 'Game',
        description: 'A solo-developed action title pushing crisp gameplay feel, responsive mechanics, and explosive aesthetics.',
        links: [],
        tags: ['Action', 'Solo Development', 'Game Design', 'Combat Mechanics']
    },
    {
        id: 'monster-journeys',
        category: 'games',
        isFeature: false,
        title: 'Monster Journeys',
        subtitle: 'Tabletop Board Game Digital Prototype',
        role: 'Creator & Developer',
        type: 'Game · Web Prototype',
        description: 'A 1-to-4 player monster-catching tabletop board game prototype played in the browser, featuring an interconnected card-node map, 50 monsters, turn-based 1v1 combat, luck rerolls, and a Grand Tournament endgame.',
        links: [
            {
                label: 'Play Prototype',
                url: 'https://monster-journeys.vercel.app/'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/ManuelGorostiaga/monster-journeys'
            }
        ],
        tags: ['Board Game', 'Prototype', 'HTML5', 'Turn-Based']
    },
    {
        id: 'playground-zero',
        category: 'games',
        isFeature: false,
        title: 'PLAYGROUND//ZERO',
        subtitle: 'The Conviction Apocalypse',
        role: 'Creator & Developer',
        type: 'Game · Roguelike',
        description: 'A Caves of Qud-inspired tactical CRPG roguelike set in Metro City where human conviction dictates physics. Features CP437/Unicode glyph rendering, four-operative grid battles, and deterministic PV/AV/DV combat with zero dice rolls.',
        links: [
            {
                label: 'Play Prototype',
                url: 'https://playground-zero-nu.vercel.app/'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/ManuelGorostiaga/qud-playground-zero'
            }
        ],
        tags: ['Roguelike', 'Tactical CRPG', 'Qud-like', 'Systems Design']
    },
    {
        id: 'steampreview',
        category: 'tools',
        isFeature: false,
        title: 'steamPreview',
        subtitle: 'Steam Store Page Simulator & Creative Rules Checker',
        role: 'Creator & Developer',
        type: 'Tool · Web App',
        description: "A simulator and audit tool for game developers to preview and test Steam store assets—capsules, hero graphics, trailers, screenshots, BBCode descriptions, and metadata—against Steam's formatting and graphical asset rules.",
        links: [
            {
                label: 'Open App',
                url: 'https://steampreview.vercel.app/'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/ManuelGorostiaga/steampreview'
            }
        ],
        tags: ['Steamworks', 'React', 'TypeScript', 'Storefront QA']
    },
    {
        id: 'blenderkit-unity',
        category: 'tools',
        isFeature: false,
        title: 'BlenderKit Materials for Unity',
        subtitle: 'Unity Editor Extension',
        role: 'Creator & Developer',
        type: 'Tool · Unity Editor',
        description: 'A Unity Editor extension integrating the BlenderKit online PBR materials library. Search and filter materials, unpack .blend datablocks headlessly via Blender into packed MetallicGloss maps, and drag-and-drop onto 3D objects in URP, HDRP, or Built-in.',
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/ManuelGorostiaga/BlenderKit-Unity'
            }
        ],
        tags: ['Unity Editor', 'Blender', 'PBR Materials', 'URP / HDRP']
    },
    {
        id: 'sketchfab-importer',
        category: 'tools',
        isFeature: false,
        title: 'Sketchfab Browser & Importer',
        subtitle: 'Unity Editor Package',
        role: 'Creator & Developer',
        type: 'Tool · Unity Editor',
        description: "An in-editor Unity browser and importer for Sketchfab's 3D catalog. Filter by license via the Sketchfab Data API v3, preview thumbnails and model stats, download and extract archives, and automatically log Markdown credits to Assets/CREDITS.md.",
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/ManuelGorostiaga/unity-sketchfab-importer'
            }
        ],
        tags: ['Unity Editor', 'Sketchfab API', 'UPM Package', 'Asset Import']
    },
    {
        id: 'crestfallen',
        category: 'studio',
        isFeature: false,
        title: 'Crestfallen Game Studio',
        subtitle: 'Independent Game Studio',
        role: 'Co-Founder',
        type: 'Game Studio',
        description: 'Independent game development studio founded to craft evocative worlds, tactical card systems, and distinct narrative-driven experiences.',
        links: [
            {
                label: 'Visit Studio Website',
                url: 'https://crestfallen.games/'
            }
        ],
        tags: ['Studio Management', 'Card Games', 'Creative Direction']
    },
    {
        id: 'indie-space',
        category: 'event-production',
        isFeature: false,
        title: 'Indie Game Space @ Crack Bang Boom',
        subtitle: 'Convention Showcase & Booth',
        role: 'Co-Producer',
        type: 'Event / Showcase',
        description: 'Curated and co-produced an interactive showcase space spotlighting independent game creators, playable demos, and tabletop designers at Crack Bang Boom.',
        links: [],
        tags: ['Event Production', 'Indie Showcase', 'Curation']
    }
];

function renderActionLinks(links, projectTitle, emphasizeFirst = false) {
    if (!links || links.length === 0) {
        return '';
    }

    const linksHtml = links.map((link, index) => {
        const isPrimary = emphasizeFirst && index === 0;
        const className = isPrimary ? 'card-action-link primary-card-action' : 'card-action-link';
        const accessibleName = `${link.label} — ${projectTitle}`;
        return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${className}" aria-label="${accessibleName}">
            <span>${link.label}</span>
            <span class="action-arrow" aria-hidden="true">↗</span>
        </a>`;
    }).join('');

    return `<div class="card-actions-row">${linksHtml}</div>`;
}

function renderLeadCard(project, categoryId) {
    const tagsHtml = project.tags.map(tag => `<span class="card-tag-pill">${tag}</span>`).join('');
    const actionsHtml = renderActionLinks(project.links, project.title, true);

    return `
        <article class="tactile-card lead-card" id="project-${categoryId}-${project.id}">
            <div class="card-taxonomy">
                <span class="card-taxonomy-badge">${project.type}</span>
            </div>

            <div class="lead-card-grid">
                <div class="lead-card-media-col">
                    <figure class="card-plate-figure">
                        <div class="card-plate-mat">
                            <div class="card-plate-frame">
                                <img src="${project.media.url}" alt="${project.media.alt}" class="card-plate-img" loading="lazy" />
                            </div>
                        </div>
                    </figure>
                </div>

                <div class="lead-card-content-col">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-subtitle">${project.role} · <em>${project.subtitle}</em></p>
                    <p class="card-description">${project.description}</p>
                    <div class="card-tags-list">${tagsHtml}</div>
                    ${actionsHtml}
                </div>
            </div>
        </article>
    `;
}

function renderSecondaryCard(project, categoryId) {
    const tagsHtml = project.tags.map(tag => `<span class="card-tag-pill">${tag}</span>`).join('');
    const actionsHtml = renderActionLinks(project.links, project.title, false);

    return `
        <article class="tactile-card secondary-card" id="project-${categoryId}-${project.id}">
            <div class="card-taxonomy">
                <span class="card-taxonomy-badge">${project.type}</span>
            </div>

            <div class="secondary-card-body">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-subtitle">${project.role} · <em>${project.subtitle}</em></p>
                <p class="card-description">${project.description}</p>
            </div>

            <div class="secondary-card-footer">
                <div class="card-tags-list">${tagsHtml}</div>
                ${actionsHtml}
            </div>
        </article>
    `;
}

function renderArtPipelinesPlaceholder() {
    return `
        <article class="tactile-card secondary-card placeholder-card">
            <div class="card-taxonomy">
                <span class="card-taxonomy-badge">Art Pipelines · Archive</span>
            </div>

            <div class="secondary-card-body">
                <h3 class="card-title">Art Pipelines</h3>
                <p class="card-subtitle">Production Workflows &amp; Technical Art</p>
                <p class="card-description">Breakdowns of 2D/3D art workflows, automated asset processing scripts, and engine integration pipelines will be documented here soon.</p>
            </div>

            <div class="secondary-card-footer">
                <div class="card-tags-list">
                    <span class="card-tag-pill">Technical Art</span>
                    <span class="card-tag-pill">Asset Automation</span>
                    <span class="card-tag-pill">Coming Soon</span>
                </div>
            </div>
        </article>
    `;
}

function renderPanelContent(categoryId) {
    if (categoryId === 'art-pipelines') {
        return renderArtPipelinesPlaceholder();
    }

    const filtered = categoryId === 'all'
        ? projects
        : projects.filter(project => project.category === categoryId);

    const featureProject = filtered.find(project => project.isFeature);
    const secondaryProjects = filtered.filter(project => !project.isFeature);

    let html = '';

    if (featureProject) {
        html += renderLeadCard(featureProject, categoryId);
    }

    if (secondaryProjects.length > 0) {
        html += `<div class="tactile-card-grid">${secondaryProjects.map(project => renderSecondaryCard(project, categoryId)).join('')}</div>`;
    }

    return html;
}

function hasFocusableDescendant(element) {
    return Boolean(element.querySelector('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
}

export function renderProjects() {
    const container = document.getElementById('projects-showcase');
    if (!container) {
        throw new Error('Projects showcase container "#projects-showcase" was not found in DOM.');
    }

    const initialCategoryId = projectCategories[0].id;

    const tabsHtml = projectCategories.map(category => {
        const isSelected = category.id === initialCategoryId;
        return `<button
            type="button"
            class="projects-tab"
            role="tab"
            id="projects-tab-${category.id}"
            data-category="${category.id}"
            aria-selected="${isSelected}"
            tabindex="${isSelected ? '0' : '-1'}"
        >${category.label}</button>`;
    }).join('');

    const panelsHtml = projectCategories.map(category => {
        const isSelected = category.id === initialCategoryId;
        const hiddenAttr = isSelected ? '' : 'hidden="until-found"';
        const contentHtml = renderPanelContent(category.id);

        return `<div
            class="projects-tabpanel"
            role="tabpanel"
            id="projects-panel-${category.id}"
            data-category="${category.id}"
            aria-labelledby="projects-tab-${category.id}"
            ${hiddenAttr}
        ><div class="projects-tabpanel-inner catalogue-stream">${contentHtml}</div></div>`;
    }).join('');

    container.innerHTML = `
        <div class="projects-tabs">
            <div class="projects-tablist" role="tablist" aria-label="Project categories">
                ${tabsHtml}
            </div>
            <div class="projects-tabpanels">
                ${panelsHtml}
            </div>
        </div>
    `;

    const tablist = container.querySelector('.projects-tablist');
    const tabs = Array.from(container.querySelectorAll('.projects-tab'));
    const panels = Array.from(container.querySelectorAll('.projects-tabpanel'));

    if (!tablist || tabs.length === 0 || panels.length === 0) {
        throw new Error('Failed to initialize project tabs and panels.');
    }

    function activateTab(categoryId, { focusTab = false, scrollTab = true } = {}) {
        const nextTab = tabs.find(tab => tab.dataset.category === categoryId);
        if (!nextTab) {
            throw new Error(`Unknown project category tab "${categoryId}".`);
        }

        for (const tab of tabs) {
            const isSelected = tab === nextTab;
            tab.setAttribute('aria-selected', String(isSelected));
            tab.tabIndex = isSelected ? 0 : -1;
        }

        for (const panel of panels) {
            const isActive = panel.dataset.category === categoryId;
            if (isActive) {
                panel.removeAttribute('hidden');
                if (!hasFocusableDescendant(panel)) {
                    panel.tabIndex = 0;
                } else {
                    panel.removeAttribute('tabindex');
                }
            } else {
                panel.setAttribute('hidden', 'until-found');
                panel.removeAttribute('tabindex');
            }
        }

        if (scrollTab) {
            nextTab.scrollIntoView({ block: 'nearest', inline: 'nearest', container: 'nearest' });
        }

        if (focusTab) {
            nextTab.focus();
        }
    }

    tablist.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('.projects-tab');
        if (!clickedTab) {
            return;
        }
        activateTab(clickedTab.dataset.category);
    });

    tablist.addEventListener('keydown', (event) => {
        const currentIndex = tabs.indexOf(document.activeElement);
        if (currentIndex === -1) {
            return;
        }

        let targetIndex = null;
        if (event.key === 'ArrowRight') {
            targetIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft') {
            targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
            targetIndex = 0;
        } else if (event.key === 'End') {
            targetIndex = tabs.length - 1;
        }

        if (targetIndex === null) {
            return;
        }

        event.preventDefault();
        activateTab(tabs[targetIndex].dataset.category, { focusTab: true });
    });

    for (const panel of panels) {
        panel.addEventListener('beforematch', () => {
            activateTab(panel.dataset.category, { focusTab: false, scrollTab: true });
        });
    }
}
