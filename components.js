// 1. Global Top Header Component
class CityHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="background: #ffffff; padding: 12px 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 8px; cursor: pointer;" onclick="alert('Location Switcher: Bhatpara, WB')">
                    <span style="font-size: 18px;">📍</span>
                    <div>
                        <div style="font-size: 10px; color: #64748b; font-weight: 700;">LOCATION</div>
                        <div style="font-size: 12px; font-weight: 800; color: #0f172a;">Bhatpara ▾</div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <h1 style="margin: 0; color: #0f172a; font-size: 17px; font-weight: 800;">CityPulse 🏙️</h1>
                </div>
                <div>
                    <a href="profile.html" style="text-decoration: none; background: #fef3c7; color: #d97706; padding: 6px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                        ❤️ Wishlist
                    </a>
                </div>
            </div>
        `;
    }
}
customElements.define('city-header', CityHeader);

// 2. Bottom Navigation Bar Component (Exact Order: Home -> Category -> Search -> Profile -> Notification)
class BottomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #ffffff; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-around; padding: 10px 0; box-shadow: 0 -4px 10px rgba(0,0,0,0.03); z-index: 1000; max-width: 700px; margin: 0 auto; right: 0;">
                <a href="index.html" style="text-decoration: none; text-align: center; color: #64748b; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🏠</div>Home
                </a>
                <a href="category.html" style="text-decoration: none; text-align: center; color: #64748b; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🗂️</div>Category
                </a>
                <a href="search.html" style="text-decoration: none; text-align: center; color: #64748b; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🔍</div>Search
                </a>
                <a href="profile.html" style="text-decoration: none; text-align: center; color: #64748b; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">👤</div>Profile
                </a>
                <a href="notification.html" style="text-decoration: none; text-align: center; color: #64748b; font-size: 11px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🔔</div>Notice
                </a>
            </div>
            <div style="height: 60px;"></div>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);
