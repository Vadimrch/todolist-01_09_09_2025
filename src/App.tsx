import "./App.css"
import {Task, TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

function App() {
    const todolistTitle = "What to learn"

   const result = useState<Task[]>(
        [
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "CSS", isDone: true},
            {id: 3, title: "JS", isDone: true},
        ]
    )

const tasks = result[0]
    const setTasks = result[1]

    const deleteTask = (taskId: Task["id"]) => {
        const nextState = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }
console.log(tasks)
    return (
        <div className="app">
            <TodolistItem
                title={todolistTitle}
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default App
