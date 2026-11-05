export const projects = [
    {
        id: 'tavern',
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
        id: 'crestfallen',
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

export function renderProjects() {
    const container = document.getElementById('projects-showcase');
    if (!container) {
        throw new Error('Projects showcase container "#projects-showcase" was not found in DOM.');
    }

    const featureProject = projects.find(p => p.isFeature);
    const secondaryProjects = projects.filter(p => !p.isFeature);

    let html = '';

    if (featureProject) {
        const linkHtml = featureProject.links.length > 0
            ? `<a href="${featureProject.links[0].url}" target="_blank" rel="noopener noreferrer" class="card-action-link primary-card-action">
                 <span>${featureProject.links[0].label}</span>
                 <span class="action-arrow">↗</span>
               </a>`
            : '';

        const tagsHtml = featureProject.tags.map(tag => `<span class="card-tag-pill">${tag}</span>`).join('');

        html += `
            <article class="tactile-card lead-card" id="project-${featureProject.id}">
                <div class="card-taxonomy">
                    <span class="card-taxonomy-badge">${featureProject.type}</span>
                    <span class="card-taxonomy-id">LEAD PROJECT</span>
                </div>

                <div class="lead-card-grid">
                    <div class="lead-card-media-col">
                        <figure class="card-plate-figure">
                            <div class="card-plate-mat">
                                <div class="card-plate-frame">
                                    <img src="${featureProject.media.url}" alt="${featureProject.media.alt}" class="card-plate-img" loading="lazy" />
                                </div>
                            </div>
                        </figure>
                    </div>

                    <div class="lead-card-content-col">
                        <h3 class="card-title">${featureProject.title}</h3>
                        <p class="card-subtitle">${featureProject.role} · <em>${featureProject.subtitle}</em></p>

                        <p class="card-description">${featureProject.description}</p>

                        <div class="card-tags-list">
                            ${tagsHtml}
                        </div>

                        ${linkHtml ? `<div class="card-actions-row">${linkHtml}</div>` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    if (secondaryProjects.length > 0) {
        html += `<div class="tactile-card-grid">`;

        html += secondaryProjects.map((project, index) => {
            const linkHtml = project.links.length > 0
                ? `<a href="${project.links[0].url}" target="_blank" rel="noopener noreferrer" class="card-action-link">
                     <span>${project.links[0].label}</span>
                     <span class="action-arrow">↗</span>
                   </a>`
                : '';

            const tagsHtml = project.tags.map(tag => `<span class="card-tag-pill">${tag}</span>`).join('');

            return `
                <article class="tactile-card secondary-card" id="project-${project.id}">
                    <div class="card-taxonomy">
                        <span class="card-taxonomy-badge">${project.type}</span>
                        <span class="card-taxonomy-id">CARD 0${index + 1}</span>
                    </div>

                    <div class="secondary-card-body">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-subtitle">${project.role} · <em>${project.subtitle}</em></p>
                        <p class="card-description">${project.description}</p>
                    </div>

                    <div class="secondary-card-footer">
                        <div class="card-tags-list">
                            ${tagsHtml}
                        </div>
                        ${linkHtml ? `<div class="card-actions-row">${linkHtml}</div>` : ''}
                    </div>
                </article>
            `;
        }).join('');

        html += `</div>`;
    }

    container.innerHTML = html;
}
