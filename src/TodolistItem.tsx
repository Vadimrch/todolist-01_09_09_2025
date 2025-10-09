import {Button} from "./Button.tsx";
import {FilterValues} from "./App.tsx";
import {useRef} from "react";

type Props = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: TaskType["id"]) => void
    changeTodolistFilter: (filter: FilterValues) => void
    createTask: (title: TaskType["title"]) => void

}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = ({
                                 title,
                                 tasks,
                                 deleteTask,
                                 createTask,
                                 changeTodolistFilter
                             }: Props) => {

    // const title = props.title
    // const tasks = props.tasks
    // const {title, tasks} = props
    const taskTitleInputRef = useRef<HTMLInputElement>(null)

    const tasksList = tasks.length === 0
        ? <span>Таск лист пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    return (
                        <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <Button title= "x"
                            onClick={() => deleteTask(t.id)}
                            />
                        </li>

                    )
                })
            }
        </ul>

    const createTaskHandler = () =>{
        if(taskTitleInputRef.current){
            createTask(taskTitleInputRef.current.value)
            taskTitleInputRef.current.value = ""
        }

    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input ref={taskTitleInputRef}/>
                <Button title="+" onClick={createTaskHandler}/>
            </div>
            {tasksList}
            <div>
                <Button title="All" onClick={() => changeTodolistFilter("all")}/>
                <Button title="Active" onClick={() => changeTodolistFilter("active")}/>
                <Button title="Completed" onClick={() => changeTodolistFilter("completed")}/>

            </div>
        </div>
    )
}


