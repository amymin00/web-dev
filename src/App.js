import './vendors/bootstrap/css/bootstrap.min.css';
import HelloWorld from './components/HelloWorld';
import Labs from './components/Labs';
import Tuiter from './components/Tuiter';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from './components/Tuiter/ExploreScreen';
import HomeScreen from './components/Tuiter/HomeScreen';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
            <Routes>
                <Route path="/">
                <Route path="labs"
                        element={<Labs/>}/>
                <Route path="hello"
                        element={<HelloWorld/>}/>
                <Route path="tuiter"
                        element={<Tuiter/>}>
                    <Route index
                            element={<HomeScreen/>}/>
                    <Route path="explore"
                            element={<ExploreScreen/>}/>
                    {/* <Route path="notifications" 
                            element={<NotificationScreen/>}/> */}
                </Route>
                </Route>
            </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;  