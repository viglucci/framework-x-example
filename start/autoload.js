const path = require('path');

module.exports = [
    path.resolve(`${__dirname}/../app/controllers/*.js`),
    path.resolve(`${__dirname}/../app/middleware/*.js`),
    path.resolve(`${__dirname}/../app/*.js`)
];