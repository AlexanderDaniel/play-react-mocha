// Setup requirejs to have the right base URL
global.requirejs = require("requirejs");

requirejs.config({
    nodeRequire: require,
    baseUrl: __dirname,

    paths: {
        react: "lib/react/react-with-addons"
    }
});

// Using Node.js assert module http://nodejs.org/api/assert.html
global.assert = require("assert");
