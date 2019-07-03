import React, { Component } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearICon from '@material-ui/icons/Clear';
export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    handleClick = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.show &&
                    <div className="alert alert-info notification" role="alert">
                        <h4>Welcome!</h4>
                        <p>Before you get to carried away, do you agree to us collecting anonimized statistics about your usage of our app?</p>
                        <div className="btn-container">
                            <button type="button" className="btn btn-outline-primary disagree" data-dismiss="alert" onClick={this.handleClick}>
                                <ClearICon />
                                Disagree</button>
                            <button type="button" className="btn btn-info" onClick={this.handleClick}>
                                <CheckIcon />I agree</button>
                        </div>
                    </div>
                }
            </div>

        )
    }
}
