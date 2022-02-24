import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utls';
import { onSnapshot } from 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // onAuthStateChanged open subscription, it's an open messaging system between our application and our firebase app.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, snapshot => {
          this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } });
          console.log(this.state.currentUser)
        })
      }
      else {
        this.setState({ currentUser: userAuth })
        console.log(this.state.currentUser)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>

      </>

    )
  }

}

export default App;
