import { useState } from "react";
import "./TaskForm.css";

function TaskForm(props) {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const checkForm = (event) => {
		event.preventDefault();

		const newTarea = {
			id: Date.now(),
			description: inputValue,
			completed: false,
		};

		setInputValue("");

		props.onSubmit(newTarea);
	};

	return (
		<div className='TaskForm'>
			<form onSubmit={checkForm}>
				<input
					id='newtask'
					type='text'
					placeholder='Escribe una nueva tarea'
					value={inputValue}
					onChange={handleInputChange}
				></input>
				<button type='submit'>Añadir Tarea</button>
			</form>
		</div>
	);
}

export default TaskForm;
