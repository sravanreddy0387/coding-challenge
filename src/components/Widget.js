import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { height } from '@material-ui/system';

class Widget extends Component {

    render() {
        const { widget } = this.props;
        return (
            <div className='col-sm-4 text-center'>
                <div className='widget' style={{ backgroundColor: widget.color }}>
                    <span className='count'>
                        {widget.count}
                    </span>
                    <span className='last'>
                        {widget.lastnTotal}
                    </span>
                </div>
                {
                    widget.name
                }
            </div>

        )
    }
}
Widget.prototypes = {
    widget: PropTypes.object.isRequired,
}
export default Widget;