import { useState } from "react"
// import TaskForm from "./TaskForm";
// import Task from "./Task"
import "./TaskList.css"

function TaskList() {
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState()

	const handleInput = (event) => {
		const target = event.target
		const input = target.value

		setTask(input)
	}

	const handleSubmitTask = (event) => {
		event.preventDefault()

		if (task) {
			setTasks([...tasks, task])
			setTask("")
		}
	}

	return (
		<>
			<div className="MainTask">
				<div className="TaskList">
					<form onSubmit={handleSubmitTask}>
						<input
							type="text"
							placeholder="Escribe una nueva tarea"
							value={task}
							onChange={handleInput}
						></input>
						<button type="submit">Añadir Tarea</button>
					</form>
				</div>

				<div className="TaskContainer">
					<ul>
						{tasks.map((task, index) => (
							<li key={index}>{task}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
export default TaskList
