const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6smji4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



// // cypress.config.js
// module.exports = {
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     overwrite: false,
//     html: false,
//     json: true
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   }
// }
const configs = [
  {
    reporter: 'cypress-html-reporter',
    reporterOptions: {
      output: 'cypress/results/report1.html' // Specify report location
    }
  },
  
];


// // // cypress.config.js
// // const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// // module.exports = {
// //   reporter: 'junit',
// //   reporterOptions: {
// //     mochaFile: 'cypress/reports/junit/results-[hash].xml'
// //   },
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       allureWriter(on, config);
// //       return config;
// //     }
// //   }
// // }
