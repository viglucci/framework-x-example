const AdditionService = require('../services/AdditionService');

class AdditionServiceProvider {
  register(container) {
    // register bindings
    container.singleton('AdditionService', cradle => new AdditionService(cradle));
  }
}

module.exports = AdditionServiceProvider;
