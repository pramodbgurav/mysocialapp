import React, { useState, useEffect } from 'react';
import './App.css';

import
{
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import Nav from "./components/nav";

import Maincomponent from './components/main-component';


import UserContext from './components/Context';
import User from './components/User';



function App ()
{
  const [ posts, setPosts ] = useState([]);
  const [ user, setUser ] = useState({ id: '', name: '' })

  // const users = {
  //   1: "Pramod Gurav",
  //   2: "Sandeep Hirwale",
  //   3: "Shivraj Sawant",
  //   4: "Anushree Nair",
  //   5: "Dhruv Dvivedi"
  // };





  function loadPost ()
  {

    return (

      <main>
        <Maincomponent allPosts={ posts }></Maincomponent>
      </main>
    )
  }



  function onFormSubmitUser (userData)
  {
    setUser(userData);
  }



  const methods = {
    onFormSubmitUser,
    user
  }

  return (

    <UserContext.Provider value={ methods }>
      {
        user.id !== '' && user.id !== 0 ?
          <React.Fragment>
            <Nav />
            <Router>
              <div className="container"></div>
              <Route exact path="/" render={ loadPost } />
            </Router>
          </React.Fragment>
          :
          <User />
      }
    </UserContext.Provider>
  );
}

export default App;
