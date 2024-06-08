import fs from 'fs'

const logic = {}

const findTasks = (condition, callback) => {
    fs.readFile('../api/data/tasks.json', 'utf-8', (error, tasksJson) => {
        if (error) {
            console.log(error)

            //alert('Error al leer el archivo')

            return
        }

        if (!tasksJson) {
            tasksJson = '[]'
        }

        const tasks = JSON.parse(tasksJson)

        const taskFind = tasks.filter(condition)

        callback(null, taskFind)
    })


}

const createTask = (id, text, callback) => {
    const task = {
        id: id,
        text: text
    }

    const insertTask = (task, callback) => {
        fs.readFile('../api/data/tasks.json', 'utf-8', (error, tasksJson) => {
            if (error) {
                console.log(error)

                return
            }

            if (!tasksJson) {
                tasksJson = '[]'
            }
            const tasks = JSON.parse(tasksJson)

            tasks.push(task)

            const jsonTasks = JSON.stringify(tasks)

            fs.writeFile('../api/data/tasks.json', jsonTasks, (error) => {
                if (error) {
                    console.log(error)

                    return
                }

                callback(null)
            })
        })



    }
    insertTask(task, callback);
}


//export default findTasks
export default createTask
