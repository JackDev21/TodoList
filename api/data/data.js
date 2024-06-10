import fs from "fs"

const data = {}

data.findTasks = (condition, callback) => {

  fs.readFile('../api/data/tasks.json', 'utf-8', (error, tasksJson) => {
    if (error) {
      console.log(error)
      callback(error)
      return
    }

    if (!tasksJson) {
      tasksJson = '[]'
    }

    const tasks = JSON.parse(tasksJson)

    const filtered = tasks.filter(condition)

    callback(null, filtered)
  })
}


data.insertTask = (task, callback) => {
  fs.readFile('../api/data/tasks.json', 'utf-8', (error, tasksJson) => {
    if (error) {
      console.log(error)

      return
    }

    if (!tasksJson) {
      tasksJson = '[]'
    }
    const tasks = JSON.parse(tasksJson)

    task.id = `${Math.random().toString().slice(2)}-${Date.now()}`

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

export default data