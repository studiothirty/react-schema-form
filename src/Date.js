/**
 * Created by steve on 22/12/15.
 */
import React from 'react';
import utils from './utils';
import classNames from 'classnames';
import ComposedComponent from './ComposedComponent';
import DatePicker from 'material-ui/DatePicker';

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

    formatDate = function (e) {
      var dateForString;
      if (e instanceof Date) {
        dateForString = e
      } else {
        dateForString = new Date(e);
      }
      if (e) {
        console.log(dateForString)
        return dateForString.getDate() + '/' + (parseInt(dateForString.getMonth()) + 1) + '/' + dateForString.getFullYear()
      } else {
        console.log('none')
        return ''
      }
    };

    convertDate = function (e) {
      var dateForString;
      console.log('convert date')
      console.log(e)
      if (e instanceof Date) {
        console.log('is date')
        console.log(e)
        return e;
      } else if (e) {
        console.log(e)
        console.log('so')
        var dates = e.split('-')
        var year = dates[0]
        var month = ("0" + dates[1]).slice(-2)
        var day = ("0" + dates[2]).slice(-2)

        return new Date(year + '-' + month + '-' + day)
      } else {
        console.log('nope')
        return null;
      }

    };

    render() {
        return (
            <div style={{width: '100%', display: 'block'}}>
                <DatePicker
                    mode={"landscape"}
                    autoOk={true}
                    value={this.convertDate(this.props.value)}
                    formatDate={this.formatDate}
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
