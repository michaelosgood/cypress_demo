const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 720,
  pageLoadTimeout: 200000,
  e2e: {
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
