import React, { useState, useContext } from 'react';
import Usercontext from "./Context";

export default function Post ()
{
    const postContext = useContext(Usercontext);
    const [ post, addPost ] = useState(
        {
            title: "",
            body: ""
        }
    );

    function handleChange (evt)
    {

        const value = evt.target.value;
        addPost({
            ...post,
            [ evt.target.name ]: value
        });

    }

    function onSubmit (e)
    {
        e.preventDefault();
        postContext.onAddPost(post);
    }

    return (
        <React.Fragment>
            <div class="user-picy">

            </div>
            <div className="post-project-fields">

                <form onSubmit={ onSubmit } method="post">
                    <div class="row">
                        <div class="col-lg-12">

                            <label>
                                <input type="text" name="title" value={ post.title } placeholder="Post Title" onChange={ handleChange } />
                            </label>

                            <textarea name="body" value={ post.body } onChange={ handleChange }>
                                Enter your Post details here
                        </textarea>



                        </div>

                    </div>
                    <div class="post-st">
                        <button class="btn btn-primary" type="submit">Post</button>
                    </div>
                </form>
            </div>


        </React.Fragment>
    )


}
