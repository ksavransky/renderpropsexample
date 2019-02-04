import React, { Component } from 'react';
import './App.css';

class TabsBody extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div className="tabs-body">
        {this.props.content}
      </div>
    );
  }
}

export default TabsBody;
