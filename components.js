// 1. Header Component
class CityHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="background: #ffffff; padding: 20px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.04); margin-bottom: 15px; text-align: center;">
                <h1 style="margin: 0 0 6px 0; color: #0f172a; font-size: 24px;">CityPulse 🏙️</h1>
                <p style="color: #64748b; margin: 0; font-size: 13px;">Aapka Apna Digital Family & Media Hub</p>
            </div>
        `;
    }
}
customElements.define('city-header', CityHeader);

// 2. Navigation Tabs Component
class CityTabs extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 15px;">
                <button class="tab-btn active" onclick="filterCategory('All')">🌟 All</button>
                <button class="tab-btn" onclick="filterCategory('News')">📰 News</button>
                <button class="tab-btn" onclick="filterCategory('Cartoon')">🎨 Cartoon</button>
                <button class="tab-btn" onclick="filterCategory('Entertainment')">🎬 Entertainment</button>
                <button class="tab-btn" onclick="filterCategory('Wishlist')" style="background: #fef3c7; color: #92400e;">⭐ My Wishlist</button>
            </div>
        `;
    }
}
customElements.define('city-tabs', CityTabs);

