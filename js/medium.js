export async function loadMediumArticles() {
    const container = document.getElementById('articles-list');
    if (!container) {
        throw new Error('Articles list container "#articles-list" was not found in DOM.');
    }

    try {
        const username = 'gorostiagamanuel';
        const rssUrl = `https://medium.com/feed/@${username}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch Medium RSS: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
            renderArticleCards(container, data.items.slice(0, 6));
        } else {
            renderEmptyNotice(container);
        }
    } catch {
        renderEmptyNotice(container);
    }
}

function renderEmptyNotice(container) {
    container.innerHTML = `
        <div class="essays-empty-card tactile-card">
            <p>Recent dispatches and critical essays can be accessed directly on <a href="https://medium.com/@gorostiagamanuel" target="_blank" rel="noopener noreferrer" class="inline-link">Medium</a>.</p>
        </div>
    `;
}

function renderArticleCards(container, articles) {
    container.innerHTML = articles.map(post => {
        const formattedDate = formatDate(post.pubDate);
        const snippet = cleanSnippet(post.description || post.content);

        return `
            <article class="tactile-card essay-card">
                <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="essay-card-inner">
                    <div class="card-taxonomy">
                        <time class="essay-date">${formattedDate}</time>
                        <span class="card-taxonomy-id">DISPATCH</span>
                    </div>
                    <h3 class="essay-title">${post.title}</h3>
                    ${snippet ? `<p class="essay-snippet">${snippet}</p>` : ''}
                    <div class="essay-card-footer">
                        <span class="essay-action-label">Read on Medium</span>
                        <span class="action-arrow">↗</span>
                    </div>
                </a>
            </article>
        `;
    }).join('');
}

function formatDate(dateString) {
    if (!dateString) return 'Undated';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch {
        return dateString;
    }
}

function cleanSnippet(rawHtml) {
    if (!rawHtml) return '';
    const temp = document.createElement('div');
    temp.innerHTML = rawHtml;
    const text = temp.textContent || temp.innerText || '';
    const trimmed = text.trim().replace(/\s+/g, ' ').replace(/—/g, ' - ');
    if (trimmed.length > 150) {
        return trimmed.substring(0, 147) + '…';
    }
    return trimmed;
}
