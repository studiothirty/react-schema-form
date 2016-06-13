/**
 * Created by steve on 15/09/15.
 */
import React from 'react';
import ComposedComponent from './ComposedComponent';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
        if(this.props.value){
          this.state = {
              currentValue: this.props.value
          }
        }
        else {
          this.state = {
              currentValue: this.props.form.titleMap != null ? this.props.form.titleMap[0].value : ""
          }
        }
    }

    onSelected(event, selectedIndex, menuItem) {

        this.setState({
            currentValue: menuItem
        });
        event.target.value = menuItem;
        this.props.onChangeValidate(event);
    }

    render() {
        console.log(this.props.form.titleMap)
        const menuItems = this.props.form.titleMap.map((item, idx) => (
            <MenuItem key={idx}
                      primaryText={item.name}
                      value={item.value} />
        ));

        return (
            <SelectField
                value={this.state.currentValue}
                floatingLabelText={this.props.form.title}
                disabled={this.props.form.readonly}
                onChange={this.onSelected}
                fullWidth={true} >

                {menuItems}
            </SelectField>
        );
    }
}

export default ComposedComponent(Select);
