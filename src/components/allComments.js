import React, { useContext } from 'react';

import EachComment from './Comment'

import Usercontext from "./Context";



export default function AllComments ({ postId })
{
    const { comments } = useContext(Usercontext);

    let vComments = comments.filter((comment) =>
    {
        return comment.postId == postId;
    })

    return (
        vComments.map(c =>
        {
            return (
                < EachComment comment={ c } />

            )
        })


    )

}