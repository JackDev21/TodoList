import fs from "fs"


const data = {}

data.findTasks = (condition, callback) => {

  fs.readFile('./data/tasks.json', 'utf-8', (error, tasksJson) => {
    if (error) {

      console.log(error)
      callback(error.message)
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
  fs.readFile('./data/tasks.json', 'utf-8', (error, tasksJson) => {
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

    fs.writeFile('./data/tasks.json', jsonTasks, (error) => {
      if (error) {
        console.log(error)

        return
      }

      callback(null)
    })
  })
}

data.findOneTask = (condition, callback) => {
  fs.readFile("./data/tasks.json", "utf-8", (error, tasksJson) => {
    if (error) {
      callback(new Error(error))

      return
    }

    if (!tasksJson) {
      tasksJson = "[]"
    }

    const tasks = JSON.parse(tasksJson)
    const taskFind = tasks.find(condition)

    callback(null, taskFind)
  })
}


data.deleteTask = (condition, callback) => {

  fs.readFile("./data/tasks.json", "utf8", (error, tasksJson) => {
    if (error) {
      callback(new Error(error.message))
      return
    }

    if (!tasksJson) {
      tasksJson = "[]"
    }
    const tasks = JSON.parse(tasksJson)

    const index = tasks.findIndex(condition)

    if (index > -1) {
      const deletedTask = tasks.splice(index, 1)[0]
      const newJson = JSON.stringify(tasks)

      fs.writeFile("./data/tasks.json", newJson, (error) => {
        if (error) {
          callback(new Error(error.message))
          return
        }

        callback(null, deletedTask)
      })
    } else {
      callback(null)
    }
  })
}

export default data