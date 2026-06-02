// ===== Student Dashboard =====
import { navbar, footer, initMobileMenu, initScrollHeader } from '../components.js';
import { currentUser, leaderboard, internships, interviews } from '../data.js';

export function renderDashboard(app) {
  app.innerHTML = `
  ${navbar('leaderboard', true)}
  <main class="flex min-h-[calc(100vh-80px)] overflow-hidden page-enter">
    <!-- Left Rail -->
    <aside class="w-64 border-r border-border-subtle bg-surface-container-low hidden md:flex flex-col p-6 gap-8 shrink-0">
      <div class="flex flex-col gap-2">
        <span class="font-label-caps text-label-caps text-on-surface-variant opacity-60 mb-2">DASHBOARD</span>
        <a href="/dashboard" class="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold no-underline"><span class="material-symbols-outlined">dashboard</span> Discover</a>
        <a href="/assessment" class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all rounded-lg no-underline"><span class="material-symbols-outlined">military_tech</span> My Challenges</a>
        <a href="/profile" class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all rounded-lg no-underline"><span class="material-symbols-outlined">workspace_premium</span> Skill Badges</a>
        <a href="/internships" class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all rounded-lg no-underline"><span class="material-symbols-outlined">description</span> Applications</a>
      </div>
      <div class="mt-auto">
        <div class="bg-gradient-to-br from-primary to-gamify-indigo p-4 rounded-xl text-white">
          <p class="font-label-caps text-label-caps opacity-80 mb-1">PRO PLAN</p>
          <p class="font-title-md text-body-sm font-bold mb-3">Unlock Daily Matches</p>
          <button class="w-full py-2 bg-white text-primary rounded-lg font-bold text-body-sm hover:opacity-90 transition-opacity">Upgrade Now</button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <section class="flex-1 overflow-y-auto custom-scrollbar bg-surface-bg p-8 flex flex-col gap-gutter">
      <!-- Hero Action Card -->
      <div class="relative overflow-hidden bg-on-surface text-white rounded-xl p-8 shadow-lg group">
        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-4">
            <span class="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">High Priority</span>
            <span class="text-error font-bold flex items-center gap-1 text-body-sm"><span class="material-symbols-outlined !text-sm">timer</span> <span id="hero-timer">15m left</span></span>
          </div>
          <h1 class="font-headline-lg text-headline-lg mb-2">Finish Python Data Science Assessment</h1>
          <p class="text-surface-variant font-body-lg mb-6 max-w-xl">Complete this assessment to rank in the Top 5% for the 'Senior Data Intern' role at TechFlow Systems.</p>
          <div class="flex gap-4">
            <a href="/assessment" class="bg-trust-blue px-6 py-3 rounded-md font-bold text-white flex items-center gap-2 hover:bg-primary transition-colors no-underline">Resume Now <span class="material-symbols-outlined">play_arrow</span></a>
            <button class="px-6 py-3 border border-outline-variant rounded-md font-bold text-white hover:bg-white/10 transition-colors">Review Materials</button>
          </div>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <!-- Skill Radar -->
        <div class="lg:col-span-1 bg-white border border-border-subtle rounded-xl p-card-padding flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex justify-between items-center"><h3 class="font-title-md text-title-md">Skill Growth</h3><span class="material-symbols-outlined text-on-surface-variant">info</span></div>
          <div class="aspect-square w-full relative flex items-center justify-center bg-surface-container-low rounded-lg border border-dashed border-outline-variant">
            <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div class="w-4/5 h-4/5 border-2 border-primary/20 rounded-full flex items-center justify-center">
                <div class="w-2/3 h-2/3 border-2 border-primary/40 rounded-full flex items-center justify-center"><div class="w-1/3 h-1/3 border-2 border-primary/60 rounded-full"></div></div>
              </div>
              <div class="absolute w-[80%] h-[2px] bg-primary/20 rotate-45"></div>
              <div class="absolute w-[80%] h-[2px] bg-primary/20 -rotate-45"></div>
              <div class="absolute w-[80%] h-[2px] bg-primary/20 rotate-90"></div>
              <div class="absolute w-[80%] h-[2px] bg-primary/20"></div>
              <svg class="absolute w-[80%] h-[80%] text-primary opacity-60" viewBox="0 0 100 100"><polygon fill="currentColor" points="50,10 90,40 75,90 25,90 10,40"/></svg>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-primary"></span><span class="text-body-sm font-label-caps">Technical: 88</span></div>
            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gamify-indigo"></span><span class="text-body-sm font-label-caps">Logic: 72</span></div>
          </div>
        </div>

        <!-- Recommended -->
        <div class="lg:col-span-2 flex flex-col gap-4">
          <div class="flex justify-between items-center"><h3 class="font-title-md text-title-md">Recommended Opportunities</h3><a href="/internships" class="text-trust-blue font-bold text-body-sm hover:underline no-underline">View All</a></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${internships.slice(0,2).map((job, i) => `
            <div class="bg-white border border-border-subtle p-5 rounded-xl hover:shadow-lg transition-all ${i===0?'border-l-4 border-l-trust-blue':''} group">
              <div class="flex justify-between mb-4">
                <div class="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg font-extrabold text-primary">${job.code}</div>
                <span class="material-symbols-outlined text-verified-tick" style="font-variation-settings:'FILL' 1">verified</span>
              </div>
              <h4 class="font-bold text-body-lg mb-1 group-hover:text-primary transition-colors">${job.title}</h4>
              <p class="text-on-surface-variant text-body-sm mb-4">${job.company} • ${job.location}</p>
              <div class="flex flex-wrap gap-2 mb-6">${job.tags.map(t => `<span class="bg-surface-container px-2 py-1 rounded text-[10px] font-bold uppercase text-on-surface-variant">${t}</span>`).join('')}</div>
              <div class="flex justify-between items-center">
                <span class="${job.match>=90?'text-success-teal':'text-on-surface-variant'} font-bold text-body-sm">${job.match}% Match</span>
                <a href="/internships" class="text-primary font-bold text-body-sm flex items-center gap-1 no-underline">Apply <span class="material-symbols-outlined !text-sm">arrow_forward</span></a>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Right Sidebar -->
    <aside class="w-80 border-l border-border-subtle bg-white hidden xl:flex flex-col p-6 gap-8 shrink-0 overflow-y-auto custom-scrollbar">
      <!-- Leaderboard -->
      <div>
        <div class="flex items-center justify-between mb-6"><h3 class="font-title-md text-title-md">Leaderboard</h3><span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container px-2 py-1 rounded">Global</span></div>
        <div class="flex flex-col gap-4">
          ${leaderboard.slice(0,2).map(p => `
          <div class="flex items-center gap-4 p-3 ${p.highlight?'bg-surface-container-low rounded-lg border border-primary/10':''} hover:bg-surface-container-low transition-colors rounded-lg">
            <span class="font-metric-num text-metric-num ${p.highlight?'text-primary/40':'text-on-surface-variant/20'} w-6">${String(p.rank).padStart(2,'0')}</span>
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">${p.name.split(' ').map(n=>n[0]).join('')}</div>
            <div class="flex-1"><p class="font-bold text-body-sm truncate">${p.name}</p><p class="text-[10px] text-on-surface-variant">${p.university}</p></div>
            <span class="${p.highlight?'font-bold text-primary':'font-bold'}">${p.score}</span>
          </div>`).join('')}
          <div class="flex items-center gap-4 p-3 bg-primary/5 rounded-lg border border-dashed border-primary">
            <span class="font-metric-num text-metric-num text-primary/60 w-6">${currentUser.rank}</span>
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">${currentUser.initials}</div>
            <div class="flex-1"><p class="font-bold text-body-sm truncate">You (${currentUser.name.split(' ')[0]})</p><p class="text-[10px] text-on-surface-variant">${currentUser.university}</p></div>
            <span class="font-bold text-primary">8.2k</span>
          </div>
        </div>
      </div>

      <!-- Interviews -->
      <div class="mt-4">
        <h3 class="font-title-md text-title-md mb-6">Interviews</h3>
        <div class="relative border-l-2 border-border-subtle ml-2 flex flex-col gap-8">
          ${interviews.map(iv => `
          <div class="relative pl-6">
            <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full ${iv.active?'bg-primary':'bg-outline-variant'} border-4 border-white"></div>
            <p class="font-label-caps text-label-caps ${iv.active?'text-trust-blue':'text-on-surface-variant'} mb-1">${iv.date.toUpperCase()} • ${iv.time}</p>
            <h4 class="font-bold text-body-sm">${iv.type}: ${iv.company}</h4>
            <p class="text-on-surface-variant text-body-sm">${iv.topic}</p>
          </div>`).join('')}
        </div>
      </div>

      <!-- Streak -->
      <div class="mt-auto bg-surface-container-low p-4 rounded-xl border border-border-subtle">
        <div class="flex items-center gap-2 mb-3"><span class="material-symbols-outlined text-gamify-indigo">auto_awesome</span><span class="font-bold text-body-sm">Streak: ${currentUser.streak} Days</span></div>
        <div class="w-full bg-outline-variant/30 h-1.5 rounded-full mb-2"><div class="bg-gradient-to-r from-primary to-gamify-indigo w-3/4 h-full rounded-full"></div></div>
        <p class="text-[10px] text-on-surface-variant font-medium">120 XP until Master badge in 'React'</p>
      </div>
    </aside>
  </main>`;

  initMobileMenu();
  return initScrollHeader();
}
