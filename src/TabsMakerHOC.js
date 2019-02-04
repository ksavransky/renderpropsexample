import React, { Component } from 'react';
import './App.css';

const TabsMakerHOC = (TabBodyComponent, TabControlComponent, tabInformation) => (
  class TabsContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentTab: 0,
      }
    }

    setTab = (tabNumber) => this.setState({currentTab: tabNumber})

    render() {
      const currentBody = tabInformation[this.state.currentTab].body
      return (
        <div>
          <TabControlComponent tabInformation={tabInformation} setTab={this.setTab} currentTab={this.state.currentTab} />
          <TabBodyComponent content={currentBody} />
        </div>
      )
    }
  }
)


export default TabsMakerHOC;
