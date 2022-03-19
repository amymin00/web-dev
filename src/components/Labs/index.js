import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <TodoList />
        </div>
    )
};

export default Labs;