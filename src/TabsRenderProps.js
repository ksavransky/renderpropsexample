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

class TabsRenderProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0,
    }
  }

  setTab = (tabNumber) => this.setState({currentTab: tabNumber})

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
