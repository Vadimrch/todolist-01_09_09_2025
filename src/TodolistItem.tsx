import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: Task["id"]) => void

}
export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = ({
                                 title,
                                 tasks,
                                 deleteTask
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
                <Button value="All"/>
                <Button value="Active"/>
                <Button value="Completed"/>

            </div>
        </div>
    )
}


