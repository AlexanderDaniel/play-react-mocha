/** @jsx React.DOM */

// Example from https://facebook.github.io/jest/docs/tutorial-react.html

var React  = requirejs("react"),
	TestUtils = React.addons.TestUtils;
var CheckboxWithLabel = requirejs("CheckboxWithLabel");
var assert = require("assert");
var jsdom = require("jsdom").jsdom;

describe('CheckboxWithLabel', function() {
    beforeEach(function() {
        // https://github.com/tmpvar/jsdom#creating-a-browser-like-window-object
        global.document = jsdom('');
        global.window = document.parentWindow;
    });

    afterEach(function() {
    	delete global.window;
    	delete global.document;
    });

    it('changes the text after click', function() {

        // Render a checkbox with label in the document
        var checkbox = TestUtils.renderIntoDocument(
            <CheckboxWithLabel labelOn="On" labelOff="Off" />
        );

        // Verify that it's Off by default
        var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
        assert.equal(label.getDOMNode().textContent, "Off");

        // Simulate a click and verify that it is now On
        var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
        TestUtils.Simulate.change(input);
        assert.equal(label.getDOMNode().textContent, "On");
    });
});
