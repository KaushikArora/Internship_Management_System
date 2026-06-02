// ===== Shared Components =====

export function navbar(activePage = '', isLoggedIn = false) {
  const user = isLoggedIn;
  return `
  <header id="main-header" class="flex justify-between items-center w-full px-margin-desktop h-20 sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border-subtle">
    <div class="flex items-center gap-base">
      <a href="/" class="flex items-center gap-base no-underline">
        <span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings:'FILL' 1">terminal</span>
        <span class="font-display-lg text-headline-lg font-extrabold text-primary">Internship HQ</span>
      </a>
      <nav class="hidden md:flex items-center gap-margin-desktop ml-8">
        <a href="/internships" class="font-body-sm text-body-sm ${activePage==='internships'?'text-primary font-bold border-b-2 border-primary':'text-on-surface-variant hover:text-primary'} transition-colors">Find Internships</a>
        <a href="/hackathons" class="font-body-sm text-body-sm ${activePage==='hackathons'?'text-primary font-bold border-b-2 border-primary':'text-on-surface-variant hover:text-primary'} transition-colors">Hackathons</a>
        <a href="/assessment" class="font-body-sm text-body-sm ${activePage==='challenges'?'text-primary font-bold border-b-2 border-primary':'text-on-surface-variant hover:text-primary'} transition-colors">Challenges</a>
        <a href="/dashboard" class="font-body-sm text-body-sm ${activePage==='leaderboard'?'text-primary font-bold border-b-2 border-primary':'text-on-surface-variant hover:text-primary'} transition-colors">Leaderboard</a>
        <a href="/employer" class="font-body-sm text-body-sm ${activePage==='employer'?'text-primary font-bold border-b-2 border-primary':'text-on-surface-variant hover:text-primary'} transition-colors">For Employers</a>
        <a href="/admin" class="font-body-sm text-body-sm ${activePage==='admin'?'text-primary font-bold border-b-2 border-primary':'text-on-surface-variant hover:text-primary'} transition-colors">Admin</a>
      </nav>
    </div>
    <div class="flex items-center gap-4">
      ${user ? `
        <button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" id="notif-btn">notifications</button>
        <a href="/profile" class="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center border-2 border-primary text-primary font-bold cursor-pointer hover:shadow-lg transition-shadow">JD</a>
      ` : `
        <button id="login-btn" class="text-trust-blue font-body-sm text-body-sm font-bold hover:opacity-80 transition-opacity">Login</button>
        <a href="/dashboard" class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-body-sm text-body-sm font-bold hover:shadow-lg transition-all active:opacity-80 no-underline">Sign Up</a>
      `}
      <button id="mobile-menu-btn" class="md:hidden material-symbols-outlined text-on-surface-variant">menu</button>
    </div>
  </header>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="fixed inset-0 bg-white z-[60] hidden flex-col p-8 md:hidden">
    <div class="flex justify-between items-center mb-8">
      <span class="font-display-lg text-headline-lg font-extrabold text-primary">Internship HQ</span>
      <button id="mobile-menu-close" class="material-symbols-outlined text-2xl">close</button>
    </div>
    <nav class="flex flex-col gap-4">
      <a href="/internships" class="text-lg font-semibold py-3 border-b border-border-subtle">Find Internships</a>
      <a href="/hackathons" class="text-lg font-semibold py-3 border-b border-border-subtle">Hackathons</a>
      <a href="/assessment" class="text-lg font-semibold py-3 border-b border-border-subtle">Challenges</a>
      <a href="/dashboard" class="text-lg font-semibold py-3 border-b border-border-subtle">Leaderboard</a>
      <a href="/employer" class="text-lg font-semibold py-3 border-b border-border-subtle">For Employers</a>
      <a href="/admin" class="text-lg font-semibold py-3 border-b border-border-subtle">Admin</a>
      <a href="/profile" class="text-lg font-semibold py-3 border-b border-border-subtle">My Profile</a>
    </nav>
  </div>`;
}

export function footer() {
  return `
  <footer class="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container border-t border-border-subtle">
    <div class="flex flex-col items-center md:items-start gap-4">
      <a href="/" class="flex items-center gap-2 no-underline">
        <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1">terminal</span>
        <span class="font-display-lg text-title-md font-bold text-primary">Internship HQ</span>
      </a>
      <p class="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left max-w-xs">The high-trust matching platform for the next generation of industry leaders.</p>
      <p class="font-body-sm text-body-sm text-on-surface-variant opacity-60">© 2024 Internship HQ. All rights reserved.</p>
    </div>
    <div class="flex flex-wrap justify-center gap-8">
      <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Privacy Policy</a>
      <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Terms of Service</a>
      <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Contact Us</a>
      <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Student FAQ</a>
      <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors" href="#">Employer Guide</a>
    </div>
    <div class="flex gap-4">
      <div class="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined">share</span></div>
      <div class="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined">public</span></div>
    </div>
  </footer>`;
}

export function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-menu-close');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.remove('hidden'));
    close?.addEventListener('click', () => menu.classList.add('hidden'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
  }
}

export function initScrollHeader() {
  const handler = () => {
    const header = document.getElementById('main-header');
    if (header) header.classList.toggle('shadow-md', window.scrollY > 20);
  };
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}

// Login modal
export function showLoginModal() {
  const modal = document.createElement('div');
  modal.id = 'login-modal';
  modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] flex items-center justify-center fade-in';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl slide-up">
      <div class="flex justify-between items-center mb-6">
        <h2 class="font-headline-lg text-headline-lg">Welcome Back</h2>
        <button id="close-login" class="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">close</button>
      </div>
      <form id="login-form" class="space-y-4">
        <div><label class="font-label-caps text-label-caps text-on-surface-variant block mb-1">EMAIL</label>
        <input type="email" id="login-email" required class="w-full px-4 py-3 bg-surface-bg border border-border-subtle rounded-lg" placeholder="you@university.edu"/></div>
        <div><label class="font-label-caps text-label-caps text-on-surface-variant block mb-1">PASSWORD</label>
        <input type="password" id="login-password" required class="w-full px-4 py-3 bg-surface-bg border border-border-subtle rounded-lg" placeholder="••••••••"/></div>
        <button type="submit" class="w-full bg-trust-blue text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all">Sign In</button>
        <p class="text-center text-on-surface-variant text-body-sm">Don't have an account? <a href="/dashboard" class="text-primary font-bold" id="goto-signup">Sign Up</a></p>
      </form>
    </div>`;
  document.body.appendChild(modal);
  document.getElementById('close-login').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    modal.remove();
    import('./data.js').then(m => m.showToast('Logged in successfully!', 'success'));
    import('./router.js').then(m => m.navigate('/dashboard'));
  });
}
