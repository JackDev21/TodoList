import "./Task.css"

function Task(id, description, completed, taskComplete, taskDelete){
    return(
        <div className={ completed ? "task-container completed" : "task-container" }>

            <div className="task-text" onClick={() => taskComplete(id)}>{description}</div>

            <div className="task-container delete" onClick={() => taskDelete(id)}></div>
        </div>
    )
}

export default Task