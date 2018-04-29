const { Router } = require('framework-x').http; // using npm link
const router = new Router();

router.middleware('global');

router.get('/', (req, res) => {
    res.send('hello world from a route closure');
});

router.group('/api', (apiRouter) => {

    apiRouter.group('/v1', (apiV1Router) => {
        apiV1Router.middleware('v1');
        apiV1Router.get('/names', 'V1ApiController.names');
    });

    apiRouter.group('/v2', (apiV2Router) => {
        apiV2Router.middleware('v2');
        apiV2Router.get('/names', 'V2ApiController.names');
    });
});

router.get('/home', 'HomeController.index');

module.exports = router;

