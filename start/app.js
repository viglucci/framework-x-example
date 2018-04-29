const express = require('express');
const { Router, ExpressRouterFactory } = require('framework-x').http; // using npm link
const NamedControllerRouteHandlerResolver = require('../app/NamedControllerRouteHandlerResolver');
const NamedMiddlewareResolver = require('../app/NamedMiddlewareResolver');
const routes = require('./routes');

const app = express();

ExpressRouterFactory.registerMiddlewareResolver('string', new NamedMiddlewareResolver());
ExpressRouterFactory.registerRouterHandlerResolver('string', new NamedControllerRouteHandlerResolver());

app.use(ExpressRouterFactory.create(routes));

module.exports = app;
