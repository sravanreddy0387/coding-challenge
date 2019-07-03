import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Widget from './Widget';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import TabHeaders from '../components/Tabs/TabHeaders';
import TabHeader from '../components/Tabs/TabHeader';
import TabBodies from '../components/Tabs/TabBodies';
import TabBody from '../components/Tabs/TabBody';
export default class OverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ name: 'Cat videos watched', color: 'red', lastnTotal: '84 last 30 days', count: 198 }, { name: 'Slices of pizza in the fridge', color: 'green', lastnTotal: '2 last 30 days', count: 5 }, { name: "Favourite songs beginning with the letter 'A'", color: 'green', lastnTotal: '23 last 30 days', count: 1324 },],
            selectedSubModule: "nav-home-tab"
        }
    }

    onTabChange = (selectedModule) => {
        this.setState({
            selectedSubModule: selectedModule
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <div className='overview row'>
                    <h3>Overview</h3>
                    <div className="widget-container">
                        {data.map((widget => {
                            return (

                                <Widget widget={widget} name={widget.name} key={widget.name} />

                            )
                        }))}
                    </div>
                </div>
                <div className='topmusic row'>
                    <h3>Top Music</h3>
                    <div className='music-content'>
                        <TabHeaders >

                            <TabHeader id="nav-home-tab"
                                selected={"nav-home-tab" === this.state.selectedSubModule}
                                name="Artists"
                                onTabSelect={() => this.onTabChange("nav-home-tab")}
                            >
                            </TabHeader>
                            <TabHeader id="nav-profile-tab"
                                selected={"nav-profile-tab" === this.state.selectedSubModule}
                                name="Songs"
                                onTabSelect={() => this.onTabChange("nav-profile-tab")}
                            >
                            </TabHeader>
                            <TabHeader id="nav-contact-tab"
                                selected={"nav-contact-tab" === this.state.selectedSubModule}
                                name="Songs"
                                onTabSelect={() => this.onTabChange("nav-contact-tab")}
                            >
                            </TabHeader>

                        </TabHeaders>
                        {/* <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Artists</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Songs</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Moods</a>
                            </div>
                        </nav> */}
                        <TabBodies selectedTab={this.state.selectedSubModule}>
                            <TabBody showId={'nav-home-tab'}>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">ARTIST</th>
                                            <th scope="col">PLAYS</th>
                                            <th scope="col">SONGS</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>The Wiggles</td>
                                            <td>86,340</td>
                                            <td>189</td>
                                            <td><DeleteIcon className="delete-icon" />
                                                <ShareIcon className="share-icon" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dolly Parton</td>
                                            <td>86,333</td>
                                            <td>244</td>
                                            <td><DeleteIcon className="delete-icon" />
                                                <ShareIcon className="share-icon" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Wellington International Ukulele Orchestra</td>
                                            <td>85,023</td>
                                            <td>12</td>
                                            <td><DeleteIcon className="delete-icon" /><ShareIcon className="share-icon" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabBody>
                            <TabBody showId={'nav-profile-tab'}>
                                <h3>Songs</h3>
                            </TabBody>
                            <TabBody showId={'nav-contact-tab'}>
                                <h3>artists</h3>
                            </TabBody>
                        </TabBodies>
                    </div>

                </div>

            </div>
        )
    }
}
