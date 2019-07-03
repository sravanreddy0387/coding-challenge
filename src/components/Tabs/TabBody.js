import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabBody extends Component {

    render() {

        return (
            <div className="tab-pane fade show active">
                {this.props.children}
            </div>
        );
    }
}

TabBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array.isRequired]),
    selected: PropTypes.bool,
};

export default TabBody;
