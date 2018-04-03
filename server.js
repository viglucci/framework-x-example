const express = require('express');
const names = require('starwars-names');
const { Router } = require('framework-x'); // linked locally from https://github.com/viglucci/framework-x
const app = express();
const router = new Router();

router.group('/api', (apiRouter) => {
    apiRouter.group('/v1', (apiV1Router) => {
        apiV1Router.get('/names', (req, res) => {
            res.json(names.all);
        });
    });
});

app.use(router.bind(express.Router()));

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
