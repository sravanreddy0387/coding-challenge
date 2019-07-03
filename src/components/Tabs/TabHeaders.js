import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabHeaders extends Component {
    render() {
        return (
            <nav>
                <div className="nav nav-tabs" id="nav-tab">
                    {this.props.children}
                </div>
            </nav>
        )
    }
}

TabHeaders.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array.isRequired]),
}

export default TabHeaders;
