import { navbar, footer, initMobileMenu, initScrollHeader } from '../components.js';
import { showToast } from '../data.js';

export function renderHackathons(app) {
  app.innerHTML = `
  ${navbar('hackathons', true)}
  <main class="max-w-7xl mx-auto px-margin-desktop py-12 page-enter min-h-[calc(100vh-80px)]">
    <div class="flex flex-col md:flex-row gap-8 mb-12 items-end">
      <div class="flex-1 space-y-4">
        <h1 class="font-headline-lg text-headline-lg">Global Hackathons</h1>
        <p class="text-on-surface-variant font-body-lg max-w-2xl">Compete in high-stakes hackathons, win prizes, and get scouted by top tech companies.</p>
      </div>
      <div class="w-full md:w-auto relative">
        <span class="material-symbols-outlined absolute left-4 top-3 text-outline-variant">search</span>
        <input type="text" id="search-hackathons" placeholder="Search hackathons..." class="w-full md:w-80 pl-12 pr-4 py-3 bg-surface-bg border border-border-subtle rounded-lg shadow-sm focus:border-trust-blue transition-colors">
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="hackathons-grid">
      <div class="col-span-full text-center py-12"><div class="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div></div>
    </div>
  </main>
  ${footer()}`;

  const loadData = async () => {
    try {
      const res = await fetch('/api/hackathons');
      const data = await res.json();
      const grid = document.getElementById('hackathons-grid');
      if (data.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-on-surface-variant">No hackathons available.</div>';
        return;
      }
      grid.innerHTML = data.map(h => `
      <div class="group bg-white rounded-2xl p-card-padding border border-border-subtle hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full">
        <div class="absolute top-0 right-0 p-4"><span class="material-symbols-outlined text-gamify-indigo" title="Premium Hackathon">emoji_events</span></div>
        <div class="flex flex-col mb-4">
          <h3 class="font-bold text-lg group-hover:text-trust-blue transition-colors mb-1">${h.title}</h3>
          <p class="text-body-sm text-on-surface-variant">by ${h.organizer}</p>
        </div>
        <div class="flex flex-wrap gap-2 mb-6 flex-grow">
          ${h.tags.map(t => `<span class="bg-surface-bg px-2 py-1 border border-border-subtle rounded text-[10px] font-bold uppercase text-on-surface-variant">${t}</span>`).join('')}
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-surface-bg p-3 rounded-lg border border-border-subtle"><p class="text-[10px] font-label-caps text-outline uppercase">Prize Pool</p><p class="font-bold text-success-teal">${h.prizePool}</p></div>
          <div class="bg-surface-bg p-3 rounded-lg border border-border-subtle"><p class="text-[10px] font-label-caps text-outline uppercase">Dates</p><p class="font-bold text-on-surface">${h.date}</p></div>
        </div>
        <div class="flex items-center justify-between mt-auto">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-outline-variant text-[18px]">group</span>
            <span class="text-[10px] font-bold text-on-surface-variant uppercase">${h.participants} Joined</span>
          </div>
          <button class="join-btn bg-gamify-indigo text-on-primary px-6 py-2 rounded-lg font-bold text-sm hover:brightness-110 transition-all shadow-md">Register</button>
        </div>
      </div>`).join('');

      document.querySelectorAll('.join-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          showToast('Successfully registered for hackathon!', 'success');
        });
      });
    } catch(e) {
      document.getElementById('hackathons-grid').innerHTML = '<div class="col-span-full text-center py-12 text-error">Failed to load hackathons.</div>';
    }
  };

  loadData();

  initMobileMenu();
  return initScrollHeader();
}
