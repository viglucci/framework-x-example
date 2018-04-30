const { ApplicationContextBuilder } = require('framework-x');

const app = new ApplicationContextBuilder()
  .withAutoloadPaths(require('./autoload'))
  .withServiceProviders(require('./providers'))
  .withRouter(require('./router'))
  .build();

module.exports = app;
