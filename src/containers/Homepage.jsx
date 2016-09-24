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

  filterData(query) {
    let newData = this.reserve.filter(element => {
      let n = element.tags.search(query)
      if (n === -1) {
        return false
      } else {
        return true
      }
    })

    this.setState({
      data: newData
    })
  }

  componentDidMount() {
    const self = this
    // Make a request to the api.
    axios.get('https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths')
      .then(response => {
        self.setState({
          data: response.data.paths
        })
        self.reserve = response.data.paths;
        console.log(self.reserve);
      })
      .catch(error => {
        console.log(error);
        window.alert("Something went wrong! try reloading")
      });
  }

  render() {
    let arr = [];
    for (let i = 0; i < this.state.data.length; i++) {
      arr.push(
        <a href="#" key={i} className="list-group-item col-md-3" style={ HomepageStyle.list }>
          <InfoCard>{ this.state.data[i] }</InfoCard>
        </a>
      );
    }

    return (
      <div className="container">
        <div style={ HomepageStyle.search }>
          <Search filterData={ this.filterData.bind(this) }/>
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
