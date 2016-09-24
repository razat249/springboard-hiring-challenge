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
}

class InfoCard extends Component {
  render() {
    let data = this.props.children;
    return (
      <div style={ InfoCardStyle }>


        <div>
          <img style={ InfoCardStyle.image } src={ data ? data.image : '' } alt={data.name} className="img-responsive"/>
        </div>
        <hr />
        <div>
          <h4 style={ InfoCardStyle.title }><strong>{ data.name }</strong></h4>
          <p style={ InfoCardStyle.description }>{ data.description }</p>
        </div>
      </div>
    );
  }
}

export default InfoCard;
