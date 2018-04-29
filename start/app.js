const express = require('express');
const { Router, ExpressRouterFactory } = require('framework-x').http; // using npm link
const ControllerRouteHandlerResolver = require('../app/http/ControllerRouteHandlerResolver');
const routes = require('./routes');

const app = express();

ExpressRouterFactory.registerResolver('string', new ControllerRouteHandlerResolver());

app.use(ExpressRouterFactory.create(routes));

module.exports = app;
