import React, { useState } from 'react';



export default function Comment ({ comment })
{
    return (
        <div >
            <div class="job_descp">

                <div className="comment-display"> { comment.body }</div>
            </div>

        </div >

    )

}

