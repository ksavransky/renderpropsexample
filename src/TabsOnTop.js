import React, { Component } from 'react';
import './App.css';

class TabsOnTop extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <ul className="tabs-on-top">
        {this.props.tabInformation.map((tab, index) => <li key={tab.header} className={index === this.props.currentTab ? 'active' : ''} onClick={() => this.props.setTab(index)}>{tab.header}</li>)}
      </ul>
    );
  }
}

export default TabsOnTop;
