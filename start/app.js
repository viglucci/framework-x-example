const express = require('express');
const { Router, ExpressRouterFactory } = require('framework-x').http; // using npm link
const NamedControllerResolver = require('../app/NamedControllerResolver');
const NamedMiddlewareResolver = require('../app/NamedMiddlewareResolver');
const routes = require('./routes');
const { createContainer } = require('awilix');

const autoloadPaths = require('./autoload');
const container = createContainer().loadModules(autoloadPaths);

const app = express();
ExpressRouterFactory.registerMiddlewareResolver('string', new NamedMiddlewareResolver(container));
ExpressRouterFactory.registerRouterHandlerResolver('string', new NamedControllerResolver(container));
app.use(ExpressRouterFactory.create(routes));

module.exports = app;
