import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    
    const [newTuit, setNewTuit] = useState({
        tuit: 'New tuit',
        postedBy: {
            "username": "ReactJS"
        },
        "liked": false,
        "disliked": false,
        "verified": false,
        handle: "ReactJS",
        "logo-image": "/tuiter/assets/catpfp.jpg",
        "avatar-image": "/tuiter/assets/catpfp.jpg",
        stats: {
            comments: 123,
            retuits: 111,
            likes: 222,
            dislikes: 501
        }
    });

    return (
        <div className="row pt-2 mb-3">
            <div className="col-1 ms-3 align-top">
                <img src={'/tuiter/assets/catpfp.jpg'}
                    className="rounded-circle wd-avatar-image" />
            </div>
            <div className="col ps-4 w-100">
                <textarea 
                        onChange={(e) => setNewTuit({...newTuit, 
                                                     _id: `${(new Date()).getTime()}`,
                                                     tuit: e.target.value})}
                        className="form-control bg-black p-2 shadow-none w-100 text-white wd-input-box"
                        placeholder="What's happening?">
                </textarea>
                <hr/>
                <span>
                    <a href="#"><i className="far fa-image me-3"></i></a>
                    <a href="#"><i className="fas fa-chart-line me-3"></i></a>
                    <a href="#"><i className="far fa-smile me-3"></i></a>
                    <a href="#"><i className="far fa-calendar me-3"></i></a>
                </span>
                <button onClick={() => createTuit(dispatch, newTuit)} 
                        className="btn btn-primary fa-pull-right rounded-pill shadow-none">
                    Tuit
                </button>
            </div>
        </div>
    );
}


export default WhatsHappening;