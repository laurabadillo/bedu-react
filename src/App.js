import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

import './styles/App.css'; 
import ListUsers from './ui/Users/Users';
import About from './ui/About/About';
import Home from './ui/Home/Home';
import Images from './ui/Images/Images';
import ImageDetail from './ui/ImageDetail/ImageDetail';
import Nav from './ui/Nav/Nav';
import Users from './ui/Users/Users';
import Page404 from './ui/Page404/Page404';

// Class component 
const store = createStore(allReducers); 

const App = () => {

  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/images" exact component={Images} />
          <Route path="/images/:id" component={ImageDetail} />
          <Route path="/users" component={Users} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
