import React, { Component } from 'react';
import './App.css';

class TabsBody extends Component {
  render() {
    return (
      <div className="tabs-body-yellow">
        {this.props.content}
      </div>
    );
  }
}

export default TabsBody;
