function ConfirmDelete({ onConfirmDelete, onCancelDelete }) {
	return (
		<>
			<div>
				<h6>¿Estás seguro de eliminar esta tarea?</h6>
				<button onClick={onConfirmDelete}>Aceptar</button>
				<button onClick={onCancelDelete}>Cancelar</button>
			</div>
		</>
	)
}

export default ConfirmDelete
