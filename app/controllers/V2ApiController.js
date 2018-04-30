const names = require('starwars-names');

class V2ApiController {
  names(req, res) {
    const map = {};
    for (let i = 0; i < names.length; i++) {
      map[i] = names[i];
    }
    res.json(map);
  }
}

module.exports = V2ApiController;
