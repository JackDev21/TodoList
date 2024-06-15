const logic = {}

logic.createTask = (text, callback) => {

  if (typeof text !== "string" || !text.length || text.length > 50) {
    alert("No puedes crear una tarea vacia o con mas de 20 caracteres")
    return
  }


  const xhr = new XMLHttpRequest

  xhr.onload = () => {

    if (xhr.status === 201) {

      callback(null)
      console.log("task inserted, seguimos Laiiifff!!!")
      return
    }

    const { error, message } = JSON.parse(xhr.response)

    callback({ error, message })
  }


  const body = {
    text: text
  }
  const json = JSON.stringify(body)


  xhr.open("POST", "http://localhost:3001/tasks")
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(json)
}


logic.getAllTasks = (callback) => {

  const xhr = new XMLHttpRequest

  xhr.onload = () => {
    if (xhr.status === 200) {
      const tasks = JSON.parse(xhr.response)

      callback(null, tasks)
      console.log("Tasks loaded")
      return
    }

    const { error, message } = JSON.parse(xhr.response)

    callback({ error, message })
  }

  xhr.open("GET", "http://localhost:3001/tasks")
  xhr.send()
}

logic.deleteTask = (taskId, callback) => {

  const xhr = new XMLHttpRequest

  xhr.onload = () => {
    if (xhr.status === (204)) {
      callback(null)
      return
    }

    const { error, message } = JSON.parse(xhr.response)

    callback({ error, message })
  }

  xhr.open("DELETE", `http://localhost:3001/tasks/${taskId}`)
  xhr.send()
}

export default logic