import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { handleCheckbox,removeTodo } from "../redux/action";

import {trash} from 'react-icons-kit/feather/trash';
import {edit2} from 'react-icons-kit/feather/edit2';
import { Icon } from 'react-icons-kit';

export const Todo = ({ handleEditClick}) => {

    const dispatch = useDispatch();
    const Todos = useSelector((state) => state.reducer)
    console.log(Todos)
    return (<div>
        {Todos.map((todo) => (<div key={todo.id}>
            <div className='content'>
                <input type="checkbox" onChange={() => dispatch(handleCheckbox(todo.id))}
                    checked={todo.completed} />
                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </p>
                <div className='actions-box'>

                    <span onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span>
                    <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>

                </div>
            </div>
        </div>))
        }
    </div>)
}