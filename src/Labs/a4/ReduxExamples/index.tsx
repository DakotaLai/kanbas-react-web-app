import React from "react";
import HelloRedux from "./HelloRedux";
import CounterReducer from "./CounterRedux";
import AddReducer from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterReducer/>
      <AddReducer/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;