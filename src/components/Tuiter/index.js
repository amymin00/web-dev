import {Outlet} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationSidebar from "./NavigationSideBar";
import "./tuiter.css";
import WhoReducer from "./Reducers/WhoReducer";
import TuitsReducer from "./Reducers/TuitsReducer";
import WhoToFollowList from "./WhoToFollowList";

const reducer = combineReducers({
    tuits: TuitsReducer, who: WhoReducer
});
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row my-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;