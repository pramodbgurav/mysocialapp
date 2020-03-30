import React, { useContext } from 'react';
import Usercontext from './Context'

import Searchpost from './search-post'

export default function Nav ()
{
    const methods = useContext(Usercontext);
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <a href="index.html" title=""><img src="images/logo.png" alt="" /></a>
                        </div>
                        <div className="search-bar">
                           <Searchpost></Searchpost>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="" title="">Home</a>
                                </li>


                                <li>
                                    <a href="#" title="" className="not-box-openm">Messages</a>
                                    <div className="notification-box msg" id="message">
                                        <div className="nt-title">
                                            <h4>Setting</h4>
                                            <a href="#" title="">Clear all</a>
                                        </div>
                                        <div className="nott-list">
                                            <div className="notfication-details">

                                                <div className="notification-info">
                                                    <h3><a href="messages.html" title="">Jassica William</a> </h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img2.png" alt="" />
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="messages.html" title="">Jassica William</a></h3>
                                                    <p>Lorem ipsum dolor sit amet.</p>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="view-all-nots">
                                                <a href="messages.html" title="">View All Messsages</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" title="" className="not-box-open">Notification</a>
                                    <div className="notification-box noti" id="notification">
                                        <div className="nt-title">
                                            <h4>Setting</h4>
                                            <a href="#" title="">Clear all</a>
                                        </div>
                                        <div className="nott-list">
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img1.png" alt="" />
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img2.png" alt="" />
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img3.png" alt="" />
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="notfication-details">
                                                <div className="noty-user-img">
                                                    <img src="images/resources/ny-img2.png" alt="" />
                                                </div>
                                                <div className="notification-info">
                                                    <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                                                    <span>2 min ago</span>
                                                </div>
                                            </div>
                                            <div className="view-all-nots">
                                                <a href="#" title="">View All Notification</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="menu-btn">
                            <a href="#" title=""><i className="fa fa-bars"></i></a>
                        </div>
                        <div className="user-account">
                            <div className="user-info">
                                <img src={ `../images/${ methods.user.id }.png` } alt="" style={ { width: "30px" } } />

                            </div>
                            <div className="user-account-settingss" id="users">
                                <h3>Online Status</h3>
                                <ul className="on-off-status">
                                    <li>
                                        <div className="fgt-sec">
                                            <input type="radio" name="cc" id="c5" />
                                            <label htmlFor="c5">
                                                <span></span>
                                            </label>
                                            <small>Online</small>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="fgt-sec">
                                            <input type="radio" name="cc" id="c6" />
                                            <label htmlFor="c6">
                                                <span></span>
                                            </label>
                                            <small>Offline</small>
                                        </div>
                                    </li>
                                </ul>
                                <h3>Custom Status</h3>
                                <div className="search_form">
                                    <form>
                                        <input type="text" name="search" />
                                        <button type="submit">Ok</button>
                                    </form>
                                </div>
                                <h3>Setting</h3>
                                <ul className="us-links">
                                    <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                                    <li><a href="#" title="">Privacy</a></li>
                                    <li><a href="#" title="">Faqs</a></li>
                                    <li><a href="#" title="">Terms &amp; Conditions</a></li>
                                </ul>
                                <h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </React.Fragment>
    )
}
