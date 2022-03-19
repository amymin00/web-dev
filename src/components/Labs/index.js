import React from 'react';
import Classes from './Classes';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoList from './Todo/TodoList';

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <TodoList />
            <h1>Web Dev Assignments</h1>
            <ul>
                <li><a href='tuiter/'>Tuiter</a></li>
                <li><a href='labs/a2/index.html'>Assignment 2 Labs</a></li>
                <li><a href='labs/a3/css/index.html'>Assignment 3 Labs</a></li>
                <li><a href='labs/a4/bootstrap/index.html'>Assignment 4 Labs</a></li>
                <li><a href='labs/a5/js/index.html'>Assignment 5 Labs</a></li>
            </ul>
        </div>
    )
};

export default Labs;