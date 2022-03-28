import React from "react";
import HelloReduxExampleComponent
 from "./hello-redux-example-component";
import hello from "./Reducers/hello";
import todos from "./Reducers/todos-reducer";
import {Provider} from "react-redux";
import {createStore, combineReducers}
       from "redux";
import Todos from "./todos-component";
const Reducers =
      combineReducers({hello, todos})

const store = createStore(Reducers);

const ReduxExamples = () => {
 return(
   <Provider store={store}>
     <div>
       <h2>Redux Examples</h2>
       <Todos/>
       <HelloReduxExampleComponent/>
     </div>
   </Provider>
 );
};
export default ReduxExamples;