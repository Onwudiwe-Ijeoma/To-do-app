import React, { useState } from 'react'
import Form from './form';



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({ id: null, value: '' });


    // const [hidden, setHidden] = useState(false);

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };



    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />;
    }




    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <button className='editBtn' onClick={() => setEdit({ id: todo.id, value: todo.text })}> Edit </button>
                <button className='delBtn' onClick={() => removeTodo(todo.id)}> Delete</button>
            </div>
        </div>

    ));
}

export default Todo;