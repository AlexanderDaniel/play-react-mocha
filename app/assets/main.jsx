/** @jsx React.DOM */

require(['CheckboxWithLabel', 'react'], function (CheckboxWithLabel, React) {

    React.renderComponent(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />,
        document.getElementById('reactContainer')
    );

});
