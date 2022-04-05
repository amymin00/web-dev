import React from "react";
import {useDispatch} from "react-redux";
import { updateTuit } from "../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-comment me-2"></i>
                {tuit.stats.comments}
            </div>
            <div className="col">
                <i className="fas fa-retuit me-2"></i>
                {tuit.stats.retuits}
            </div>
            <div className="col wd-cursor-pointer" 
                 onClick={() => updateTuit(dispatch, {
                     ...tuit,
                     likes: tuit.likes + 1
            })}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                    style={{color: tuit.liked ? 'red': "white"}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </div>
            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>
        </div>
    );
}

export default TuitStats;