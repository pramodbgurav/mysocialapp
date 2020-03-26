import React from 'react';
// import { NavLink } from 'react-router-dom';

import Post from './post'

import Allposts from './all-posts'

export default function Centerpanel({allPosts}) {
    return (
        <React.Fragment>
        <div className="col-lg-6 col-md-8 no-pd">
            <div className="post-topbar">
                <Post></Post>
            </div>

            <div className="posts-section"> 
            
            <Allposts allPosts={allPosts}></Allposts>
            </div>






        </div>
        </React.Fragment>
    )

}