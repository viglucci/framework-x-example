const app = require('./start/app');

const Logger = app.resolve('Logger');

const port = 3000;

app.listen(port, () => {
  Logger.info(`Server listening on port ${port}`);
});
