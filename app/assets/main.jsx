/** @jsx React.DOM */

require(['CheckboxWithLabel', 'react'], function (CheckboxWithLabel, React) {

    React.render(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />,
        document.getElementById('reactContainer')
    );

});
