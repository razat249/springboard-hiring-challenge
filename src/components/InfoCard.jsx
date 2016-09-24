import React, { Component } from 'react';

const InfoCardStyle = {
  image: {
    'height': '200px',
    'width': '100%',
  },
  title: {
    'color': '#026AA7'
  },
  description: {
    'color': 'grey',
  },
  user: {
    'position': 'relative',
    'top': '5px',
    'padding': '5px',
    'backgroundColor': 'rgba(2, 106, 167, 0.71)',
    'color': 'white',
  },
  hours: {
    'position': 'relative',
    'top': '5px',
    'padding': '5px',
    'backgroundColor': 'rgba(2, 106, 167, 0.71)',
    'color': 'white',
  },
}

class InfoCard extends Component {
  render() {
    let data = this.props.children;
    // let tags = data.tags.split(', ');
    // let tag_list = [];
    // for (let i = 0; i < tags.length; i++) {
    //     tag_list.push(<span key={i} className="label label-default">{tags[i]}</span>)
    // }

    return (
      <div style={ InfoCardStyle }>
        <div>
          <div className="pull-right">
            <span style={ InfoCardStyle.hours }>
              <span className="glyphicon glyphicon glyphicon-time" aria-hidden="true"></span> {data.hours} Hours
            </span>
            <span style={ InfoCardStyle.user }>
              <span className="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span> {data.learner} Learners
            </span>
          </div>
          <img style={ InfoCardStyle.image } src={ data ? data.image : '' } alt={data.name} className="img-responsive"/>
        </div>
        <hr />
        <div>
          <h4 style={ InfoCardStyle.title }><strong>{ data.name }</strong></h4>
          <p style={ InfoCardStyle.description }>{ data.description }</p>
        </div>
        <div>
          <span><a>▲</a> <span className="badge">12</span> <a>▼</a> <span className="badge">4</span></span>
          <span className="pull-right"><a href={ data.sign_up } target="_blank">View Curriculum</a></span>
        </div>
      </div>
    );
  }
}

export default InfoCard;
