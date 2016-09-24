import React, { Component } from 'react';
import Search from '../components/Search';
import InfoCard from '../components/InfoCard'
import axios from "axios";

const HomepageStyle = {
  search: {
    'margin': '65px 0 0 0',
  },
  loading: {
    'color': 'grey',
  },
  list: {
    'margin': '15px auto',
    'height': '500px',
    'width': '330px',
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
        <div className="col-md-4">
          <li href="#" key={i} className="list-group-item" style={ HomepageStyle.list }>
            <InfoCard>{ this.state.data[i] }</InfoCard>
          </li>
        </div>
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

        <hr />
        <p className="text-center">Have a look at my
          <strong><a href="https://www.github.com/razat249" target="_blanck"> Github </a></strong>
          and
          <strong><a href="https://in.linkedin.com/in/rajatpatkar"> LinkedIn </a></strong>
          Profiles
        </p>
        <h4 className="text-center"><small>Made by Rajat Patwa</small></h4>
        <br />
        <br />


      </div>
    );
  }
}

export default Homepage;
