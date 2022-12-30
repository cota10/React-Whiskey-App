import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Whiskey, SignIn } from './components'
import { firebaseConfig } from './firebaseConfig';
import './style.css';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const temp_props = "Whiskey Collection"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={temp_props}/>
        </Route>
        <Route path='/whiskey'>
          <Whiskey></Whiskey>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

;
