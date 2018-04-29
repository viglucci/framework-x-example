const { http } = require('framework-x'); // using npm link
const { RouteHandlerResolver } = http;
const HomeController = require('./HomeController');
const V1ApiController = require('./V1ApiController');
const V2ApiController = require('./V2ApiController');

const controllers = {
    'HomeController': new HomeController(),
    'V1ApiController': new V1ApiController(),
    'V2ApiController': new V2ApiController()
};

class ControllerRouteHandlerResolver extends RouteHandlerResolver {

    constructor() {
        super();
    }

    resolve(handler) {
        const parts = handler.split('.');
        const controllerName = parts[0];
        const methodName = parts[1];
        const controller = controllers[controllerName];
        return controller[methodName].bind(controller);
    }
}

module.exports = ControllerRouteHandlerResolver;