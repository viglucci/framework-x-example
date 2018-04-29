const { http } = require('framework-x'); // using npm link
const { RouteHandlerResolver } = http;

const availableMiddleware = {
    'global': require('./middleware/global'),
    'v1': require('./middleware/v1'),
    'v2': require('./middleware/v2')
};

class NamedMiddlewareResolver {

    resolve(middlewareName) {
        const middleware = availableMiddleware[middlewareName];
        if (!middleware) {
            throw new Error(`Could not resolve middleware with name ${middlewareName}`);
        }
        return middleware.bind(middleware);
    }
}

module.exports = NamedMiddlewareResolver;