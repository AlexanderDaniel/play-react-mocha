[Play Framework](https://www.playframework.com) application using [React](https://facebook.github.io/react/).

Testing the React component with [sbt-mocha](https://github.com/sbt/sbt-mocha).

There are still issues when sbt-mocha downloads and installs the [jsdom](https://github.com/tmpvar/jsdom):

- [Problem with npm dependency resolution](https://github.com/sbt/sbt-js-engine/issues/20)
- [npm dependency resolution issue with sbt-web](https://github.com/playframework/playframework/issues/3565)

Run the application with `sbt run`.

Run the tests with `sbt mocha` or with `sbt test`.
