// ===== Internship HQ — Client-Side Router =====
const routes = {};
let currentCleanup = null;

export function registerRoute(path, renderFn) {
  routes[path] = renderFn;
}

export function navigate(path) {
  window.history.pushState({}, '', path);
  renderCurrentRoute();
}

export function renderCurrentRoute() {
  const path = window.location.pathname;
  const app = document.getElementById('app');
  
  // Cleanup previous page
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup();
    currentCleanup = null;
  }
  
  const renderFn = routes[path] || routes['/'];
  if (renderFn) {
    const result = renderFn(app);
    if (typeof result === 'function') {
      currentCleanup = result;
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle browser back/forward
window.addEventListener('popstate', renderCurrentRoute);

// Intercept link clicks for SPA navigation
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (link && link.getAttribute('href').startsWith('/') && !link.getAttribute('target')) {
    e.preventDefault();
    navigate(link.getAttribute('href'));
  }
});
