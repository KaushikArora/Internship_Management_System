// ===== Main Entry Point =====
import './styles.css';
import { registerRoute, renderCurrentRoute } from './router.js';

// Import Pages
import { renderLanding } from './pages/landing.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderAssessment } from './pages/assessment.js';
import { renderEmployer } from './pages/employer.js';
import { renderProfile } from './pages/profile.js';
import { renderInternships } from './pages/internships.js';
import { renderAdmin } from './pages/admin.js';
import { renderHackathons } from './pages/hackathons.js';

// Register routes
registerRoute('/', renderLanding);
registerRoute('/dashboard', renderDashboard);
registerRoute('/assessment', renderAssessment);
registerRoute('/employer', renderEmployer);
registerRoute('/profile', renderProfile);
registerRoute('/internships', renderInternships);
registerRoute('/admin', renderAdmin);
registerRoute('/hackathons', renderHackathons);

// Initial render
document.addEventListener('DOMContentLoaded', renderCurrentRoute);
