import React, { useContext, useState } from 'react'
import UserContext from './Context'
export default function User() {

    const userObjectNew = [
        { id: 0, username: "Select User" },
        { id: 1, username: "Pramod Gurav" }
        { id: 2, username: "Shivraj Sawant " },
        { id: 3, username: "Anushree Nair" },
        { id: 4, username: "Dhruv Dvivedi" },
       { id: 5, username: "Sandip Hirwale" },

    ];

    const [newUser, setNewUser] = useState({ id: "", username: "" });
    const { onFormSubmitUser } = useContext(UserContext);
    function onSubmit(e) {
        e.preventDefault();
        onFormSubmitUser(newUser)
    }
    function handleChange(evt) {
        console.log("-------- inhandlechange")
        console.log(evt)
        const id = evt.target.value;
        console.log(userObjectNew[id])
        setNewUser({
            username: userObjectNew[id],
            id: id
        });

    }
    return (
        <React.Fragment>
            <div class="main-section">
                <div class="container"> 
            <div className="main-section-data">
            <div className="appHeading"><h1>My Social App</h1></div>
                <div className="post-project-fields proj-fields-home">

                    <form onSubmit={onSubmit} id="loginForm" method="post">
                        <div class="row">
                         
                            <div class="col-md-6">

                                <label>
                                    <label>Choose User:</label>
                                </label>

                                <select name="user" onChange={handleChange}>
                                    {userObjectNew.map(user =>

                                        <option key={user.id} value={user.id}>{user.username}</option>
                                    )};
                         </select>
 


<button class="btn btn-primary" type="submit">set User</button>

                            </div>

                        </div>
                        
                    </form>
                </div>

            </div>
            </div>

</div>

        </React.Fragment>   
    )
}
