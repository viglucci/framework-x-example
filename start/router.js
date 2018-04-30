const { Router } = require('framework-x').http;
// using npm link
const router = new Router();

router.middleware('GlobalMiddleware');

router.get('/', (req, res) => {
  res.send('hello world from a route closure');
});

router.group('/api', (apiRouter) => {
  apiRouter.group('/v1', (apiV1Router) => {
    apiV1Router.middleware('V1Middleware');
    apiV1Router.get('/names', 'V1ApiController.names');
    apiV1Router.get('/add', 'AdditionController.add');
  });

  apiRouter.group('/v2', (apiV2Router) => {
    apiV2Router.middleware('V2Middleware');
    apiV2Router.get('/names', 'V2ApiController.names');
  });
});

router.get('/home', 'HomeController.index');

module.exports = router;

