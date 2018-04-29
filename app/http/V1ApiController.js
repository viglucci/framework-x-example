const names = require('starwars-names');

class V1ApiController {

    constructor() {

    }

    names(req, res, next) {
        res.json(names.all);
    }
}

module.exports = V1ApiController;