import "./App.css"
import {Task, TodolistItem} from "./TodolistItem.tsx";

function App() {
    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"
    const task_1: Task[] = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: true},
    ]
    const task_2: Task[] = [
        // {id: 4, title: "Cola", isDone: true},
        // {id: 5, title: "Cheeps", isDone: true},
        // {id: 6, title: "Beer", isDone: true},
    ]
    return (
        <div className="app">
            <TodolistItem
                title={todolistTitle_1}
                tasks={task_1}
            />
            <TodolistItem
                title={todolistTitle_2}
                tasks={task_2}
            />
        </div>
    )
}

export default App
