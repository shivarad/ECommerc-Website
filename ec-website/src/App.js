import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/Header';
import SingInUp from './pages/sign-In-up/sign-in-up';
import { auth , createUserProfileDocument } from './firbase/firebase.uttils';

class App extends React.Component {

  constructor(){   //in order to save state for firebase auth the App should be declare as a class
    super();
    this.state={
        currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log(this.state);

        });
      }
      else
      { this.setState({ currentUser: userAuth });
    } 
    });
  }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
render(){
  return (
    <div >
       <Header  currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SingInUp} />

      </Switch>
      {/* <HomePage/> */}
    </div>
  );
  }
}
export default App;
