import { navbar, footer, initMobileMenu, initScrollHeader } from '../components.js';
import { showToast } from '../data.js';

export function renderAdmin(app) {
  app.innerHTML = `
  ${navbar('admin', true)}
  <main class="max-w-[1440px] mx-auto px-margin-desktop py-12 page-enter min-h-[calc(100vh-80px)] flex flex-col md:flex-row gap-gutter">
    <aside class="w-full md:w-64 shrink-0">
      <div class="flex flex-col gap-2 sticky top-24">
        <button class="admin-tab active bg-primary-container text-on-primary-container px-4 py-3 rounded-lg font-bold text-left flex items-center gap-3" data-tab="overview"><span class="material-symbols-outlined">dashboard</span> Overview</button>
        <button class="admin-tab text-on-surface-variant hover:bg-surface-container hover:text-primary px-4 py-3 rounded-lg font-bold text-left flex items-center gap-3 transition-colors" data-tab="internships"><span class="material-symbols-outlined">work</span> Internships</button>
        <button class="admin-tab text-on-surface-variant hover:bg-surface-container hover:text-primary px-4 py-3 rounded-lg font-bold text-left flex items-center gap-3 transition-colors" data-tab="hackathons"><span class="material-symbols-outlined">emoji_events</span> Hackathons</button>
      </div>
    </aside>
    <section class="flex-grow bg-white border border-border-subtle rounded-xl p-8" id="admin-content">
      <h1 class="font-headline-lg text-headline-lg mb-6">Loading...</h1>
    </section>
  </main>
  ${footer()}`;

  initMobileMenu();
  const cleanup = initScrollHeader();

  const content = document.getElementById('admin-content');
  const tabs = document.querySelectorAll('.admin-tab');

  const renderOverview = async () => {
    content.innerHTML = `
      <h2 class="font-headline-lg text-headline-lg mb-6">System Overview</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-surface-container-low p-6 rounded-xl border border-border-subtle"><p class="text-on-surface-variant font-bold mb-2">Total Users</p><p class="text-3xl font-metric-num text-primary font-bold">15,234</p></div>
        <div class="bg-surface-container-low p-6 rounded-xl border border-border-subtle"><p class="text-on-surface-variant font-bold mb-2">Active Internships</p><p class="text-3xl font-metric-num text-primary font-bold" id="stat-internships">...</p></div>
        <div class="bg-surface-container-low p-6 rounded-xl border border-border-subtle"><p class="text-on-surface-variant font-bold mb-2">Active Hackathons</p><p class="text-3xl font-metric-num text-gamify-indigo font-bold" id="stat-hackathons">...</p></div>
      </div>
    `;
    try {
      const [iRes, hRes] = await Promise.all([fetch('/api/internships'), fetch('/api/hackathons')]);
      const iData = await iRes.json();
      const hData = await hRes.json();
      document.getElementById('stat-internships').textContent = iData.length;
      document.getElementById('stat-hackathons').textContent = hData.length;
    } catch(e) {
      console.error(e);
    }
  };

  const renderInternships = async () => {
    content.innerHTML = `<div class="flex justify-between items-center mb-6"><h2 class="font-headline-lg text-headline-lg">Manage Internships</h2></div><div id="internship-list" class="space-y-4">Loading...</div>`;
    try {
      const res = await fetch('/api/internships');
      const data = await res.json();
      document.getElementById('internship-list').innerHTML = data.map(i => `
        <div class="p-4 border border-border-subtle rounded-lg flex justify-between items-center">
          <div><p class="font-bold">${i.title}</p><p class="text-sm text-on-surface-variant">${i.company} • ${i.stipend}</p></div>
          <span class="bg-success-teal/10 text-success-teal px-3 py-1 rounded-full text-xs font-bold">Active</span>
        </div>
      `).join('');
    } catch(e) {
      document.getElementById('internship-list').innerHTML = '<p class="text-error">Failed to load internships.</p>';
    }
  };

  const renderHackathons = async () => {
    content.innerHTML = `
      <div class="flex justify-between items-center mb-6">
        <h2 class="font-headline-lg text-headline-lg">Manage Hackathons</h2>
        <button id="add-hackathon-btn" class="bg-gamify-indigo text-on-primary px-4 py-2 rounded-lg font-bold flex items-center gap-2"><span class="material-symbols-outlined">add</span> Post Hackathon</button>
      </div>
      <div id="hackathon-list" class="space-y-4 mb-8">Loading...</div>
      
      <!-- Add Form -->
      <form id="hackathon-form" class="hidden bg-surface-container-low p-6 rounded-xl border border-border-subtle space-y-4">
        <h3 class="font-bold text-lg mb-4">Post New Hackathon</h3>
        <input type="text" id="h-title" placeholder="Hackathon Title" class="w-full px-4 py-2 rounded border border-border-subtle" required />
        <input type="text" id="h-org" placeholder="Organizer" class="w-full px-4 py-2 rounded border border-border-subtle" required />
        <input type="text" id="h-date" placeholder="Date (e.g., Nov 15-16)" class="w-full px-4 py-2 rounded border border-border-subtle" required />
        <input type="text" id="h-prize" placeholder="Prize Pool" class="w-full px-4 py-2 rounded border border-border-subtle" required />
        <button type="submit" class="bg-trust-blue text-white font-bold py-2 px-6 rounded hover:bg-primary transition-colors">Submit</button>
      </form>
    `;

    const loadData = async () => {
      try {
        const res = await fetch('/api/hackathons');
        const data = await res.json();
        document.getElementById('hackathon-list').innerHTML = data.map(h => `
          <div class="p-4 border border-border-subtle rounded-lg flex justify-between items-center bg-white">
            <div><p class="font-bold">${h.title}</p><p class="text-sm text-on-surface-variant">${h.organizer} • ${h.date} • ${h.prizePool}</p></div>
            <span class="bg-success-teal/10 text-success-teal px-3 py-1 rounded-full text-xs font-bold">Active</span>
          </div>
        `).join('');
      } catch(e) {
        document.getElementById('hackathon-list').innerHTML = '<p class="text-error">Failed to load hackathons.</p>';
      }
    };
    await loadData();

    document.getElementById('add-hackathon-btn')?.addEventListener('click', () => {
      document.getElementById('hackathon-form').classList.toggle('hidden');
    });

    document.getElementById('hackathon-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const payload = {
        title: document.getElementById('h-title').value,
        organizer: document.getElementById('h-org').value,
        date: document.getElementById('h-date').value,
        prizePool: document.getElementById('h-prize').value,
        participants: 0,
        tags: ['New']
      };
      try {
        const res = await fetch('/api/hackathons', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if(res.ok) {
          showToast('Hackathon posted successfully!', 'success');
          document.getElementById('hackathon-form').reset();
          document.getElementById('hackathon-form').classList.add('hidden');
          loadData();
        }
      } catch(err) {
        showToast('Error posting hackathon', 'error');
      }
    });
  };

  const views = {
    overview: renderOverview,
    internships: renderInternships,
    hackathons: renderHackathons
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('bg-primary-container', 'text-on-primary-container', 'active'); t.classList.add('text-on-surface-variant'); });
      tab.classList.add('bg-primary-container', 'text-on-primary-container', 'active');
      tab.classList.remove('text-on-surface-variant');
      views[tab.dataset.tab]();
    });
  });

  renderOverview();
  return cleanup;
}
