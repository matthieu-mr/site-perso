import React, {View} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import {Provider} from 'react-redux';

import {createStore, combineReducers}  from 'redux';

//import autres pages
import MyMenu from './Menu'
import Home from'./Home';
import Experiences from'./Experiences';
import Projets from "./Projets";


// redux 
import Modals from "./reducer/ModalReducer"

const store = createStore(combineReducers({Modals}));

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/projets" component={Projets} />
      </Switch>
    </Router>
    </Provider>



  );
}



// ...

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}




export default App;
