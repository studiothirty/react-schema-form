/**
 * Created by steve on 22/12/15.
 */
import React from 'react';
var utils = require('./utils');
var classNames = require('classnames');
import ComposedComponent from './ComposedComponent';
const DatePicker = require('material-ui/DatePicker');

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
class DateElement extends React.Component {

    constructor(props) {
        super(props);
        this.onDatePicked = this.onDatePicked.bind(this);
    }


    onDatePicked(empty, date) {
        this.props.onChangeValidate(date);
    }

    formatDate = function(e) {
      var dateForString = new Date(e)
      return dateForString.getDate() + '/'  + (parseInt(dateForString.getMonth())+1) + '/' + dateForString.getFullYear()
    }

    render() {
        return (
            <div style={{width: '100%', display: 'block'}}>
                <DatePicker
                    mode={"landscape"}
                    autoOk={true}
                    defaultValue={this.formatDate(this.props.value)}
                    formatDate= {this.formatDate}
                    hintText={this.props.form.title}
                    onChange={this.onDatePicked}
                    onShow={null}
                    onDismiss={null}
                    disabled={this.props.form.readonly}
                    style={this.props.form.style || {width: '100%'}}/>

            </div>
        );
    }
}

export default ComposedComponent(DateElement);
