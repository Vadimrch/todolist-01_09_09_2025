import "./App.css"
import { TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValues = "all" | "active" | "completed"

function App() {
    const todolistTitle = "What to learn"

   const result = useState<TaskType[]>(
        [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false},
        ]
    )

const tasks = result[0]
    const setTasks = result[1]

    const deleteTask = (taskId: TaskType["id"]) => {
        const nextState = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }
const createTask = (title: TaskType["title"]) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false

        }
        const nextState: TaskType[] = [...tasks, newTask]
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
