import {Button} from "./Button.tsx";
import {FilterValues} from "./App.tsx";

type Props = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: TaskType["id"]) => void
    changeTodolistFilter: (filter: FilterValues) => void

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
                                 changeTodolistFilter
                             }: Props) => {

    // const title = props.title
    // const tasks = props.tasks
    // const {title, tasks} = props

    const tasksList = tasks.length === 0
        ? <span>Таск лист пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    return (
                        <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <Button value= "x"
                            onClick={() => deleteTask(t.id)}
                            />
                        </li>

                    )
                })
            }
        </ul>


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button value="+"/>
            </div>
            {tasksList}
            <div>
                <Button value="All" onClick={() => changeTodolistFilter("all")}/>
                <Button value="Active" onClick={() => changeTodolistFilter("active")}/>
                <Button value="Completed" onClick={() => changeTodolistFilter("completed")}/>

            </div>
        </div>
    )
}


