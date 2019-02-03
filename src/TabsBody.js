import React, { Component } from 'react';
import './App.css';

class TabsBody extends Component {
  render() {
    return (
      <div className="tabs-body">
        {this.props.content || 'Empty'}
      </div>
    );
  }
}

export default TabsBody;
