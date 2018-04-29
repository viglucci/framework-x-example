
class HomeController {

    constructor() {

    }

    index(req, res, next) {
        res.send('Hello from the HomeController');
    }
}

module.exports = HomeController;