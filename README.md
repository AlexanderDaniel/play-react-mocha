[Play Framework](https://www.playframework.com) application using [React](https://facebook.github.io/react/).

Testing the React component with [sbt-mocha](https://github.com/sbt/sbt-mocha).

[Node.js](http://nodejs.org) has to be installed.

There are still issues when sbt-mocha downloads and installs the [jsdom](https://github.com/tmpvar/jsdom):

- [Problem with npm dependency resolution](https://github.com/sbt/sbt-js-engine/issues/20)
- [npm dependency resolution issue with sbt-web](https://github.com/playframework/playframework/issues/3565)

To work around these issues run `npm install node-gyp && sbt web-assets:jseNpmNodeModules` before running any other commands.

To do a clean run: `rm -rf node_modules/ && npm install node-gyp && sbt web-assets:jseNpmNodeModules`.

Run the application with `sbt run`.

Run the tests with `sbt mocha` or with `sbt test`.
