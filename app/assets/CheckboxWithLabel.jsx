/** @jsx React.DOM */

// Example from https://facebook.github.io/jest/docs/tutorial-react.html

define(['react'], function (React) {

    var CheckboxWithLabel = React.createClass({
        getInitialState: function() {
            return { isChecked: false };
        },
        onChange: function() {
            this.setState({isChecked: !this.state.isChecked});
        },
        render: function() {
            return (
                <label>
                    <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                    />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                </label>
                );
        }
    });

    return CheckboxWithLabel;
});
