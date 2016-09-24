import React, { Component } from 'react';

const SearchStyle = {
  'marginTop': '50px',
}

class Search extends Component {
  render() {
    return (
      <div style={ SearchStyle }>
        <input type="text" className="form-control" id="usr" placeholder="Search tags" />
      </div>
    );
  }
}

export default Search;
