import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
          tuit: whatsHappening
        });
    }

    return (
        <div className="row pt-2 mb-3">
            <div className="col-1 ms-3 align-top">
                <img src={'/tuiter/assets/catpfp.jpg'}
                    className="rounded-circle wd-avatar-image" />
            </div>
            <div className="col ps-4 w-100">
                <textarea value={whatsHappening}
                        onChange={(event) => setWhatsHappening(event.target.value)}
                        className="form-control bg-black p-2 shadow-none w-100 text-white wd-input-box"
                        placeholder="What's happening?"></textarea>
                <hr/>
                <span>
                    <a href="#"><i className="far fa-image me-3"></i></a>
                    <a href="#"><i className="fas fa-chart-line me-3"></i></a>
                    <a href="#"><i className="far fa-smile me-3"></i></a>
                    <a href="#"><i className="far fa-calendar me-3"></i></a>
                </span>
                <button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill shadow-none">
                    Tuit
                </button>
            </div>
        </div>
    );
}


export default WhatsHappening;