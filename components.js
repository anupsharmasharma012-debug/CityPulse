// 1. Global Cinematic Top Header Component
class CityHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        const isHome = currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('');
        
        this.innerHTML = `
            <div style="background: #121212; padding: 12px 16px; border-radius: 14px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #1f2433;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${!isHome ? `
                        <button onclick="history.back()" style="background: #1e2330; border: 1px solid #2a324a; width: 34px; height: 34px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #fff;" title="Go Back">
                            ⬅️
                        </button>
                    ` : ''}
                    <div style="display: flex; align-items: center; gap: 6px; cursor: pointer;" onclick="alert('Location Switcher: Bhatpara, WB')">
                        <span style="font-size: 14px;">📍</span>
                        <div>
                            <div style="font-size: 8px; color: #94a3b8; font-weight: 700; letter-spacing: 0.5px;">LOCATION</div>
                            <div style="font-size: 11px; font-weight: 800; color: #f8fafc;">Bhatpara ▾</div>
                        </div>
                    </div>
                </div>

                <div style="text-align: center;">
                    <h1 style="margin: 0; color: #f8fafc; font-size: 15px; font-weight: 800; letter-spacing: -0.5px;">CityPulse <span style="color: #e50914;">⚡</span></h1>
                </div>

                <div>
                    <a href="profile.html" style="text-decoration: none; background: rgba(245,158,11,0.15); color: #fbbf24; padding: 6px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; border: 1px solid rgba(245,158,11,0.3);">
                        ❤️ Saved
                    </a>
                </div>
            </div>
        `;
    }
}
customElements.define('city-header', CityHeader);

// 2. Global Cinematic Bottom Navigation Bar Component
class BottomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #121212; border-top: 1px solid #1f2433; display: flex; justify-content: space-around; padding: 10px 0; box-shadow: 0 -10px 30px rgba(0,0,0,0.6); z-index: 1000; max-width: 700px; margin: 0 auto; right: 0;">
                <a href="index.html" style="text-decoration: none; text-align: center; color: #94a3b8; font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🏠</div>Home
                </a>
                <a href="category.html" style="text-decoration: none; text-align: center; color: #94a3b8; font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🗂️</div>Category
                </a>
                <a href="search.html" style="text-decoration: none; text-align: center; color: #94a3b8; font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🔍</div>Search
                </a>
                <a href="profile.html" style="text-decoration: none; color: #94a3b8; font-size: 10px; font-weight: 600; text-align: center;">
                    <div style="font-size: 18px; margin-bottom: 2px;">👤</div>Profile
                </a>
                <a href="notification.html" style="text-decoration: none; text-align: center; color: #94a3b8; font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🔔</div>Notice
                </a>
            </div>
            <div style="height: 60px;"></div>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);
