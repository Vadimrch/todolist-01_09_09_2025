import {Button} from "./Button.tsx";
import {FilterValues} from "./App.tsx";
import {useState, KeyboardEvent} from "react";


type Props = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: TaskType["id"]) => void
    changeTodolistFilter: (filter: FilterValues) => void
    createTask: (title: TaskType["title"]) => void

}
export type TaskType = {
    id: string
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

   const [taskTitle, setTaskTitle] = useState("")

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

            createTask(taskTitle)
        setTaskTitle("")
        }

const onKeyDownCreateTaskHandler = ((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && taskTitle.length >= 3 && taskTitle.length < 10) {
        createTaskHandler()
    }
})


    return (
        <div>
            <h3>{title}</h3>
            <div>

                <input
                    autoFocus={true}
                value = {taskTitle}
                onChange={(e) => setTaskTitle(e.currentTarget.value)}
                onKeyDown={onKeyDownCreateTaskHandler}
                />
                <Button
                    disabled = {taskTitle.length < 3 || taskTitle.length > 10}
                    title="+"
                    onClick={createTaskHandler}/>
                {taskTitle.length < 3 && <div>минимум 3 символа</div>}
                {taskTitle.length >= 3 && taskTitle.length <10 && <div>максимум 10 символов</div>}
                {taskTitle.length >= 10 && <div style={{color: "red"}}>превышен лимит</div>}
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


