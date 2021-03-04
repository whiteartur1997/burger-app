import React, { Component } from 'react';
import { BurgerBuilder } from './component/BurgerBuilder/BurgerBuilder';
import { Layout } from './component/Layout/Layout';




class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    )
  }
}

export default App;
