const express = require('express');
const names = require('starwars-names');
const { Router, ExpressRouterFactory } = require('framework-x').http; // using npm link
const ControllerRouteHandlerResolver = require('./http/ControllerRouteHandlerResolver');

const app = express();
const router = new Router();

ExpressRouterFactory.registerResolver('string', new ControllerRouteHandlerResolver());

router.middleware((req, res, next) => {
    console.log('global middleware', req.url);
    next();
});

router.get('/', (req, res) => {
    res.send('hello world from a route closure');
});

router.group('/api', (apiRouter) => {

    apiRouter.group('/v1', (apiV1Router) => {
        apiV1Router.middleware((req, res, next) => {
            console.log('v1 middleware', req.url);
            next();
        });
        apiV1Router.get('/names', 'V1ApiController.names');
    });

    apiRouter.group('/v2', (apiV2Router) => {
        apiV2Router.middleware((req, res, next) => {
            console.log('v2 middleware', req.url);
            next();
        });
        apiV2Router.get('/names', 'V2ApiController.names');
    });
});

router.get('/home', 'HomeController.index');

const expressRouter = ExpressRouterFactory.create(router);

app.use(expressRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
