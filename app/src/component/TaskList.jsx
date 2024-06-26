import { useState, useEffect } from "react"

import logic from "../logic"

import Title from "./Title"
import ConfirmDelete from "./ConfirmDelete"

import "./Title.css"
import "./TaskList.css"

function TaskList() {
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState("")

	const [showConfirmDelete, setShowConfirmDelete] = useState(false)

	const [taskIdToDelete, setTaskIdToDelete] = useState(null)
	const [indexToDelete, setIndexToDelete] = useState(null)

	const handleInput = (event) => {
		const input = event.target.value
		setTask(input)
	}

	const handleSubmitTask = (event) => {
		event.preventDefault()

		try {
			logic.createTask(task, (error) => {
				if (error) {
					alert(error.message)

					return
				}
				if (task.trim()) {
					setTasks([...tasks, { text: task, completed: false }])
				}
				loadTasks()
			})
		} catch (error) {
			alert(error.message)
			return
		}
		setTask("")
	}

	useEffect(() => {
		loadTasks()
	}, [])

	const loadTasks = () => {
		try {
			logic.getAllTasks((error, tasks) => {
				if (error) {
					console.error(error)
					alert(error.message)
					return
				}

				setTasks(tasks)
			})
		} catch (error) {
			if (error) {
				console.error(error)
				alert(error.message)
			}
		}
	}

	const confirmDelete = () => {
		try {
			logic.deleteTask(taskIdToDelete, (error) => {
				if (error) {
					console.error(error)
					alert(error.message)
				}
				const taskUpdated = [...tasks]
				taskUpdated.splice(indexToDelete, 1)
				setTasks(taskUpdated)
			})
		} catch (error) {
			console.error(error)
			alert(error.message)
		}
		setShowConfirmDelete(false)
	}

	const cancelDelete = () => {
		setShowConfirmDelete(false)
	}

	const handleTaskCompleted = (indexToComplete) => {
		const taskUpdated = [...tasks]
		taskUpdated[indexToComplete].completed = !taskUpdated[indexToComplete].completed
		setTasks(taskUpdated)
	}

	const handleDeletePost = (index, taskId) => {
		setShowConfirmDelete(true)
		setTaskIdToDelete(taskId)
		setIndexToDelete(index)
	}

	return (
		<>
			<Title />
			<div className="MainTask">
				<div className="TaskList">
					<form onSubmit={handleSubmitTask}>
						<input type="text" placeholder="Escribe una nueva tarea" value={task} onChange={handleInput} required />
						<button type="submit">Añadir Tarea</button>
					</form>
				</div>

				<div className="TaskContainer">
					<ul>
						{tasks.map((task, index) => (
							<li key={index} className={task.completed ? "Completed" : ""}>
								<p onClick={() => handleTaskCompleted(index)} className={task.completed ? "Completed" : ""}>
									{task.text}
								</p>
								<span onClick={() => handleDeletePost(index, task.id)}>❌</span>
							</li>
						))}
					</ul>
					{showConfirmDelete && <ConfirmDelete onConfirmDelete={confirmDelete} onCancelDelete={cancelDelete} />}
				</div>
			</div>
		</>
	)
}

export default TaskList
