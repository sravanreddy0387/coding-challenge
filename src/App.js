import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SideBar from './components/SideBar';
import OverView from './components/OverView';
import Notification from './components/Notification';
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col col-main">
          <Notification />
          <OverView />
        </div>

      </div>
    </div>
  );
}

export default App;
