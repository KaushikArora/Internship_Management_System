import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderDashboard } from '../src/pages/dashboard.js';
import { renderEmployer } from '../src/pages/employer.js';
import { renderAdmin } from '../src/pages/admin.js';

describe('Page Renders', () => {
  let app;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    app = document.getElementById('app');
    // Mock fetch for admin
    global.fetch = vi.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders student dashboard with mock data', () => {
    renderDashboard(app);
    expect(app.innerHTML).toContain('Finish Python Data Science Assessment');
    expect(app.innerHTML).toContain('Skill Growth');
    expect(app.innerHTML).toContain('Recommended Opportunities');
  });

  it('renders employer page with multi-step wizard', () => {
    renderEmployer(app);
    expect(app.innerHTML).toContain('Create New Internship');
    expect(app.innerHTML).toContain('Basic Information');
    expect(app.innerHTML).toContain('Candidate Requirements');
    expect(app.innerHTML).toContain('ATS Pipeline Preview');
  });

  it('renders admin dashboard and fetches data', async () => {
    const cleanup = renderAdmin(app);
    expect(app.innerHTML).toContain('Overview');
    expect(app.innerHTML).toContain('Total Users');
    
    // Wait for microtasks
    await new Promise(r => setTimeout(r, 0));
    expect(global.fetch).toHaveBeenCalledWith('/api/internships');
    expect(global.fetch).toHaveBeenCalledWith('/api/hackathons');
  });
});
