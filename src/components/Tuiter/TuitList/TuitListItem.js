import React from "react";
import './tuits.css';
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    // const deleteTuit = (tuit) => {
    //     dispatch({type: 'delete-tuit', tuit})
    // };    

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 align-text-top">
                    <img className="rounded-circle wd-avatar-image"
                            src={tuit['logo-image']}/>
                </div>
                <div className="col ps-4 w-100">
                    <i onClick={() => deleteTuit(dispatch, tuit)}
                        className="wd-cursor-pointer fa fa-remove fa-pull-right">
                    </i>
                    <span className="fw-bold">{tuit.userName}</span>
                    {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                    <span className="ms-1 text-secondary">@{tuit.handle}</span>
                    <div>
                        {tuit.tuit}
                    </div>
                    {
                        tuit.attachments && tuit.attachments.image &&
                        <img src={tuit.attachments.image}
                                className="mt-2 wd-border-radius-20px w-100" />
                    }
                    {
                        tuit.attachments && tuit.attachments.video &&
                        <iframe width="100%" height="350px"
                                className="mt-2 wd-border-radius-20px w-100"
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    }
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};

export default TuitListItem;