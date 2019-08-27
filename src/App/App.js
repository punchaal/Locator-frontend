import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/loginForm';
import SuccessSignUp from '../RegistrationForm/Success';
import Home from '../Home/home'
import Locations from '../Locations/LocationsList';
import Table from '../CSS Challenge/Table';

export default class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/success' component={SuccessSignUp} />
          <Route path = '/home' component = {Home}/>
          <Route path = '/locations' component = {Locations}/>
          <Route path = '/Css' component = {Table}/>
        </Switch>
      </main>
    )
  }
}