// ===== Landing Page =====
import { navbar, footer, initMobileMenu, initScrollHeader, showLoginModal } from '../components.js';
import { internships } from '../data.js';

export function renderLanding(app) {
  app.innerHTML = `
  ${navbar('internships', false)}
  <main class="page-enter">
    <!-- Hero -->
    <section class="hero-gradient relative overflow-hidden py-24 px-margin-desktop">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div class="w-full md:w-1/2 space-y-8">
          <div class="inline-flex items-center gap-2 bg-primary-container/10 text-primary px-4 py-2 rounded-full border border-primary/20">
            <span class="material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1">verified</span>
            <span class="font-label-caps text-label-caps">.edu Verification Enabled</span>
          </div>
          <h1 class="font-display-lg text-display-lg text-on-surface">Secure Your Future with <span class="text-trust-blue">Vetted Internships</span>.</h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Connect with top-tier companies through skill-based matching. Skip the resume black hole and prove your talent via gamified assessments.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/internships" class="bg-trust-blue text-on-primary px-8 py-4 rounded-xl font-headline-lg text-title-md flex items-center justify-center gap-2 hover:shadow-xl hover:translate-y-[-2px] transition-all no-underline">Find Internships <span class="material-symbols-outlined">trending_flat</span></a>
            <a href="/employer" class="border-2 border-gamify-indigo text-gamify-indigo px-8 py-4 rounded-xl font-headline-lg text-title-md hover:bg-gamify-indigo/5 transition-all no-underline text-center">Hire Talent</a>
          </div>
          <div class="flex items-center gap-6 pt-4">
            <div class="flex -space-x-3">
              <div class="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">AR</div>
              <div class="w-10 h-10 rounded-full border-2 border-white bg-gamify-indigo flex items-center justify-center text-white text-xs font-bold">SP</div>
              <div class="w-10 h-10 rounded-full border-2 border-white bg-success-teal flex items-center justify-center text-white text-xs font-bold">MG</div>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Join <span class="font-bold text-on-surface">15,000+</span> students matching today</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 relative">
          <div class="relative z-10 floating">
            <div class="bg-white p-6 rounded-3xl shadow-2xl border border-border-subtle max-w-md mx-auto">
              <div class="flex justify-between items-center mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container"><span class="material-symbols-outlined text-2xl">code</span></div>
                  <div><h3 class="font-title-md text-body-lg font-bold">Frontend Engineer</h3><p class="text-body-sm text-on-surface-variant">Stripe • Remote</p></div>
                </div>
                <span class="bg-success-teal/10 text-success-teal px-3 py-1 rounded-full font-label-caps text-label-caps">Verified</span>
              </div>
              <div class="space-y-4">
                <div class="h-2 w-full bg-surface-container rounded-full overflow-hidden"><div class="h-full bg-trust-blue w-3/4 rounded-full"></div></div>
                <div class="flex justify-between text-body-sm"><span class="text-on-surface-variant">Skill Match</span><span class="font-bold text-trust-blue">92%</span></div>
                <div class="flex gap-2"><span class="bg-surface-container-low px-3 py-1 rounded-md text-body-sm">React</span><span class="bg-surface-container-low px-3 py-1 rounded-md text-body-sm">Tailwind</span><span class="bg-surface-container-low px-3 py-1 rounded-md text-body-sm">+2</span></div>
              </div>
            </div>
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-0"></div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-12 bg-white border-y border-border-subtle overflow-hidden">
      <div class="px-margin-desktop">
        <p class="text-center font-label-caps text-label-caps text-outline mb-8">TRUSTED BY WORLD-CLASS TEAMS</p>
        <div class="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div class="h-8 flex items-center gap-2 font-display-lg text-title-md font-bold"><span class="material-symbols-outlined text-primary">filter_drama</span> Google</div>
          <div class="h-8 flex items-center gap-2 font-display-lg text-title-md font-bold"><span class="material-symbols-outlined text-primary">rocket_launch</span> SpaceX</div>
          <div class="h-8 flex items-center gap-2 font-display-lg text-title-md font-bold"><span class="material-symbols-outlined text-primary">account_balance</span> Goldman Sachs</div>
          <div class="h-8 flex items-center gap-2 font-display-lg text-title-md font-bold"><span class="material-symbols-outlined text-primary">payments</span> Stripe</div>
          <div class="h-8 flex items-center gap-2 font-display-lg text-title-md font-bold"><span class="material-symbols-outlined text-primary">shopping_bag</span> Shopify</div>
        </div>
      </div>
    </section>

    <!-- Bento Grid Features -->
    <section class="py-24 px-margin-desktop max-w-7xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Showcase Your Skills, Not Just Your Resume</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our gamified assessment engine helps you prove your expertise through live challenges and earn blockchain-verified skill badges.</p>
      </div>
      <div class="bento-grid">
        <div class="col-span-12 md:col-span-8 bg-on-surface text-on-primary rounded-[2rem] p-10 overflow-hidden relative group">
          <div class="relative z-10 flex flex-col h-full justify-between">
            <div class="space-y-4 max-w-md">
              <span class="bg-gamify-indigo px-4 py-1.5 rounded-full font-label-caps text-label-caps text-white">LIVE ENGINE</span>
              <h3 class="font-headline-lg text-headline-lg">Interactive Coding IDE</h3>
              <p class="text-primary-fixed-dim font-body-sm">Solve real-world problems in our integrated IDE. From Python to React, validate your tech stack with instant feedback.</p>
            </div>
            <div class="mt-12 bg-[#1E1E1E] rounded-xl border border-white/10 p-4 font-mono text-sm transform translate-y-6 group-hover:translate-y-2 transition-transform duration-500">
              <div class="flex gap-2 mb-4"><div class="w-3 h-3 rounded-full bg-red-500"></div><div class="w-3 h-3 rounded-full bg-yellow-500"></div><div class="w-3 h-3 rounded-full bg-green-500"></div></div>
              <div class="text-green-400">def <span class="text-blue-400">verify_skill</span>(user_id):</div>
              <div class="pl-4 text-gray-300">assessment = get_latest_challenge(user_id)</div>
              <div class="pl-4 text-gray-300">if assessment.score &gt; <span class="text-orange-400">80</span>:</div>
              <div class="pl-8 text-green-400">return <span class="text-blue-400">"BADGE_EARNED"</span></div>
            </div>
          </div>
          <div class="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
        </div>
        <div class="col-span-12 md:col-span-4 bg-surface-container rounded-[2rem] p-10 flex flex-col items-center text-center">
          <div class="relative mb-8">
            <div class="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-12"><span class="material-symbols-outlined text-success-teal text-5xl" style="font-variation-settings:'FILL' 1">workspace_premium</span></div>
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center text-white shadow-lg transform -rotate-12"><span class="material-symbols-outlined">bolt</span></div>
          </div>
          <h3 class="font-title-md text-title-md mb-4">Earn Skill Badges</h3>
          <p class="text-on-surface-variant font-body-sm">Unlock rare geometric badges as you complete challenges. These "Verified Skills" are synced directly to your profile for recruiters to see.</p>
        </div>
        <div class="col-span-12 md:col-span-4 bg-white border border-border-subtle rounded-[2rem] p-10">
          <h3 class="font-title-md text-title-md mb-6">University Power</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-3 bg-surface-bg rounded-xl border border-border-subtle"><div class="flex items-center gap-3"><span class="font-metric-num text-title-md text-trust-blue">#1</span><span class="font-bold">Stanford</span></div><span class="text-on-surface-variant text-sm">2.4k pts</span></div>
            <div class="flex items-center justify-between p-3 bg-surface-bg rounded-xl border border-border-subtle"><div class="flex items-center gap-3"><span class="font-metric-num text-title-md text-outline">#2</span><span class="font-bold">MIT</span></div><span class="text-on-surface-variant text-sm">2.1k pts</span></div>
            <a href="/dashboard" class="w-full block text-center text-primary font-bold pt-4 hover:underline">View Full Leaderboard</a>
          </div>
        </div>
        <div class="col-span-12 md:col-span-8 bg-surface-container-low border border-border-subtle rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10">
          <div class="flex-1 space-y-4">
            <h3 class="font-headline-lg text-title-md">Elite Ethics Verification</h3>
            <p class="text-on-surface-variant font-body-sm">Our platform uses AI-powered anti-plagiarism and MOSS-style code analysis to ensure every badge is 100% earned and authentic.</p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-success-teal"><span class="material-symbols-outlined text-sm">check_circle</span> Proctored Testing</li>
              <li class="flex items-center gap-2 text-success-teal"><span class="material-symbols-outlined text-sm">check_circle</span> Plagiarism Detection</li>
              <li class="flex items-center gap-2 text-success-teal"><span class="material-symbols-outlined text-sm">check_circle</span> .edu Verification</li>
            </ul>
          </div>
          <div class="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-border-subtle flex items-center justify-center min-h-[200px]">
            <div class="text-center space-y-4">
              <span class="material-symbols-outlined text-6xl text-success-teal" style="font-variation-settings:'FILL' 1">verified_user</span>
              <p class="font-bold text-on-surface">100% Trust Score</p>
              <p class="text-sm text-on-surface-variant">All submissions verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hiring Challenges -->
    <section class="bg-surface-container-high/30 py-24 px-margin-desktop">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-end mb-12">
          <div class="space-y-2"><h2 class="font-headline-lg text-headline-lg">Hiring Challenges</h2><p class="text-on-surface-variant">Top companies hiring based on assessment performance.</p></div>
          <a href="/internships" class="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform no-underline">See All Challenges <span class="material-symbols-outlined">arrow_forward</span></a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${internships.slice(3,6).map(job => `
          <div class="group bg-white rounded-2xl p-card-padding border border-border-subtle hover:shadow-xl transition-all relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4"><span class="material-symbols-outlined text-verified-tick">verified</span></div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center font-bold text-primary">${job.code}</div>
              <div><h3 class="font-bold text-lg group-hover:text-trust-blue transition-colors">${job.title}</h3><p class="text-body-sm text-on-surface-variant">${job.company} • ${job.location}</p></div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-surface-bg p-3 rounded-lg border border-border-subtle"><p class="text-[10px] font-label-caps text-outline uppercase">Min Stipend</p><p class="font-bold text-success-teal">${job.stipend}</p></div>
              <div class="bg-surface-bg p-3 rounded-lg border border-border-subtle"><p class="text-[10px] font-label-caps text-outline uppercase">Closes In</p><p class="font-bold ${job.closes.includes('2')?'text-error':'text-on-surface'}">${job.closes}</p></div>
            </div>
            <div class="flex items-center justify-between">
              <div class="w-8 h-8 rounded-full border-2 border-white bg-primary text-[10px] text-white flex items-center justify-center font-bold">+${job.applicants}</div>
              <a href="/assessment" class="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors no-underline">Join Challenge</a>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Employer Section -->
    <section class="py-24 px-margin-desktop bg-on-surface text-white overflow-hidden relative">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div class="w-full lg:w-1/2 space-y-8">
          <span class="text-primary-fixed-dim font-label-caps text-label-caps tracking-widest uppercase">For Recruiters</span>
          <h2 class="font-headline-lg text-headline-lg text-white">Hire with Certainty</h2>
          <p class="text-outline-variant font-body-lg text-body-lg">Our integrated ATS Kanban pipeline and automated offer management eliminate 90% of manual screening.</p>
          <div class="space-y-6">
            <div class="flex gap-4"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40"><span class="material-symbols-outlined text-primary-fixed-dim">view_kanban</span></div><div><h4 class="font-bold text-lg">Visual Pipeline</h4><p class="text-outline-variant text-sm">Drag-and-drop candidates through stages.</p></div></div>
            <div class="flex gap-4"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40"><span class="material-symbols-outlined text-primary-fixed-dim">verified_user</span></div><div><h4 class="font-bold text-lg">Verified Only</h4><p class="text-outline-variant text-sm">Access talent from .edu verified domains.</p></div></div>
          </div>
          <a href="/employer" class="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all no-underline">Start Hiring Now</a>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="bg-surface-bg rounded-2xl p-6 shadow-2xl border border-border-subtle">
            <div class="flex items-center justify-between mb-6"><h4 class="font-bold text-on-surface">Internship Pipeline</h4><div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-outline-variant"></div><div class="w-3 h-3 rounded-full bg-outline-variant"></div><div class="w-3 h-3 rounded-full bg-outline-variant"></div></div></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3">
                <p class="font-label-caps text-[10px] text-outline-variant">APPLIED (12)</p>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-border-subtle"><p class="font-bold text-xs text-on-surface">Alex Rivera</p><p class="text-[10px] text-on-surface-variant">Stanford</p><span class="text-[10px] font-bold text-trust-blue">94%</span></div>
              </div>
              <div class="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3">
                <p class="font-label-caps text-[10px] text-outline-variant">INTERVIEW (4)</p>
                <div class="bg-white p-3 rounded-lg shadow-sm border-2 border-trust-blue"><p class="font-bold text-xs text-on-surface">Sarah Chen</p><p class="text-[10px] text-on-surface-variant">MIT</p><span class="text-[10px] font-bold text-trust-blue">98%</span></div>
              </div>
              <div class="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3">
                <p class="font-label-caps text-[10px] text-outline-variant">OFFERED (2)</p>
                <div class="bg-white p-3 rounded-lg shadow-sm border border-border-subtle opacity-50"><p class="font-bold text-xs text-on-surface">Jordan Poe</p><p class="text-[10px] text-on-surface-variant">UC Berkeley</p><span class="text-[10px] font-bold text-trust-blue">89%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-margin-desktop">
      <div class="max-w-4xl mx-auto bg-gradient-to-br from-trust-blue to-primary p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
        <div class="relative z-10 space-y-4">
          <h2 class="font-headline-lg text-headline-lg text-white">Your Career Starts Here</h2>
          <p class="text-white/80 text-body-lg font-body-lg max-w-xl mx-auto">Stop applying blindly. Get verified, prove your worth, and land the internship you deserve.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="/dashboard" class="bg-white text-trust-blue px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:translate-y-[-2px] transition-all no-underline">Join as a Student</a>
            <a href="/employer" class="bg-primary-container/20 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all no-underline">Register Company</a>
          </div>
        </div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      </div>
    </section>
  </main>
  ${footer()}`;

  initMobileMenu();
  const cleanup = initScrollHeader();
  document.getElementById('login-btn')?.addEventListener('click', showLoginModal);
  return cleanup;
}
