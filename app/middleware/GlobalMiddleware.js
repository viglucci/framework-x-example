
class GlobalMiddleware {
    
    constructor({ Logger }) {
        this.Logger = Logger;
    }

    handle(req, res, next) {
        this.Logger.info('middleware: global', req.originalUrl);
        next();
    }
}

module.exports = GlobalMiddleware;