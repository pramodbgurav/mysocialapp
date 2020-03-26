import React, { useEffect, useState, useContext } from 'react';
// import {NavLink} from 'react-router-dom';

import Leftpanel from './left-panel';
import Centerpanel from './center-panel';
import Rightpanel from './right-panel';
import UserContext from './Context'
export default function Maincomponent ({ allPosts })
{
    const [ posts, setPosts ] = useState([]);
    const [ postCount, setPostCount ] = useState(0);
    const [ comments, setComments ] = useState([]);
    const [ commentCount, setCommentsCount ] = useState(0)
    let validPostIds = [];
    const { user } = useContext(UserContext);






    useEffect(() =>
    {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>
            {
                let vData = data.filter((vPost) =>
                {
                    if (vPost.userId == user.id)
                    {
                        validPostIds.push(vPost.id);
                        return vPost;
                    }
                })
                setPosts(vData)
            })

    }, [])


    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data =>
            {
                let vComments = data.filter((vComamnt) =>
                {
                    if (validPostIds.includes(vComamnt.postId))
                    {
                        return vComamnt;
                    }
                })
                setComments(vComments);
            }
            )

    }, [])
    function onAddPost (postdata)
    {
        let postedData = {
            "id": +new Date(),
            "title": postdata.title,
            "body": postdata.body

        }
        setPosts([ postedData, ...posts ] //speread operator copying todolist
        )
        setPostCount(postCount + 1);

    }

    function onFormSubmitComment (newComment)
    {
        let postedData = {
            "id": +new Date(),
            "body": newComment.body,
            "postId": newComment.postId
        }
        setComments([ postedData, ...comments ] //speread operator copying todolist
        )
        setCommentsCount(commentCount + 1)

    }

    const postContext = {
        onAddPost,
        comments: comments,
        postCount: postCount,
        commentCount: commentCount,
        onFormSubmitComment,
        posts,
        user
    }
    return (
        <UserContext.Provider value={ postContext }>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <Leftpanel></Leftpanel>
                            <Centerpanel allPosts={ posts }></Centerpanel>
                            <Rightpanel></Rightpanel>
                        </div>

                    </div>
                </div>
            </div>
        </UserContext.Provider>
    )

}