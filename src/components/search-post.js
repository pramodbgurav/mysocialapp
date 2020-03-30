import React, { useState, useContext } from 'react';
import UserContext from './Context';


export default function Searchpost(){
    const methods= useContext(UserContext);
    const [ seachpost, posttext ] = useState({  text: ""});
    console.log(methods);
    const onSearchPost = (e) =>
    {
        
        methods.onSearchPostData(seachpost);
         e.preventDefault();
       
     
    }
    const handleChange = (e) =>
    {
         posttext({ text: e.target.value });
    }
    return(
        <form onSubmit={ onSearchPost } method="post">
            <input type="text" name="search" placeholder="Search Post" onChange={ handleChange } />
            <button type="submit"><i className="la la-search"></i></button>
        </form>

    )
}
