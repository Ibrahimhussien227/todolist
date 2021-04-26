import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";


function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        saveLocalTodos();
    })
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };
    return (

        <div className="App">
            <header>
                <h1>To Do List</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
            />
                <TodoList todos={todos} setTodos={setTodos}/>

        </div>
    );
}

export default App;
