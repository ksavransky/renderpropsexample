import React, { Component } from 'react';

const DATA = [
  {header: 'SJ',
   body: 'Sharks',
  },
  {header: 'LA',
   body: 'Kings',
  },
  {header: 'Chicago',
   body: 'Black Hawks',
  },
]

// implement a component that works with render props
// this component is very similar to an HOC in functionality
class TabsRenderProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0,
    }
  }

  setTab = (tabNumber) => this.setState({currentTab: tabNumber})

  // create render props to pass to any child components
  // note: not using the this.props.children, just this.props.render
  render() {
    const currentBody = DATA[this.state.currentTab].body
    const renderProps = {
      content: currentBody,
      tabInformation: DATA,
      setTab: this.setTab,
      currentTab: this.state.currentTab,
    }
    return (
      <div>
        {this.props.render(renderProps)}
      </div>
    )
  }
}

export default TabsRenderProps;
