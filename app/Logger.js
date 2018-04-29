class Logger {

    info () {
        console.log(...arguments);
    }

    error() {
        console.error(...arguments);
    }

    warn() {
        console.warn(...arguments);
    }
}

module.exports = Logger;