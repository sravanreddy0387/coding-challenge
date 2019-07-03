import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabBodies extends Component {

    getTab(selectedTab) {

        const children = this.props.children;
        let selected = null;
        children.map((x, i) => {

            if (x.props.showId === selectedTab) {
                selected = React.cloneElement(x, {
                    key: i,
                });

            }
        })

        return selected;
    }

    render() {
        return (
            <div className="tab-content">
                {
                    this.getTab(this.props.selectedTab)
                }
            </div>
        );
    }
}

TabBodies.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array.isRequired]),
    styles: PropTypes.object,
    selectedTab: PropTypes.string.isRequired
};

export default TabBodies;