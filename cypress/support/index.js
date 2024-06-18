import { addReporter } from '@cypress/reporter';
import MochawesomeReporter from 'cypress-mochawesome-reporter';

addReporter('mochawesome', MochawesomeReporter);

const { mochawesomeReporter } = require('cypress-mochawesome-reporter');

module.exports = (on, config) => {
  on('report:task', (obj) => {
    if (obj.name === 'mochawesome') {
      return mochawesomeReporter(on, config);
    }
  });
};
