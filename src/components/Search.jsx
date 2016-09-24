import React, { Component } from 'react';

const SearchStyle = {
  'marginTop': '50px',
}

class Search extends Component {
  handleChange(event) {
    const query = event.target.value;
    this.props.filterData(query);
  }

  render() {
    return (
      <div style={ SearchStyle }>
        <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Search tags" />
      </div>
    );
  }
}

export default Search;
