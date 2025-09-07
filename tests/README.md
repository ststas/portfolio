# E2E Tests with Playwright

This project uses Playwright for End-to-End testing of the portfolio.

## Test Structure

```
tests/
├── components/               # Component tests
│   ├── introduction.spec.ts  # Introduction component tests
│   ├── navigation.spec.ts    # Navigation tests
│   ├── projects.spec.ts      # Projects and tech stack section tests
│   └── responsive.spec.ts    # Responsive design tests
├── pages/                    # Page tests
│   └── homepage.spec.ts      # Homepage tests
├── utils/                    # Test utilities
│   └── test-helpers.ts       # Helper functions
├── constants.ts              # Test constants and configuration
├── accessibility.spec.ts     # Accessibility tests
└── README.md                 # This file
```

## Running Tests

### Installing Dependencies

```bash
npm run test:install
```

### Running All Tests

```bash
npm test
```

### Running Tests with UI

```bash
npm run test:ui
```

### Running Tests in Headed Mode (with browser)

```bash
npm run test:headed
```

### Debugging Tests

```bash
npm run test:debug
```

### Viewing Reports

```bash
npm run test:report
```

## Test Coverage

### Core Features

- ✅ Homepage loading
- ✅ All sections display
- ✅ Navigation between sections
- ✅ Responsive design on different devices
- ✅ Accessibility
- ✅ Component interactivity
- ✅ Cross-browser compatibility

### Components

- ✅ Introduction component
- ✅ Header and navigation
- ✅ Projects section
- ✅ Tech Stack section
- ✅ Footer
- ✅ Responsive layouts

### Browsers

- ✅ Chromium
- ✅ Firefox
- ✅ WebKit (Safari)
- ✅ Mobile Chrome
- ✅ Mobile Safari

## Configuration

### Main Configuration

Main configuration is located in `playwright.config.ts`:

- Base URL: `http://localhost:3003`
- Automatic dev server startup
- CI/CD settings
- Browser configuration

### Test Constants

`constants.ts` contains centralized test configuration:

- `VIEWPORT_SIZES` - Tailwind CSS breakpoints (sm, md, lg, xl, 2xl)
- `TEST_SELECTORS` - Common selectors and data-testids
- `TEST_TIMEOUTS` - Timeout configurations
- `TEST_DATA` - Test data and expected values

### Utilities

`test-helpers.ts` contains helper functions:

- `waitForPageLoad()` - wait for page load
- `setViewportSize()` - change screen size
- `takeScreenshot()` - create screenshots
- `getViewportSize()` - get current viewport size

## CI/CD

Tests are configured for automatic execution in CI/CD:

- Retry on CI: 2 attempts
- 1 worker on CI for stability
- HTML and JSON reports
- Screenshots and videos on errors

## Debugging

### Viewing Results

After running tests, results are saved in:

- `test-results/` - screenshots, videos, traces
- `playwright-report/` - HTML report

### Useful Commands

```bash
# Run specific test
npx playwright test tests/components/introduction.spec.ts

# Run tests for specific browser
npx playwright test --project=chromium

# Run tests in debug mode
npx playwright test --debug tests/components/introduction.spec.ts
```

## Adding New Tests

1. Create a new file in the appropriate folder
2. Import constants from `constants.ts` for consistent configuration
3. Use existing utilities from `test-helpers.ts`
4. Follow the pattern of existing tests
5. Add data-testid attributes to components when necessary
6. Use Tailwind CSS breakpoints from `VIEWPORT_SIZES` for responsive tests

## Troubleshooting

### Launch Issues

- Ensure dev server starts on port 3003
- Check that all dependencies are installed
- Make sure Playwright browsers are installed

### Test Issues

- Check selectors in tests
- Ensure data-testid attributes are added to components
- Check timeouts for slow operations
