import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks';
import store from './redux'
import client from './graphql/client'
import Home from './components/home'
import ProductsPage from './components/productsPage'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => (
  <Fragment>
    <ApolloProvider client={client} >
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/:address" render={(props) => <ProductsPage {...props} />}/>
          </Switch>
          <Footer/>
        </Router>
      </Provider>
    </ApolloProvider>
  </Fragment>
)

export default App;
