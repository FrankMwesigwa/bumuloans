import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './app/layout/navBar';

import BookList from './app/books/booksList';
import BookAdd from './app/books/bookAdd';
import BookDetails from './app/books/bookDetails';
import BookEdit from './app/books/bookEdit';

import UserLogin from './app/auth/userLogin';
import setAuthToken from './app/auth/setAuthToken';
import PrivateRoute from './app/auth/privateRoute';
import { loadUser } from './store/auth/actions';
import store from './store';

if (localStorage.token) {
  // Set auth token header auth
  setAuthToken(localStorage.token);
  // Set user and isAuthenticated
  store.dispatch(loadUser);
}

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Fragment>
      <section className="container">
        <NavBar />
        <Switch>
          <Route exact path="/login" component={UserLogin} />
          <PrivateRoute exact path="/" component={BookList} />
          <PrivateRoute exact path="/books/add" component={BookAdd} />
          <PrivateRoute exact path="/books/:id" component={BookDetails} />
          <PrivateRoute exact path="/books/edit/:id" component={BookEdit} />
        </Switch>
      </section>
    </Fragment>
  </BrowserRouter>
  );
  }
}

export default App;
