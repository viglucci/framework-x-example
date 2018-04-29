
class V2ApiMiddleware {

    constructor({ Logger }) {
        this.Logger = Logger;
    }

    handle(req, res, next) {
        this.Logger.info('middleware: v2 api', req.originalUrl);
        next();
    }
}

module.exports = V2ApiMiddleware;