[Play Framework](https://www.playframework.com) application using [React](https://facebook.github.io/react/).

Testing the React component with [sbt-mocha](https://github.com/sbt/sbt-mocha).

There is still one issue when sbt-mocha downloads and installs the [jsdom](https://github.com/tmpvar/jsdom)
Node dependency from [package.json](package.json) ([Details](https://github.com/sbt/sbt-mocha/issues/4)).
As workaround run `npm install --save-dev` first and then sbt-mocha works fine.

Run the application with `sbt run`.

Run the tests with `sbt mocha` or with `sbt test`.
