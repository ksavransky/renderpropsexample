import React, { Component } from 'react';
import TabsMaker from './TabsMaker.js'
import TabsBody from './TabsBody.js'
import TabsOnTop from './TabsOnTop.js'
import './App.css';

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

class App extends Component {
  render() {
    const TabsContainer = TabsMaker(TabsBody, TabsOnTop, DATA)
    return (
      <div className="App">
        {<TabsContainer />}
      </div>
    );
  }
}

export default App;
