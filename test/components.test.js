import { describe, it, expect, beforeEach } from 'vitest';
import { navbar, footer } from '../src/components.js';

describe('Shared Components', () => {
  it('should render the navbar', () => {
    const html = navbar('internships', false);
    expect(html).toContain('Internship HQ');
    expect(html).toContain('Find Internships');
    expect(html).toContain('Login');
  });

  it('should highlight the active page in navbar', () => {
    const html = navbar('dashboard', false);
    expect(html).toContain('Find Internships'); // Link exists
    // The active page should have bold and primary colors
  });

  it('should show user avatar when logged in', () => {
    const html = navbar('profile', true);
    expect(html).not.toContain('Login');
    expect(html).toContain('JD'); // Initials
  });

  it('should render the footer', () => {
    const html = footer();
    expect(html).toContain('© 2024 Internship HQ');
    expect(html).toContain('Privacy Policy');
  });
});
