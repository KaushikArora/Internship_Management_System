// ===== Internships Directory =====
import { navbar, footer, initMobileMenu, initScrollHeader } from '../components.js';
import { internships, showToast } from '../data.js';

export function renderInternships(app) {
  app.innerHTML = `
  ${navbar('internships', true)}
  <main class="max-w-7xl mx-auto px-margin-desktop py-12 page-enter min-h-[calc(100vh-80px)]">
    <div class="flex flex-col md:flex-row gap-8 mb-12 items-end">
      <div class="flex-1 space-y-4">
        <h1 class="font-headline-lg text-headline-lg">Find Verified Internships</h1>
        <p class="text-on-surface-variant font-body-lg max-w-2xl">Browse opportunities that value your skills over your resume. Complete assessments to guarantee an interview.</p>
      </div>
      <div class="w-full md:w-auto relative">
        <span class="material-symbols-outlined absolute left-4 top-3 text-outline-variant">search</span>
        <input type="text" id="search-jobs" placeholder="Search roles, companies..." class="w-full md:w-80 pl-12 pr-4 py-3 bg-surface-bg border border-border-subtle rounded-lg shadow-sm focus:border-trust-blue transition-colors">
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-4 mb-8">
      <select class="px-4 py-2 bg-white border border-border-subtle rounded-full text-sm font-semibold cursor-pointer appearance-none pr-8 relative">
        <option>All Roles</option>
        <option>Engineering</option>
        <option>Design</option>
        <option>Data Science</option>
      </select>
      <select class="px-4 py-2 bg-white border border-border-subtle rounded-full text-sm font-semibold cursor-pointer appearance-none pr-8">
        <option>Any Location</option>
        <option>Remote</option>
        <option>On-site</option>
      </select>
      <button class="px-4 py-2 bg-surface-container text-primary font-semibold rounded-full text-sm hover:bg-primary/10 transition-colors">Clear Filters</button>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="jobs-grid">
      ${internships.map(job => `
      <div class="group bg-white rounded-2xl p-card-padding border border-border-subtle hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full">
        <div class="absolute top-0 right-0 p-4"><span class="material-symbols-outlined text-verified-tick" title="Verified Employer">verified</span></div>
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center font-bold text-primary">${job.code}</div>
          <div><h3 class="font-bold text-lg group-hover:text-trust-blue transition-colors">${job.title}</h3><p class="text-body-sm text-on-surface-variant">${job.company} • ${job.location}</p></div>
        </div>
        <div class="flex flex-wrap gap-2 mb-6 flex-grow">
          ${job.tags.map(t => `<span class="bg-surface-bg px-2 py-1 border border-border-subtle rounded text-[10px] font-bold uppercase text-on-surface-variant">${t}</span>`).join('')}
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-surface-bg p-3 rounded-lg border border-border-subtle"><p class="text-[10px] font-label-caps text-outline uppercase">Min Stipend</p><p class="font-bold text-success-teal">${job.stipend}</p></div>
          <div class="bg-surface-bg p-3 rounded-lg border border-border-subtle"><p class="text-[10px] font-label-caps text-outline uppercase">Closes In</p><p class="font-bold ${job.closes.includes('2')?'text-error':'text-on-surface'}">${job.closes}</p></div>
        </div>
        <div class="flex items-center justify-between mt-auto">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full border border-border-subtle bg-surface-container-low flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+${job.applicants}</div>
            <span class="text-[10px] font-bold text-on-surface-variant uppercase">Applied</span>
          </div>
          <button class="apply-btn bg-trust-blue text-on-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-container hover:text-primary transition-all shadow-md">Apply</button>
        </div>
      </div>`).join('')}
    </div>
  </main>
  ${footer()}`;

  // Search logic
  document.getElementById('search-jobs')?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('#jobs-grid > div');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(term)) { card.style.display = 'flex'; }
      else { card.style.display = 'none'; }
    });
  });

  // Apply buttons
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Application started! Taking you to the assessment...', 'info');
      setTimeout(() => import('../router.js').then(m => m.navigate('/assessment')), 1500);
    });
  });

  initMobileMenu();
  return initScrollHeader();
}
