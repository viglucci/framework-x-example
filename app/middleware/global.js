module.exports = (req, res, next) => {
    console.log('middleware: global', req.originalUrl);
    next();
};