import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabHeader extends Component {

    render() {
        const { name, selected } = this.props;
        return (
            <a className={`nav-item nav-link ${this.props.selected ? 'active' : ''}`} onClick={() => this.props.onTabSelect()} id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">{name}</a>
        )
    }
}

TabHeader.propTypes = {
    onTabSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string,
}
export default TabHeader;
