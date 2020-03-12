import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Leftpanel() {
    return (
        <div className="col-lg-3 pd-right-none no-pd">
            <div class="right-sidebar">
                <div class="widget widget-about">
                    <img src="images/wd-logo.png" alt="" />
                    <h3>Social Media App</h3>
                    <span>Post your ideas</span>
                    <div class="sign_link">
                        <h3><a href="sign-in.html" title="">Sign up</a></h3>
                        <a href="#" title="">Learn More</a>
                    </div>
                </div>


            </div>



        </div>
    )

}