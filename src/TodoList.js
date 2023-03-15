import React from 'react';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";


const TodoList = (props) => {
    return (
        <ul>
            {props.list.map(item=>
            <TodoListItem
            key={item.id}
            item={item}/>

            )}
        </ul>
            

    );
};
const mapStateToProps = (state) =>({
    list: state.todoList
})
export default connect(mapStateToProps) (TodoList);