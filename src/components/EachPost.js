import React, { useState, useContext } from 'react';
import AllComments from './allComments';
import NewComment from './newComment';
// import { NavLink } from 'react-router-dom';
import Usercontext from "./Context";

export default function EachPost ({ post })
{
    const methods = useContext(Usercontext);
    const [ comment, showComments ] = useState(false);

    const setComment = () =>
    {
        showComments(!comment)
    }

    const displayComment = () =>
    {
        if (comment)
        {
            return <div>
                <NewComment postId={ post.id } />
                <AllComments postId={ post.id } />
            </div>
        }
    }
    return (
        <div class="post-bar">
            <div class="post_topbar">
                <div class="usy-dt">
                <img src={ `../images/${ methods.user.id }.png` } alt="" className="small-images" />
                    <div class="usy-name">
                        <h3>{ post.title }</h3>
                        
                    </div>
                </div>

            </div>
            <div class="epi-sec">
                <ul class="descp">
                    <li><span>Developer</span></li>
                    <li><span>India</span></li>
                </ul>

            </div>
            <div class="job_descp">
                <p>{ post.body }</p>
            </div>
            <div class="job-status-bar">

                <ul class="like-com">


                    <label class="fas fa-comment-alt setmargin" onClick={ () => { setComment() } }>Comments</label>

                </ul>
            </div>

            { displayComment() }
        </div >

    )

}

