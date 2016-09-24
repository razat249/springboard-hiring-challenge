import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import Homepage from './Homepage';

class Layout extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Homepage/>
      </div>
    );
  }
}

export default Layout;
