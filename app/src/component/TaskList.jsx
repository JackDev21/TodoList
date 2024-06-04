import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task"
import "./TaskList.css"


function TaskList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storeTask = localStorage.getItem(tasks)

        if (storeTask) {
            const parsedTasks = JSON.parse(storeTask)
            setTasks(parsedTasks)
        }
    }, [])

    const addTask = ((task) => {
        if (task.description.trim()) {
            task.description = task.description.trim()

            const taskUpdate = [task, ...tasks]

            setTasks(taskUpdate)

            localStorage.setItem("tasks", JSON.stringify(taskUpdate))
        }
    })

    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <ul className='TaskList' >
                {tasks.map((task) => (
                    <li key={task.id}> {/* Añadir una clave única para cada tarea */}
                        {task.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TaskList