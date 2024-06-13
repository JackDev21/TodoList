
import data from "../data/data.js"

const logic = {}

logic.getAllTasks = (callback) => {

    data.findTasks(() => true, (error, tasks) => {

        if (error) {
            callback(error)
            return
        }

        callback(null, tasks)
    })
}

logic.createTask = (text, callback) => {
    const task = {
        text: text,
    }

    data.insertTask(task, error => {

        if (error) {
            callback(error)
            return
        }

        callback(null)
    })
}

logic.deleteTask = (taskId, callback) => {

    data.findOneTask(task => task.id === taskId, (error, task) => {
        if (error) {
            callback(error)
            return
        }

        if (!task) {
            callback(console.error(error.message))
        }

        data.deleteTask(task => task.id === taskId, (error) => {
            if (error) {
                callback(error)
                return
            }

            callback(null)
        })
    })
}

export default logic