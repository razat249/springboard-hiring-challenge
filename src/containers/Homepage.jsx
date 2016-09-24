import React, { Component } from 'react';
import Search from '../components/Search';
import InfoCard from '../components/InfoCard'
import axios from "axios";

const HomepageStyle = {
  search: {
    'margin': '65px 0 15px 0',
  },
  loading: {
    'color': 'grey',
  },
  list: {
    'margin': '0 15px 15px 15px',
  },
}

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      data : false,
    }
  }

  componentDidMount() {
    const self = this
    // Make a request to the api.
    axios.get('https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths')
      .then(function (response) {
        console.log(response.data.paths);
        self.setState({
          data: response.data.paths
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let arr = [];
    for (let i = 0; i < this.state.data.length; i++) {
      arr.push(
        <a href="#" className="list-group-item col-md-4" style={ HomepageStyle.list }>
          <InfoCard>{ this.state.data[i] }</InfoCard>
        </a>
      );
    }

    return (
      <div className="container">
        <div style={ HomepageStyle.search }>
          <Search />
        </div>
        <div className="text-center" style={ HomepageStyle.loading }>
          <h4>{this.state.data ? '' : 'Loading...'}</h4>
        </div>
        {
          this.state.data ?
          <div className="list-group row">{ arr }</div>
          : ''
        }
      </div>
    );
  }
}

export default Homepage;
