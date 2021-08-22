import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import List from './List';
import Error from './Error';
import Item from './Item';
import './index.css';

const Index = () => {

    return(
       <Router>
        <Switch>
         <Route exact path="/">
          <Home/>
         </Route>
         <Route exact path="/About">
          <About/>
         </Route>
         <Route exact path="/List">
          <List/>
         </Route>
         <Route path="/item/:id" children={<Item/>}></Route>
         <Route path="*">
          <Error/>
         </Route>
        </Switch>
       </Router>
    )

}

export default Index
