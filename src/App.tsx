import "./App.css"
import {Task, TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

export type FilterValues = "all" | "active" | "completed"

function App() {
    const todolistTitle = "What to learn"

   const result = useState<Task[]>(
        [
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "CSS", isDone: true},
            {id: 3, title: "JS", isDone: false},
        ]
    )

const tasks = result[0]
    const setTasks = result[1]

    const deleteTask = (taskId: Task["id"]) => {
        const nextState = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }

    const [filter, setFilter] = useState<FilterValues>("all")
    const changeTodolistFilter = (filter: FilterValues) => {
        setFilter(filter)
    }
    let filteredTasks = tasks
    if (filter === "active") {
        filteredTasks = tasks.filter(t => t.isDone === false)
    }
        if (filter === "completed") {
            filteredTasks = tasks.filter(t => t.isDone === true)
        }


    return (
        <div className="app">
            <TodolistItem
                title={todolistTitle}
                tasks={filteredTasks}
                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}
            />
        </div>
    )
}

export default App
