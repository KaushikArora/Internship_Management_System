// ===== Employer — Post New Internship =====
import { navbar, footer, initMobileMenu, initScrollHeader } from '../components.js';
import { showToast, pipeline } from '../data.js';

export function renderEmployer(app) {
  let currentStep = 1;
  const totalSteps = 3;

  app.innerHTML = `
  ${navbar('employer', false)}
  <main class="flex-grow flex flex-col md:flex-row max-w-[1440px] mx-auto w-full px-margin-desktop py-12 gap-gutter page-enter">
    <!-- Side Stepper -->
    <aside class="w-full md:w-72 flex-shrink-0">
      <div class="sticky top-32 space-y-gutter">
        <div class="relative">
          <div class="stepper-line bg-outline-variant"></div>
          <div class="relative z-10 flex items-center gap-4 mb-8" id="step-nav-1"><div class="step-icon w-8 h-8 rounded-full flex items-center justify-center bg-trust-blue text-on-primary font-bold shadow-md transition-all">1</div><div><p class="font-label-caps text-label-caps text-trust-blue">STEP 1</p><p class="font-title-md text-body-sm font-bold">Basic Information</p></div></div>
          <div class="relative z-10 flex items-center gap-4 mb-8 opacity-40" id="step-nav-2"><div class="step-icon w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant font-bold transition-all">2</div><div><p class="font-label-caps text-label-caps text-on-surface-variant">STEP 2</p><p class="font-title-md text-body-sm font-bold">Requirements & Stipend</p></div></div>
          <div class="relative z-10 flex items-center gap-4 opacity-40" id="step-nav-3"><div class="step-icon w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant font-bold transition-all">3</div><div><p class="font-label-caps text-label-caps text-on-surface-variant">STEP 3</p><p class="font-title-md text-body-sm font-bold">Assessment Setup</p></div></div>
        </div>
        <div class="p-card-padding bg-surface-container-low rounded-xl border border-border-subtle">
          <p class="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Employer Support</p>
          <p class="font-body-sm text-body-sm mb-4">Our Elite Coaches are ready to help you draft the perfect listing.</p>
          <button class="w-full py-2 flex items-center justify-center gap-2 font-body-sm text-body-sm font-bold text-trust-blue border border-trust-blue rounded-lg hover:bg-trust-blue/5 transition-colors"><span class="material-symbols-outlined text-sm">support_agent</span> Contact Advisor</button>
        </div>
      </div>
    </aside>

    <!-- Wizard -->
    <section class="flex-grow">
      <div class="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm overflow-hidden">
        <div class="px-margin-desktop py-8 border-b border-border-subtle bg-white"><h1 class="font-headline-lg text-headline-lg text-on-surface mb-2">Create New Internship</h1><p class="text-on-surface-variant font-body-lg">Attract top-tier student talent by providing detailed role specifications.</p></div>
        <form class="p-margin-desktop space-y-8" id="job-wizard">
          <!-- Step 1 -->
          <div id="step-content-1">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div class="col-span-2 space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant uppercase">Internship Title</label><input id="inp-title" class="w-full px-4 py-3 bg-surface-bg border border-border-subtle rounded-lg" placeholder="e.g. Senior Frontend Engineering Intern" required type="text"/></div>
              <div class="space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant uppercase">Tech Stack</label><input id="inp-stack" class="w-full px-4 py-3 bg-surface-bg border border-border-subtle rounded-lg" placeholder="React, Tailwind, Node.js"/></div>
              <div class="space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant uppercase">Work Location</label><select class="w-full px-4 py-3 bg-surface-bg border border-border-subtle rounded-lg"><option>Remote</option><option>Hybrid (London, UK)</option><option>On-site (New York)</option><option>On-site (Singapore)</option></select></div>
              <div class="col-span-2 space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant uppercase">Role Description</label><textarea class="w-full px-4 py-3 bg-surface-bg border border-border-subtle rounded-lg" placeholder="Describe the daily impact and core responsibilities..." rows="4"></textarea></div>
            </div>
          </div>
          <!-- Step 2 -->
          <div id="step-content-2" class="hidden">
            <div class="space-y-8">
              <div class="space-y-4"><h3 class="font-title-md text-title-md">Candidate Requirements</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="p-4 bg-surface-bg border border-border-subtle rounded-lg flex items-start gap-3"><input checked type="checkbox" class="mt-1 w-5 h-5 text-trust-blue rounded"/><div><p class="font-bold text-body-sm">Currently Enrolled Student</p><p class="text-xs text-on-surface-variant">Must be in penultimate or final year.</p></div></div>
                  <div class="p-4 bg-surface-bg border border-border-subtle rounded-lg flex items-start gap-3"><input type="checkbox" class="mt-1 w-5 h-5 text-trust-blue rounded"/><div><p class="font-bold text-body-sm">Portfolio Required</p><p class="text-xs text-on-surface-variant">Must link to GitHub or Behance projects.</p></div></div>
                </div>
              </div>
              <div class="space-y-4"><h3 class="font-title-md text-title-md">Monthly Stipend</h3>
                <div class="flex flex-col md:flex-row gap-gutter items-start">
                  <div class="w-full md:w-1/2 space-y-2"><label class="font-label-caps text-label-caps text-on-surface-variant uppercase">Amount (USD)</label><div class="relative"><span class="absolute left-4 top-3 text-on-surface-variant">$</span><input id="stipend-input" class="w-full pl-8 pr-4 py-3 bg-surface-bg border border-border-subtle rounded-lg font-metric-num" type="number" value="1500"/></div>
                    <div id="stipend-warning" class="hidden items-center gap-2 p-3 bg-error-container/50 border border-error/20 rounded-lg"><span class="material-symbols-outlined text-error text-lg">error</span><p class="text-xs text-on-error-container font-semibold">Mandatory minimum: $500/mo</p></div>
                  </div>
                  <div class="w-full md:w-1/2 p-4 bg-surface-container-high rounded-xl"><p class="font-label-caps text-label-caps text-trust-blue mb-1">MARKET TREND</p><p class="text-xs font-semibold mb-2">Similar roles offer $1,200 - $1,800.</p><div class="h-2 w-full bg-outline-variant rounded-full overflow-hidden"><div class="h-full bg-trust-blue" style="width:75%"></div></div></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Step 3 -->
          <div id="step-content-3" class="hidden">
            <div class="space-y-6">
              <div class="p-6 bg-surface-container-low border-2 border-dashed border-outline-variant rounded-xl text-center">
                <div class="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-primary text-3xl">assignment_add</span></div>
                <h3 class="font-title-md text-title-md mb-2">Add a Skill Assessment</h3>
                <p class="text-on-surface-variant max-w-md mx-auto mb-6">Automate first-round screening with a technical challenge.</p>
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                  <select class="px-6 py-3 bg-white border border-border-subtle rounded-lg font-bold"><option>Select from Existing Challenges</option><option>Frontend: Modern React Hooks</option><option>Backend: API Security Principles</option></select>
                  <button type="button" class="px-6 py-3 bg-gamify-indigo text-on-primary rounded-lg font-bold flex items-center justify-center gap-2"><span class="material-symbols-outlined">add_circle</span> Create New Challenge</button>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-8">
                <div class="p-4 bg-white border border-border-subtle rounded-lg"><div class="flex items-center gap-2 mb-2"><span class="material-symbols-outlined text-success-teal" style="font-variation-settings:'FILL' 1">verified</span><span class="font-label-caps text-label-caps text-success-teal">PREVIEW ACTIVE</span></div><p class="font-bold text-body-sm mb-1">Frontend Challenge</p><p class="text-xs text-on-surface-variant">Estimated: 45m</p></div>
                <div class="md:col-span-2 p-4 bg-surface-bg border border-border-subtle rounded-lg flex items-center justify-between"><div><p class="font-bold text-body-sm">AI Auto-Screening</p><p class="text-xs text-on-surface-variant">Auto-rank by code efficiency.</p></div><div id="ai-toggle" class="relative inline-block w-12 h-6 rounded-full bg-trust-blue cursor-pointer"><div class="toggle-dot absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition-all"></div></div></div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-8 border-t border-border-subtle flex justify-between items-center">
            <button type="button" id="prev-btn" class="px-8 py-3 font-bold text-on-surface-variant hover:text-on-surface transition-colors opacity-0 pointer-events-none">Back</button>
            <div class="flex gap-4">
              <button type="button" class="hidden md:block px-8 py-3 font-bold text-on-surface-variant hover:text-on-surface transition-colors">Save Draft</button>
              <button type="button" id="next-btn" class="px-10 py-3 bg-trust-blue text-on-primary rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"><span>Continue</span><span class="material-symbols-outlined text-lg">arrow_forward</span></button>
            </div>
          </div>
        </form>
      </div>

      <!-- ATS Preview -->
      <div class="mt-12 bg-white border border-border-subtle rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-6"><h3 class="font-title-md text-title-md">ATS Pipeline Preview</h3><span class="font-label-caps text-label-caps text-on-surface-variant">DRAG & DROP ENABLED</span></div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="ats-pipeline">
          ${['applied','interview','offered','joined'].map(stage => `
          <div class="bg-surface-container-low rounded-xl p-4 min-h-[200px]" data-stage="${stage}" ondragover="event.preventDefault()" ondrop="window.__handleDrop(event,'${stage}')">
            <p class="font-label-caps text-[10px] text-outline-variant mb-3">${stage.toUpperCase()} (${pipeline[stage].length})</p>
            ${pipeline[stage].map((c, i) => `
            <div class="bg-white p-3 rounded-lg shadow-sm border border-border-subtle mb-2 cursor-grab active:cursor-grabbing" draggable="true" ondragstart="window.__handleDrag(event,'${stage}',${i})">
              <div class="flex justify-between items-start"><p class="font-bold text-xs">${c.name}</p><span class="text-[10px] font-bold text-trust-blue">${c.score}%</span></div>
              <p class="text-[10px] text-on-surface-variant">${c.university}</p>
            </div>`).join('')}
          </div>`).join('')}
        </div>
      </div>
    </section>
  </main>
  ${footer()}`;

  // Wizard logic
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  
  function updateWizardUI() {
    for (let i = 1; i <= totalSteps; i++) {
      const content = document.getElementById(`step-content-${i}`);
      const nav = document.getElementById(`step-nav-${i}`);
      const icon = nav.querySelector('.step-icon');
      if (content) content.classList.toggle('hidden', i !== currentStep);
      if (i === currentStep) { nav.style.opacity='1'; icon.className='step-icon w-8 h-8 rounded-full flex items-center justify-center bg-trust-blue text-on-primary font-bold shadow-md transition-all'; }
      else if (i < currentStep) { nav.style.opacity='0.8'; icon.className='step-icon w-8 h-8 rounded-full flex items-center justify-center bg-success-teal text-on-primary font-bold transition-all'; icon.innerHTML='<span class="material-symbols-outlined text-base">check</span>'; }
      else { nav.style.opacity='0.4'; icon.className='step-icon w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant font-bold transition-all'; icon.textContent=i; }
    }
    prevBtn.classList.toggle('opacity-0', currentStep===1);
    prevBtn.classList.toggle('pointer-events-none', currentStep===1);
    if (currentStep===totalSteps) { nextBtn.innerHTML='Publish Listing'; nextBtn.classList.remove('bg-trust-blue'); nextBtn.classList.add('bg-success-teal'); }
    else { nextBtn.innerHTML='<span>Continue</span><span class="material-symbols-outlined text-lg">arrow_forward</span>'; nextBtn.classList.remove('bg-success-teal'); nextBtn.classList.add('bg-trust-blue'); }
  }

  nextBtn.addEventListener('click', () => {
    if (currentStep < totalSteps) { currentStep++; updateWizardUI(); }
    else { showToast('🎉 Internship listing published successfully!', 'success'); }
  });
  prevBtn.addEventListener('click', () => { if (currentStep > 1) { currentStep--; updateWizardUI(); } });

  // Stipend validation
  document.getElementById('stipend-input')?.addEventListener('input', (e) => {
    const warn = document.getElementById('stipend-warning');
    if (parseInt(e.target.value) < 500) { warn.classList.remove('hidden'); warn.classList.add('flex'); }
    else { warn.classList.add('hidden'); warn.classList.remove('flex'); }
  });

  // AI Toggle
  document.getElementById('ai-toggle')?.addEventListener('click', function() {
    const dot = this.querySelector('.toggle-dot');
    const isOn = dot.style.right !== 'auto';
    if (isOn) { dot.style.right='auto'; dot.style.left='4px'; this.classList.remove('bg-trust-blue'); this.classList.add('bg-outline-variant'); }
    else { dot.style.left='auto'; dot.style.right='4px'; this.classList.add('bg-trust-blue'); this.classList.remove('bg-outline-variant'); }
  });

  // Drag and Drop for ATS
  let dragData = null;
  window.__handleDrag = (e, stage, idx) => { dragData = { stage, idx }; e.dataTransfer.effectAllowed = 'move'; };
  window.__handleDrop = (e, targetStage) => {
    e.preventDefault();
    if (!dragData || dragData.stage === targetStage) return;
    const item = pipeline[dragData.stage].splice(dragData.idx, 1)[0];
    pipeline[targetStage].push(item);
    // Re-render ATS
    const ats = document.getElementById('ats-pipeline');
    if (ats) {
      ats.innerHTML = ['applied','interview','offered','joined'].map(stage => `
        <div class="bg-surface-container-low rounded-xl p-4 min-h-[200px]" data-stage="${stage}" ondragover="event.preventDefault()" ondrop="window.__handleDrop(event,'${stage}')">
          <p class="font-label-caps text-[10px] text-outline-variant mb-3">${stage.toUpperCase()} (${pipeline[stage].length})</p>
          ${pipeline[stage].map((c, i) => `
          <div class="bg-white p-3 rounded-lg shadow-sm border border-border-subtle mb-2 cursor-grab" draggable="true" ondragstart="window.__handleDrag(event,'${stage}',${i})">
            <div class="flex justify-between items-start"><p class="font-bold text-xs">${c.name}</p><span class="text-[10px] font-bold text-trust-blue">${c.score}%</span></div>
            <p class="text-[10px] text-on-surface-variant">${c.university}</p>
          </div>`).join('')}
        </div>`).join('');
    }
    showToast(`Moved ${item.name} to ${targetStage}`, 'info');
    dragData = null;
  };

  initMobileMenu();
  return initScrollHeader();
}
