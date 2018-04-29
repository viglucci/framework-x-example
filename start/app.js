const express = require('express');
const { Router, ExpressRouterFactory } = require('framework-x').http; // using npm link
const ControllerRouteHandlerResolver = require('../app/http/ControllerRouteHandlerResolver');
const routes = require('./routes');

const app = express();

ExpressRouterFactory.registerResolver('string', new ControllerRouteHandlerResolver());

const expressRouter = ExpressRouterFactory.create(routes);

app.use(expressRouter);

module.exports = app;
