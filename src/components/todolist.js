import React, { useState } from 'react'
import Form from './form';
import Todo from './todo';

const Todolist = () => {
    const [todos, setTodos] = useState([])

    /// =======ADD TODO FUNCTION
    //========add a new item to the list

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) { //this line makes sure we do not type empty todo 
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);


        window.localStorage.setItem(todo.id, JSON.stringify(todo));
        // console.log(newTodos);
    };


    //============edit buton function
    const updateTodo = (todoId, newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        //update the todo state
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );

        //const Edit = JSON.parse(window.localStorage.getItem(todoId));
        window.localStorage.setItem(todoId, JSON.stringify(newValue));
        console.log(todoId);
    };


    //================delete function
    //checks the actual array and removes it from the applicationj
    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    //output todolist function to dom
    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {

            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    return (
        <div>
            <Form onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />



        </div>
    )
}

export default Todolist;