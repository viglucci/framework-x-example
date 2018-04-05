const express = require('express');
const names = require('starwars-names');
const framework = require('framework-x'); // using npm link
const Router = framework.http.Router
const RouterFactory = framework.http.ExpressRouterFactory

const app = express();
const router = new Router();

router.middleware((req, res, next) => {
    console.log('global middleware', req.url);
    next();
});

router.get('/', (req, res) => {
    res.send('hello world');
});

router.group('/api', (apiRouter) => {

    apiRouter.group('/v1', (apiV1Router) => {
        apiV1Router.middleware((req, res, next) => {
            console.log('v1 middleware', req.url);
            next();
        });
        apiV1Router.get('/names', (req, res) => {
            res.json(names.all);
        });
    });

    apiRouter.group('/v2', (apiV2Router) => {
        apiV2Router.middleware((req, res, next) => {
            console.log('v2 middleware', req.url);
            next();
        });
        apiV2Router.get('/names', (req, res) => {
            res.json(names.all);
        });
    });
});

app.use(RouterFactory.create(router));

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
