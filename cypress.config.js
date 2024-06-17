const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6smji4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// cypress.config.js
module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  }
}
module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    }
  }
}
