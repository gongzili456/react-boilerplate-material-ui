import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import createHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './styles/main.scss'

const theme = createMuiTheme({
  palette: {
    // type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__, history)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

const render = () => {
  const App = require('./containers/App').default

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App store={store} history={history} />
    </MuiThemeProvider>,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    // Setup hot module replacement
    module.hot.accept([
      './containers/App'
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
render()
