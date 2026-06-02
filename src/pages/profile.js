// ===== Student Profile & Skill Wallet =====
import { navbar, footer, initMobileMenu, initScrollHeader } from '../components.js';
import { currentUser, skills, showToast } from '../data.js';

export function renderProfile(app) {
  app.innerHTML = `
  ${navbar('', true)}
  <main class="max-w-7xl mx-auto px-margin-desktop py-12 page-enter">
    <!-- Profile Header -->
    <section class="mb-12">
      <div class="bg-white rounded-xl p-8 border border-border-subtle shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
        <div class="relative">
          <div class="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary to-gamify-indigo flex items-center justify-center text-white text-4xl font-bold">${currentUser.initials}</div>
          <div class="absolute bottom-1 right-1 bg-verified-tick text-white p-1 rounded-full border-2 border-white flex items-center justify-center" title=".edu Verified"><span class="material-symbols-outlined text-sm" style="font-variation-settings:'wght' 700">verified</span></div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <div class="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h1 class="font-headline-lg text-headline-lg">Alex Chen</h1>
            <span class="px-3 py-1 rounded-full bg-surface-container text-primary font-label-caps text-label-caps w-fit mx-auto md:mx-0">.edu Verified Student</span>
          </div>
          <p class="text-on-surface-variant font-body-lg mb-4">${currentUser.major} Major @ Stanford University • ${currentUser.year}</p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border-subtle"><span class="material-symbols-outlined text-primary text-[18px]">location_on</span><span class="font-body-sm text-body-sm">${currentUser.location}</span></div>
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border-subtle"><span class="material-symbols-outlined text-gamify-indigo text-[18px]">link</span><span class="font-body-sm text-body-sm">${currentUser.github}</span></div>
          </div>
        </div>
        <div class="w-full md:w-80 space-y-4">
          <div class="flex justify-between items-end mb-1"><span class="font-label-caps text-label-caps text-on-surface-variant">Profile Strength</span><span class="font-metric-num text-metric-num text-primary" id="strength-num">0%</span></div>
          <div class="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden"><div id="strength-bar" class="h-full strength-gradient rounded-full shadow-sm" style="width:0%;transition:width 1.5s cubic-bezier(.34,1.56,.64,1)"></div></div>
          <div class="bg-primary-fixed/30 p-4 rounded-lg border border-primary-fixed-dim">
            <div class="flex gap-3"><span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1">bolt</span><div><p class="font-body-sm text-body-sm font-bold">Boost your rank!</p><p class="font-body-sm text-body-sm text-on-surface-variant">Complete a React Challenge to hit 90%.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bento Grid -->
    <div class="bento-grid">
      <!-- Skill Wallet -->
      <div class="col-span-12 lg:col-span-8 bg-white rounded-xl border border-border-subtle shadow-sm overflow-hidden">
        <div class="p-card-padding border-b border-border-subtle flex justify-between items-center bg-surface-container-low/50">
          <div class="flex items-center gap-2"><span class="material-symbols-outlined text-trust-blue" style="font-variation-settings:'FILL' 1">account_balance_wallet</span><h2 class="font-title-md text-title-md">Skill Wallet</h2></div>
          <span class="font-label-caps text-label-caps text-success-teal bg-success-teal/10 px-2 py-1 rounded">Blockchain Verified</span>
        </div>
        <div class="p-card-padding grid grid-cols-2 sm:grid-cols-4 gap-6">
          ${skills.map(s => `
          <div class="flex flex-col items-center group cursor-pointer transition-all hover:scale-105 ${!s.earned?'opacity-50 grayscale hover:grayscale-0 hover:opacity-100':''}">
            <div class="w-20 h-20 mb-3 relative flex items-center justify-center">
              ${s.earned ? `<div class="absolute inset-0 bg-${s.color}/10 rotate-45 rounded-xl group-hover:bg-${s.color}/20 transition-colors"></div>` : `<div class="absolute inset-0 border-2 border-dashed border-outline-variant rotate-45 rounded-xl"></div>`}
              <span class="material-symbols-outlined text-4xl text-${s.color}" ${s.earned?'style="font-variation-settings:\'FILL\' 1"':''}>${s.icon}</span>
            </div>
            <span class="font-body-sm text-body-sm font-bold text-center">${s.name}</span>
            <span class="font-label-caps text-[10px] text-on-surface-variant uppercase">${s.level}</span>
          </div>`).join('')}
        </div>
      </div>

      <!-- GitHub Sync -->
      <div class="col-span-12 lg:col-span-4 glass-card rounded-xl p-card-padding flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 rounded-lg bg-on-surface flex items-center justify-center"><svg class="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></div>
            <span class="flex items-center gap-1 text-success-teal font-label-caps text-label-caps"><span class="w-2 h-2 rounded-full bg-success-teal animate-pulse"></span> Connected</span>
          </div>
          <h3 class="font-title-md text-title-md mb-2">Portfolio Sync</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Your repositories and contributions are automatically mapped to your skill profile.</p>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between text-body-sm"><span class="text-on-surface-variant">Active Repos</span><span class="font-bold">24</span></div>
          <div class="flex justify-between text-body-sm"><span class="text-on-surface-variant">Total Stars</span><span class="font-bold">142</span></div>
          <button class="w-full py-2 border border-border-subtle rounded-lg font-body-sm text-body-sm hover:bg-surface-container transition-colors">Manage Connection</button>
        </div>
      </div>

      <!-- Education -->
      <div class="col-span-12 lg:col-span-7 bg-white rounded-xl border border-border-subtle shadow-sm p-card-padding">
        <div class="flex justify-between items-center mb-6"><div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary">school</span><h2 class="font-title-md text-title-md">Education</h2></div><button id="edit-edu-btn" class="text-primary font-body-sm font-semibold hover:underline">Edit</button></div>
        <div class="flex gap-4">
          <div class="w-16 h-16 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center"><span class="material-symbols-outlined text-primary text-3xl">school</span></div>
          <div>
            <h4 class="font-body-lg font-bold">Stanford University</h4>
            <p class="text-on-surface-variant font-body-sm">B.S. in Computer Science, Minor in Economics</p>
            <p class="text-primary font-label-caps text-[10px] mt-1">GPA ${currentUser.gpa} • DEAN'S LIST</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-surface-container-high rounded text-[11px] font-medium">Data Structures</span>
              <span class="px-2 py-1 bg-surface-container-high rounded text-[11px] font-medium">AI & ML</span>
              <span class="px-2 py-1 bg-surface-container-high rounded text-[11px] font-medium">Game Theory</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Coach Tips -->
      <div class="col-span-12 lg:col-span-5 bg-primary rounded-xl p-card-padding text-on-primary shadow-xl shadow-primary/20">
        <div class="flex items-center gap-2 mb-6"><span class="material-symbols-outlined">auto_awesome</span><h2 class="font-title-md text-title-md">Elite Coach Tips</h2></div>
        <ul class="space-y-4">
          <li class="flex gap-4 group cursor-pointer" id="tip-react"><div class="w-10 h-10 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center group-hover:bg-white/30 transition-colors"><span class="material-symbols-outlined text-[20px]">code</span></div><div><p class="font-body-sm font-bold">Complete React Challenge</p><p class="text-[12px] text-on-primary/70">Adding a verified React badge makes you 3x more likely to be scouted.</p></div></li>
          <li class="flex gap-4 group cursor-pointer"><div class="w-10 h-10 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center group-hover:bg-white/30 transition-colors"><span class="material-symbols-outlined text-[20px]">description</span></div><div><p class="font-body-sm font-bold">Refine your Headline</p><p class="text-[12px] text-on-primary/70">Focus on your 'Full-Stack' expertise for better ATS matching.</p></div></li>
          <li class="flex gap-4 group cursor-pointer"><div class="w-10 h-10 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center group-hover:bg-white/30 transition-colors"><span class="material-symbols-outlined text-[20px]">person_add</span></div><div><p class="font-body-sm font-bold">Request a Peer Review</p><p class="text-[12px] text-on-primary/70">Ask a mentor to endorse your 'Algorithm' skills.</p></div></li>
        </ul>
      </div>
    </div>
  </main>
  ${footer()}`;

  // Animate profile strength on load
  setTimeout(() => {
    const bar = document.getElementById('strength-bar');
    const num = document.getElementById('strength-num');
    if (bar) bar.style.width = `${currentUser.profileStrength}%`;
    if (num) { let c = 0; const iv = setInterval(() => { c++; num.textContent = c + '%'; if (c >= currentUser.profileStrength) clearInterval(iv); }, 15); }
  }, 300);

  // Tip click → navigate to assessment
  document.getElementById('tip-react')?.addEventListener('click', () => {
    import('../router.js').then(m => m.navigate('/assessment'));
  });

  document.getElementById('edit-edu-btn')?.addEventListener('click', () => showToast('Education editor coming soon!', 'info'));

  initMobileMenu();
  return initScrollHeader();
}
