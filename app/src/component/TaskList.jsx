import { useState } from "react"

import logic from "../logic"

import Title from "./Title"

import "./Title.css"
import "./TaskList.css"

function TaskList() {
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState("")

	const handleInput = (event) => {
		const input = event.target.value
		setTask(input)
	}

	const handleSubmitTask = (event) => {
		event.preventDefault()

		try {
			logic.createTask(task, (error) => {
				if (error) {
					alert(error.meessage)

					return
				}
				if (task.trim()) {
					setTasks([...tasks, { text: task, completed: false }])
				}
			})
		} catch (error) {
			alert(error.message)
			return
		}
		setTask("")
	}

	const handleDeleteTask = (indexToDelete) => {
		const taskUpdated = [...tasks]
		taskUpdated.splice(indexToDelete, 1)
		setTasks(taskUpdated)
	}

	const handleTaskCompleted = (indexToComplete) => {
		const taskUpdated = [...tasks]
		taskUpdated[indexToComplete].completed = !taskUpdated[indexToComplete].completed
		setTasks(taskUpdated)
	}

	return (
		<>
			<Title />
			<div className="MainTask">
				<div className="TaskList">
					<form onSubmit={handleSubmitTask}>
						<input type="text" placeholder="Escribe una nueva tarea" value={task} onChange={handleInput} />
						<button type="submit">Añadir Tarea</button>
					</form>
				</div>

				<div className="TaskContainer">
					<ul>
						{tasks.map((task, index) => (
							<li key={index}>
								<p onClick={() => handleTaskCompleted(index)} className={task.completed ? "Completed" : ""}>
									{task.text}
								</p>
								<span onClick={() => handleDeleteTask(index)}>❌</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default TaskList
