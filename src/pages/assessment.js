// ===== Assessment Engine — Coding Challenge =====
import { showToast } from '../data.js';

export function renderAssessment(app) {
  app.innerHTML = `
  <!-- Custom header for Assessment -->
  <header class="bg-surface/95 backdrop-blur-sm px-margin-desktop h-20 flex justify-between items-center w-full sticky top-0 z-50 border-b border-border-subtle shrink-0">
    <div class="flex items-center gap-base">
      <a href="/" class="font-display-lg text-title-md font-extrabold text-primary no-underline">Internship HQ</a>
      <div class="h-6 w-[1px] bg-outline-variant mx-4"></div>
      <div class="flex flex-col"><span class="font-label-caps text-label-caps text-on-surface-variant">CHALLENGE</span><span class="font-title-md text-body-lg font-bold">Python Data Science: Predictive Analytics</span></div>
    </div>
    <div class="flex items-center gap-gutter">
      <div class="flex items-center gap-2 bg-success-teal/10 px-4 py-2 rounded-full border border-success-teal/20 status-pulse">
        <span class="material-symbols-outlined text-success-teal text-[18px]" style="font-variation-settings:'FILL' 1">videocam</span>
        <span class="font-label-caps text-label-caps text-success-teal">PROCTORED LIVE</span>
      </div>
      <div class="flex flex-col items-end"><span class="font-label-caps text-label-caps text-on-surface-variant">TIME REMAINING</span><span class="font-metric-num text-metric-num text-primary" id="countdown">42:18</span></div>
      <button id="submit-assessment" class="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold font-body-sm hover:opacity-90 transition-opacity flex items-center gap-2">Submit <span class="material-symbols-outlined text-[18px]">send</span></button>
    </div>
  </header>

  <main class="flex-grow flex overflow-hidden" style="height:calc(100vh - 80px)">
    <!-- Sidebar: Instructions -->
    <aside class="w-[400px] border-r border-border-subtle bg-white flex flex-col overflow-hidden shrink-0">
      <div class="flex-grow overflow-y-auto custom-scrollbar p-card-padding">
        <div class="flex items-center gap-2 mb-4"><span class="material-symbols-outlined text-trust-blue">description</span><h2 class="font-title-md text-title-md">Challenge Instructions</h2></div>
        <div class="space-y-4 text-on-surface-variant font-body-sm leading-relaxed">
          <p>Build a robust data preprocessing pipeline for a marketing dataset using <code class="bg-surface-container px-1 rounded">pandas</code> and <code class="bg-surface-container px-1 rounded">scikit-learn</code>.</p>
          <h3 class="font-bold text-on-surface mt-6">Task Description</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Load the dataset from the provided CSV source.</li>
            <li>Handle missing values in the 'Income' column using the median value.</li>
            <li>Encode the categorical feature 'Education' using a Label Encoder.</li>
            <li>Normalize the 'Purchase_Score' using a StandardScaler.</li>
            <li>Return the final processed DataFrame.</li>
          </ul>
          <div class="bg-surface-container-low p-4 rounded-xl border border-border-subtle mt-8">
            <span class="font-label-caps text-label-caps text-primary">CONSTRAINTS</span>
            <ul class="space-y-1 text-[13px] mt-2">
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary rounded-full"></span> Time complexity: O(n)</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary rounded-full"></span> Max memory: 512MB</li>
              <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary rounded-full"></span> Library: pandas >= 1.3.0</li>
            </ul>
          </div>
        </div>
        <!-- Test Cases -->
        <div class="mt-12">
          <div class="flex items-center justify-between mb-4"><h2 class="font-title-md text-title-md">Test Cases</h2><span id="test-count" class="text-xs font-bold text-on-surface-variant">2/5 PASSED</span></div>
          <div id="test-cases" class="space-y-3">
            <div class="p-3 bg-success-teal/5 border border-success-teal/20 rounded-lg flex items-center justify-between"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-success-teal">check_circle</span><span class="font-body-sm font-semibold">Missing Values Handling</span></div><span class="text-xs text-success-teal">0.02s</span></div>
            <div class="p-3 bg-success-teal/5 border border-success-teal/20 rounded-lg flex items-center justify-between"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-success-teal">check_circle</span><span class="font-body-sm font-semibold">Categorical Encoding</span></div><span class="text-xs text-success-teal">0.05s</span></div>
            <div class="p-3 bg-error/5 border border-error/20 rounded-lg flex items-center justify-between"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-error">cancel</span><span class="font-body-sm font-semibold">Scaling Accuracy</span></div><span class="text-xs text-error">FAILED</span></div>
            <div class="p-3 bg-surface-bg border border-border-subtle rounded-lg flex items-center justify-between opacity-50"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-outline">radio_button_unchecked</span><span class="font-body-sm font-semibold">Edge Case: Empty DF</span></div><span class="text-xs text-outline">Pending</span></div>
            <div class="p-3 bg-surface-bg border border-border-subtle rounded-lg flex items-center justify-between opacity-50"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-outline">radio_button_unchecked</span><span class="font-body-sm font-semibold">Performance Check</span></div><span class="text-xs text-outline">Pending</span></div>
          </div>
        </div>
      </div>
      <div class="p-4 border-t border-border-subtle bg-surface-container-lowest"><div class="flex items-center gap-2 text-on-surface-variant"><span class="material-symbols-outlined text-[18px]">security</span><span class="text-[12px] font-semibold">AI Anti-Plagiarism: <span class="text-success-teal">CLEAN</span></span></div></div>
    </aside>

    <!-- IDE -->
    <div class="flex-grow flex flex-col bg-on-surface">
      <div class="h-12 bg-inverse-surface flex items-center px-4 justify-between">
        <div class="flex items-center gap-1 h-full">
          <div class="bg-on-surface px-4 h-full flex items-center gap-2 border-t-2 border-primary"><span class="text-white font-body-sm font-semibold">solution.py</span></div>
          <div class="px-4 h-full flex items-center text-white/40 text-[14px] hover:text-white cursor-pointer transition-colors">test_suite.py</div>
        </div>
        <div class="flex items-center gap-4 text-outline-variant"><span class="material-symbols-outlined text-[18px]">settings</span></div>
      </div>
      <div class="flex-grow code-editor p-6 relative overflow-auto flex">
        <div class="w-10 flex flex-col items-end pr-4 text-outline/30 font-mono select-none text-sm"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span></div>
        <textarea id="code-editor" class="flex-grow font-mono text-[14px] leading-relaxed text-white/90 bg-transparent border-none outline-none resize-none" spellcheck="false">import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder

# Global Assessment: Python Data Science Challenge
def preprocess_marketing_data(df):
    # 1. Handle missing values in Income
    median_income = df['Income'].median()
    df['Income'].fillna(median_income, inplace=True)
    
    # 2. Encode Education categories
    le = LabelEncoder()
    df['Education'] = le.fit_transform(df['Education'])
    
    # 3. Scaling Purchase Score
    scaler = StandardScaler()
    df['Purchase_Score'] = scaler.fit_transform(df[['Purchase_Score']])
    
    return df</textarea>
        <div class="absolute bottom-10 right-10 flex gap-4">
          <button id="run-code" class="bg-surface-container-highest/10 hover:bg-surface-container-highest/20 text-white backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 group"><span class="material-symbols-outlined text-[20px] group-hover:rotate-45 transition-transform">bolt</span> Run Code</button>
          <button id="run-tests" class="bg-gamify-indigo text-on-primary px-5 py-2.5 rounded-lg font-bold shadow-lg shadow-gamify-indigo/30 hover:brightness-110 transition-all flex items-center gap-2"><span class="material-symbols-outlined text-[20px]">play_arrow</span> Run Tests</button>
        </div>
      </div>
      <!-- Terminal -->
      <div class="h-48 bg-[#050e19] border-t border-white/5 flex flex-col">
        <div class="px-4 py-2 bg-white/5 flex items-center justify-between">
          <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-outline-variant">terminal</span><span class="font-label-caps text-label-caps text-outline-variant">CONSOLE OUTPUT</span></div>
          <span class="text-[10px] text-outline/50 font-mono">Python 3.9.12</span>
        </div>
        <div id="terminal-output" class="flex-grow p-4 font-mono text-[13px] text-outline-variant overflow-y-auto dark-ide-scrollbar">
          <p class="text-success-teal">[PASS] Test Case 1: Null values eliminated.</p>
          <p class="text-success-teal">[PASS] Test Case 2: Label encoding validated (classes: 0, 1, 2).</p>
          <p class="text-error">[FAIL] Test Case 3: Expected standard deviation of 1.0, got 0.892.</p>
          <p class="text-primary mt-2">&gt; _</p>
        </div>
      </div>
    </div>
  </main>

  <footer class="h-10 bg-surface-container-low border-t border-border-subtle px-margin-desktop flex justify-between items-center text-xs shrink-0">
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-success-teal"></span><span class="text-on-surface-variant font-medium">Connected: Amsterdam AWS-2</span></div>
      <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-trust-blue">waves</span><span class="text-on-surface-variant font-medium">Ping: 24ms</span></div>
    </div>
    <div class="flex items-center gap-6">
      <span class="text-on-surface-variant italic">Candidate ID: #UNST-9921</span>
      <div class="flex items-center gap-1 text-on-surface-variant font-bold"><span class="material-symbols-outlined text-[16px]">visibility</span> SCREEN RECORDING ACTIVE</div>
    </div>
  </footer>`;

  // Timer
  let timeLeft = 42 * 60 + 18;
  const timerEl = document.getElementById('countdown');
  const timerInterval = setInterval(() => {
    if (timeLeft <= 0) { timerEl.textContent = '00:00'; timerEl.classList.add('text-error'); return; }
    timeLeft--;
    timerEl.textContent = `${Math.floor(timeLeft/60)}:${(timeLeft%60).toString().padStart(2,'0')}`;
  }, 1000);

  // Run Code
  document.getElementById('run-code')?.addEventListener('click', () => {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML += `<p class="text-white/60 mt-2">$ python solution.py</p><p class="text-success-teal">Execution completed in 0.34s</p><p class="text-white/40">DataFrame shape: (200, 5)</p><p class="text-primary">&gt; _</p>`;
    terminal.scrollTop = terminal.scrollHeight;
    showToast('Code executed successfully', 'success');
  });

  // Run Tests
  document.getElementById('run-tests')?.addEventListener('click', () => {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = '';
    const code = document.getElementById('code-editor').value;
    
    // Basic code validation logic
    const hasNullHandling = code.includes('fillna') || code.includes('dropna');
    const hasLabelEncoding = code.includes('LabelEncoder');
    const hasScaling = code.includes('StandardScaler') || code.includes('MinMaxScaler');
    
    const results = [
      { msg: 'Test 1: Null values eliminated.', pass: hasNullHandling },
      { msg: 'Test 2: Label encoding validated.', pass: hasLabelEncoding },
      { msg: 'Test 3: Scaling accuracy verified.', pass: hasScaling },
      { msg: 'Test 4: Edge case handled.', pass: true },
      { msg: 'Test 5: Performance under 500ms.', pass: true }
    ];

    let passedCount = 0;
    
    results.forEach((r, i) => {
      setTimeout(() => {
        if (r.pass) {
          terminal.innerHTML += `<p class="text-success-teal">[PASS] ${r.msg}</p>`;
          passedCount++;
        } else {
          terminal.innerHTML += `<p class="text-error">[FAIL] ${r.msg}</p>`;
        }
        terminal.scrollTop = terminal.scrollHeight;
        
        if (i === results.length - 1) {
          if (passedCount === results.length) {
            terminal.innerHTML += `<p class="text-trust-blue mt-2 font-bold">ALL TESTS PASSED — Score: 100%</p><p class="text-primary">&gt; _</p>`;
            showToast('🎉 All tests passed! Badge unlocked.', 'success');
          } else {
            terminal.innerHTML += `<p class="text-error mt-2 font-bold">SOME TESTS FAILED — Score: ${(passedCount/results.length)*100}%</p><p class="text-primary">&gt; _</p>`;
            showToast('❌ Some tests failed. Check the terminal output.', 'error');
          }
          document.getElementById('test-count').textContent = passedCount + '/5 PASSED';
        }
      }, (i + 1) * 600);
    });
  });

  // Submit
  document.getElementById('submit-assessment')?.addEventListener('click', () => {
    if (confirm('Submit your assessment? You cannot modify your code after submission.')) {
      showToast('Assessment submitted! Results will be available in 24h.', 'info');
      setTimeout(() => { import('../router.js').then(m => m.navigate('/dashboard')); }, 2000);
    }
  });

  return () => clearInterval(timerInterval);
}
