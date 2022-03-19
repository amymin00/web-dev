import React from 'react';
import { Link } from 'react-router-dom';
import ExploreScreen from './ExploreScreen/index.js';
import './style.css';

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>

            <ExploreScreen />
        </>
    )
};

export default Tuiter;