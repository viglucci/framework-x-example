const names = require('starwars-names');

class V2ApiController {

    constructor() {

    }

    names(req, res, next) {
        const set = {};
        names.all.map((name, index) => {
            set[index] = name;
        });
        res.json(set);
    }
}

module.exports = V2ApiController;