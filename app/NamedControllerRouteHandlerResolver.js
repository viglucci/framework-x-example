const { http } = require('framework-x'); // using npm link
const { RouteHandlerResolver } = http;
const HomeController = require('./controllers/HomeController');
const V1ApiController = require('./controllers/V1ApiController');
const V2ApiController = require('./controllers/V2ApiController');

const controllers = {
    'HomeController': new HomeController(),
    'V1ApiController': new V1ApiController(),
    'V2ApiController': new V2ApiController()
};

class NamedControllerRouteHandlerResolver extends RouteHandlerResolver {

    constructor() {
        super();
    }

    resolve(handler) {
        const parts = handler.split('.');
        const controllerName = parts[0];
        const methodName = parts[1];
        const controller = controllers[controllerName];
        if (!controller) {
            throw new Error(`Could not resolve controller with name ${controllerName}`);
        }
        return controller[methodName].bind(controller);
    }
}

module.exports = NamedControllerRouteHandlerResolver;