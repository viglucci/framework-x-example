
class V1ApiMiddleware {

    constructor({ Logger }) {
        this.Logger = Logger;
    }

    handle(req, res, next) {
        this.Logger.info('middleware: v1 api', req.originalUrl);
        next();
    }
}

module.exports = V1ApiMiddleware;