import React, { Component } from 'react';

const NavigationBarStyle = {
  'backgroundColor': '#026AA7',
  title: {
    'color': 'white',
  }
}

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top" style={ NavigationBarStyle }>
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" style={ NavigationBarStyle.title } href="#">Learning hub</a>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default NavigationBar;
