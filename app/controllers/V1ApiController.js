const names = require('starwars-names');

class V1ApiController {
  names(req, res) {
    res.json(names.all);
  }
}

module.exports = V1ApiController;
