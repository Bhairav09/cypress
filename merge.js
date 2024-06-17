const marge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const path = require('cypress\reports\mochawesome');

// Specify the directory where the JSON reports are located
const reportDir = path.join(__dirname, 'cypress/reports/mochawesome');

// Merge the JSON reports
marge([`${reportDir}/*.json`])
  .then(report => {
    // Generate the HTML report
    return generator.create(report, {
      reportDir: reportDir,
      reportFilename: 'combined-report'
    });
  })
  .then(() => {
    console.log('Combined report generated');
  })
  .catch(err => {
    console.error('Failed to generate combined report', err);
  });
