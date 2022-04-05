import { CREATE_TUIT, UPDATE_TUIT, FIND_ALL_TUITS, DELETE_TUIT } from "../../actions/tuits-actions";

const TuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                action.newTuit,
                ...state
            ];
        case UPDATE_TUIT:
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }

                    return tuit;
                } else {
                    return tuit;
                }
            });
        default:
            return state;
    }
}
  

export default TuitsReducer;