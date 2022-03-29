import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({
        active = 'home'
    }) => {
    const [active_, setActive] = useState(active);

    return (
        <>
            <div className="list-group">
                <i className="fab fa-twitter list-group-item"></i>
                <Link to="/tuiter" 
                      className={`list-group-item list-group-item-action ${active_ === 'home' ? 'active' : ''}`}
                      onClick={() => setActive('home')}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore" 
                      className={`list-group-item list-group-item-action ${active_ === 'explore' ? 'active' : ''}`}
                      onClick={() => setActive('explore')}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <Link to="" 
                      className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}
                      onClick={() => setActive('notifications')}>
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </Link>
                <Link to="" 
                      className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}
                      onClick={() => setActive('messages')}>
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </Link>
                <Link to="" 
                      className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}
                      onClick={() => setActive('bookmarks')}>
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </Link>
                <Link to="" 
                      className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}
                      onClick={() => setActive('lists')}>
                    <i className="fa fa-list"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </Link>
                <Link to="" 
                      className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}
                      onClick={() => setActive('profile')}>
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <Link to="" 
                      className={`list-group-item list-group-item-action d-flex ${active === 'more' ? 'active' : ''}`}
                      onClick={() => setActive('more')}>
                    <div className="position-relative align-items-center start-0 w-auto">
                        <i className="fa fa-circle w-auto"></i>
                        <i className="fa fa-ellipsis-h w-auto p-0 text-black position-absolute"
                        style={{fontSize: '.55em',  marginLeft: '-1.15em', marginTop: '1em'}}></i>
                    </div>
                    <span className="d-none d-xl-inline ms-1">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <Link to="tuit.html"
                   className="btn btn-primary btn-block rounded-pill shadow-none">
                    Tuit
                </Link>
            </div>
        </>
    );
}

export default NavigationSidebar;