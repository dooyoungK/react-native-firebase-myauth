import './config'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './store'
import AuthScreen from './containers/AuthScreen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore}>
        <AuthScreen />
      </Provider>
    );
  }
}
