// Universal Theme Engine
const themeStyles = document.createElement('style');
themeStyles.innerHTML = `
    body.light-mode {
        --bg-color: #f8fafc !important;
        --bg-dark: #f1f5f9 !important;
        --card-bg: #ffffff !important;
        --card-border: #e2e8f0 !important;
        --text-main: #0f172a !important;
        --text-muted: #64748b !important;
    }
    body.light-mode city-header > div, 
    body.light-mode bottom-nav > div {
        background: #ffffff !important;
        border-color: #e2e8f0 !important;
    }
    body.light-mode .channel-card .channel-gradient {
        background: linear-gradient(to top, rgba(255,255,255,0.95) 10%, rgba(255,255,255,0.2) 70%, transparent 100%) !important;
    }
    body.light-mode .grid-box, body.light-mode .story-card, body.light-mode .card {
        background: #ffffff !important;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important;
    }
`;
document.head.appendChild(themeStyles);

// Check saved theme on load
if(localStorage.getItem('citypulse_theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Toggle Function
window.toggleTheme = function() {
    const body = document.body;
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('citypulse_theme', isLight ? 'light' : 'dark');
    document.getElementById('theme-icon').innerText = isLight ? '🌙' : '☀️';
};

// 1. Global Cinematic Top Header Component
class CityHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        const isHome = currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('');
        const isLight = document.body.classList.contains('light-mode');
        
        this.innerHTML = `
            <div style="background: #121212; padding: 12px 16px; border-radius: 14px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #1f2433; transition: all 0.3s;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${!isHome ? `
                        <button onclick="history.back()" style="background: transparent; border: none; font-size: 18px; cursor: pointer; padding: 0;">⬅️</button>
                    ` : ''}
                    <div style="display: flex; align-items: center; gap: 6px; cursor: pointer;" onclick="alert('Location Switcher: Bhatpara, WB')">
                        <span style="font-size: 14px;">📍</span>
                        <div>
                            <div style="font-size: 8px; color: var(--text-muted); font-weight: 700; letter-spacing: 0.5px;">LOCATION</div>
                            <div style="font-size: 11px; font-weight: 800; color: var(--text-main);">Bhatpara ▾</div>
                        </div>
                    </div>
                </div>

                <div style="text-align: center;">
                    <h1 style="margin: 0; color: var(--text-main); font-size: 15px; font-weight: 800; letter-spacing: -0.5px;">CityPulse <span style="color: #ff2a2a;">⚡</span></h1>
                </div>

                <div style="display: flex; gap: 8px; align-items: center;">
                    <button onclick="toggleTheme()" style="background: transparent; border: none; font-size: 16px; cursor: pointer; padding: 0;" title="Switch Theme">
                        <span id="theme-icon">${isLight ? '🌙' : '☀️'}</span>
                    </button>
                    <a href="profile.html" style="text-decoration: none; background: rgba(245,158,11,0.15); color: #f59e0b; padding: 6px 8px; border-radius: 8px; font-size: 10px; font-weight: 700; border: 1px solid rgba(245,158,11,0.3);">
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
            <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #121212; border-top: 1px solid #1f2433; display: flex; justify-content: space-around; padding: 10px 0; box-shadow: 0 -10px 30px rgba(0,0,0,0.6); z-index: 1000; max-width: 700px; margin: 0 auto; right: 0; transition: all 0.3s;">
                <a href="index.html" style="text-decoration: none; text-align: center; color: var(--text-muted); font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🏠</div>Home
                </a>
                <a href="feed.html" style="text-decoration: none; text-align: center; color: var(--text-muted); font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">📺</div>Live TV
                </a>
                <a href="search.html" style="text-decoration: none; text-align: center; color: var(--text-muted); font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🔍</div>Search
                </a>
                <a href="civic.html" style="text-decoration: none; text-align: center; color: var(--text-muted); font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">🏛️</div>Shikayat
                </a>
                <a href="profile.html" style="text-decoration: none; text-align: center; color: var(--text-muted); font-size: 10px; font-weight: 600;">
                    <div style="font-size: 18px; margin-bottom: 2px;">👤</div>Profile
                </a>
            </div>
            <div style="height: 60px;"></div>
        `;
    }
}
customElements.define('bottom-nav', BottomNav);
