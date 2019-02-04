import React, { Component } from 'react';
import TabsMakerHOC from './TabsMakerHOC.js'
import TabsBody from './TabsBody.js'
import TabsOnTop from './TabsOnTop.js'
import TabsRenderProps from './TabsRenderProps.js'
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

// class App extends Component {
//   render() {
//     const TabsContainer = TabsMakerHOC(TabsBody, TabsOnTop, DATA)
//     return (
//       <div className="App">
//         <TabsContainer />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabsRenderProps
          render={renderProps => (
            <div>
              <TabsOnTop {...renderProps} tabInformation={DATA} />
              <TabsBody {...renderProps} />
            </div>
        )}/>
      </div>
    );
  }
}

export default App;
