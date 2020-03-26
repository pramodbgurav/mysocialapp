import React, { useState } from 'react';
import Post from './post';
import EachPost from './EachPost';
// import { NavLink } from 'react-router-dom';


export default function AllPosts({ allPosts }) {


    return (
        allPosts.map(post => {
            return (

                <EachPost post={post} />


            )
        })


    )

}