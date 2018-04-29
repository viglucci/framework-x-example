module.exports = (req, res, next) => {
    console.log('middleware: v1', req.originalUrl);
    next();
};