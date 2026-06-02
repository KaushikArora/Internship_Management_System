// ===== Internship HQ — Mock Data Store =====

export const currentUser = {
  name: 'James Davidson',
  initials: 'JD',
  email: 'jdavidson@stanford.edu',
  university: 'UCLA',
  major: 'Computer Science',
  year: 'Class of 2025',
  gpa: '3.9/4.0',
  location: 'Palo Alto, CA',
  github: 'github.com/jdavidson-dev',
  profileStrength: 82,
  xp: 892,
  rank: 14,
  nationalRank: 42,
  streak: 12,
  verified: true,
  avatar: null
};

export const leaderboard = [
  { rank: 1, name: 'Alex Rivera', university: 'Stanford University', score: '12.4k', highlight: true },
  { rank: 2, name: 'Maya Gupta', university: 'MIT', score: '11.9k', highlight: false },
  { rank: 3, name: 'Ethan Park', university: 'CMU', score: '11.2k', highlight: false },
  { rank: 4, name: 'Sofia Mendez', university: 'UC Berkeley', score: '10.8k', highlight: false },
  { rank: 5, name: 'Liam O\'Connor', university: 'Georgia Tech', score: '10.1k', highlight: false },
];

export const internships = [
  { id: 1, title: 'Machine Learning Intern', company: 'TechFlow', code: 'TF', location: 'San Francisco, CA', tags: ['Python', 'PyTorch', 'Remote'], match: 98, verified: true, stipend: '$3,200/mo', closes: '5 Days', applicants: 210 },
  { id: 2, title: 'Product Designer', company: 'Nova Studio', code: 'UX', location: 'New York, NY', tags: ['Figma', 'UI/UX'], match: 85, verified: true, stipend: '$2,800/mo', closes: '12 Days', applicants: 87 },
  { id: 3, title: 'Frontend Engineer', company: 'Stripe', code: 'STR', location: 'Remote', tags: ['React', 'Tailwind', 'TypeScript'], match: 92, verified: true, stipend: '$3,500/mo', closes: '3 Days', applicants: 156 },
  { id: 4, title: 'Backend Engineering Challenge', company: 'Shopify', code: 'SHOP', location: 'Ottawa / Remote', tags: ['Node.js', 'GraphQL', 'PostgreSQL'], match: 88, verified: true, stipend: '$2,500/mo', closes: '2 Days', applicants: 120 },
  { id: 5, title: 'Quantitative Analysis Marathon', company: 'Goldman Sachs', code: 'GS', location: 'New York', tags: ['Python', 'R', 'Statistics'], match: 76, verified: true, stipend: '$4,800/mo', closes: '14 Days', applicants: 85 },
  { id: 6, title: 'Global Payments Hackathon', company: 'Stripe', code: 'STR', location: 'Remote', tags: ['APIs', 'Fintech', 'Security'], match: 81, verified: true, stipend: '$3,200/mo', closes: '5 Days', applicants: 210 },
];

export const skills = [
  { name: 'Backend Ninja', icon: 'terminal', color: 'primary', level: 'Issued 2024', earned: true },
  { name: 'Problem Solver', icon: 'diamond', color: 'gamify-indigo', level: 'Top 1% Rank', earned: true },
  { name: 'React Mastery', icon: 'token', color: 'success-teal', level: 'Verified Skill', earned: true },
  { name: 'System Architect', icon: 'lock', color: 'outline-variant', level: 'Locked', earned: false },
];

export const interviews = [
  { company: 'Google', type: 'Final Round', topic: 'System Design & Data Structures', date: 'Tomorrow', time: '10:00 AM', active: true },
  { company: 'Meta', type: 'Screening', topic: 'Behavioral with HR Team', date: 'Oct 24', time: '02:30 PM', active: false },
];

export const applications = [
  { id: 1, company: 'TechFlow', role: 'ML Intern', status: 'Interview', date: '2024-10-15' },
  { id: 2, company: 'Stripe', role: 'Frontend Engineer', status: 'Applied', date: '2024-10-18' },
  { id: 3, company: 'Google', role: 'SWE Intern', status: 'Offered', date: '2024-09-20' },
];

export const challenges = [
  { id: 1, title: 'Backend Performance Hack', company: 'Tech Giant Inc.', timer: '04:12:00', participants: 128, gradient: 'from-trust-blue to-gamify-indigo' },
  { id: 2, title: 'UX Accessibility Sprint', company: 'Innovate Labs', timer: '2 Days left', participants: 84, gradient: 'from-success-teal to-trust-blue' },
];

// ATS Pipeline data
export const pipeline = {
  applied: [
    { name: 'Alex Rivera', university: 'Stanford University', score: 94 },
    { name: 'Jordan Lee', university: 'UC Berkeley', score: 87 },
    { name: 'Priya Patel', university: 'Georgia Tech', score: 82 },
  ],
  interview: [
    { name: 'Sarah Chen', university: 'MIT', score: 98, badges: 2, priority: true },
    { name: 'Marcus Wong', university: 'CMU', score: 91, badges: 1, priority: false },
  ],
  offered: [
    { name: 'Jordan Poe', university: 'UC Berkeley', score: 89 },
  ],
  joined: []
};

// Toast system
export function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="material-symbols-outlined mr-2" style="vertical-align:middle">${type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}</span>${message}`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}
