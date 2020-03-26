import React, { useContext, useState } from 'react'
import UserContext from './Context';
export default function NewComment ({ postId })
{
    const [ newComment, setComment ] = useState({ id: "", body: "", postId: postId });
    const { onFormSubmitComment } = useContext(UserContext);
    const onSubmitComment = (e) =>
    {
        e.preventDefault();
        newComment.postId = postId;
        onFormSubmitComment(newComment);
    }
    const handleChange = (e) =>
    {
        setComment({ body: e.target.value });
    }
    return (
        <React.Fragment>
      
            <div className="post-project-fields">

                <form onSubmit={ onSubmitComment } method="post">
                    <div class="row">
                        <div class="col-lg-12">

                            <textarea name="body" onChange={ handleChange } placeholder="Enter your Comment details here">

                            </textarea>



                        </div>

                    </div>
                    <div class="post-st">
                        <button class="btn btn-primary" type="submit">Add </button>
                    </div>
                </form>
            </div>


        </React.Fragment>

    )

}