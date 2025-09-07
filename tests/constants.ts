/**
 * Test constants for Playwright tests
 */

// Supported languages for i18n testing
export const SUPPORTED_LANGUAGES = ["en", "ru", "he"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// Tailwind CSS breakpoints for responsive testing
export const VIEWPORT_SIZES = {
  mobile: { width: 375, height: 667 }, // less than sm (640px)
  sm: { width: 640, height: 480 }, // sm breakpoint
  md: { width: 768, height: 1024 }, // md breakpoint
  lg: { width: 1024, height: 768 }, // lg breakpoint
  xl: { width: 1280, height: 720 }, // xl breakpoint
  "2xl": { width: 1536, height: 864 }, // 2xl breakpoint
} as const;

// Test selectors and data-testids
export const TEST_SELECTORS = {
  // Header
  burgerButton: '[data-testid="burger-button"]',
  mobileMenu: '[data-testid="mobile-menu"]',
  desktopMenu: '[data-testid="desktop-menu"]',
  languageDropdown: '[data-testid="language-dropdown"]',
  
  // Language buttons
  languageEn: '[data-testid="language-en"]',
  languageRu: '[data-testid="language-ru"]',
  languageHe: '[data-testid="language-he"]',
  
  // Sections
  helloArea: '#hello-area',
  aboutArea: '#about-me-area',
  techStackArea: '#stack-area',
  projectsArea: '#projects-area',
  contactsArea: '#contacts-area',
  
  // Navigation links
  navLinkHome: '[data-testid="nav-link-hello-area"]',
  navLinkAbout: '[data-testid="nav-link-about-me-area"]',
  navLinkTech: '[data-testid="nav-link-stack-area"]',
  navLinkProjects: '[data-testid="nav-link-projects-area"]',
  navLinkContacts: '[data-testid="nav-link-contacts-area"]',
} as const;

// Test timeouts
export const TEST_TIMEOUTS = {
  short: 1000,
  medium: 3000,
  long: 5000,
  veryLong: 10000,
} as const;

// Common test data
export const TEST_DATA = {
  // User info
  userName: "Stanislav Zaitsev",
  userJobTitle: "Frontend Developer",
  
  // Expected content
  expectedSections: ["hello-area", "about-me-area", "stack-area", "projects-area", "contacts-area"],
  
  // Language attributes
  rtlLanguages: ["he"],
  ltrLanguages: ["en", "ru"],
} as const;
