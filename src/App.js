import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";


import Maincomponent from './components/main-component';


import UserContext from './components/Context';
import User from './components/User';



function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({ id: '', name: '' })

  function loadPost() {
    console.log("in loadpost")
    return (
      <Maincomponent allPosts={posts} ></Maincomponent>

    )
  }



  function onFormSubmitUser(userData) {
    setUser(userData);
  }


  const methods = {
    onFormSubmitUser,
    user

  }

  return (

    <UserContext.Provider value={methods}>
      {
        user.id !== '' && user.id !== 0 ?
          <React.Fragment>

            <Router>
              <Route exact path="/" render={loadPost} />
            </Router>
          </React.Fragment>
          :
          <User />
      }
    </UserContext.Provider>
  );
}

export default App;
