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


// render props work very similarly to a HOC
// let's you abstract what components are passed in and combine them with preset props

// using render props
// pass render props defined in TabsRenderProps to any children components via a function like so:

// NOTE: it's called renderProps because you are literally passing render={...} as a prop
// to the HOC-like TabsRenderProps component
// can change 'render' to 'renderABC' and it will work (change it in TabsRenderProps.js too - go look)
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
          )}
        />
      </div>
    );
  }
}

export default App;
