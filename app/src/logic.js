const logic = {}

logic.createTask = (text, callback) => {

  if (typeof text !== "string" || !text.length || text.length > 50) {
    alert("No puedes crear una tarea vacia o con mas de 20 caracteres")
    return
  }

  fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })

    .then(res => {
      if (res.status === 201) {
        callback(null)
        return
      }

      return res.json()
        .then(body => {
          const { error, message } = body

          callback(new Error(error || message))
        })
        .catch(error => callback(new Error(error.message)))
    })
    .catch(error => callback(new Error(error.message)))

  // const xhr = new XMLHttpRequest

  // xhr.onload = () => {

  //   if (xhr.status === 201) {

  //     callback(null)
  //     console.log("task inserted, seguimos Laiiifff!!!")
  //     return
  //   }

  //   const { error, message } = JSON.parse(xhr.response)

  //   callback({ error, message })
  // }

  // const body = {
  //   text: text
  // }
  // const json = JSON.stringify(body)


  // xhr.open("POST", "http://localhost:3001/tasks")
  // xhr.setRequestHeader("Content-Type", "application/json")
  // xhr.send(json)
}


logic.getAllTasks = (callback) => {
  fetch("http://localhost:3001/tasks", {
    method: "GET",
  })

    .then(res => {
      if (res.status === 200) {
        return res.json()
          .then(tasks => callback(null, tasks))
          .catch(error => callback(new Error(error.message), null))
      }

      return res.json()
        .then(body => {

          const { error, message } = body
          callback(new Error(error || message))
        })
        .catch(error => callback(new Error(error.message)))
    })
    .catch(error => callback(new Error(error.message)))


  // const xhr = new XMLHttpRequest

  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     const tasks = JSON.parse(xhr.response)

  //     callback(null, tasks)
  //     console.log("Tasks loaded")
  //     return
  //   }

  //   const { error, message } = JSON.parse(xhr.response)

  //   callback({ error, message })
  // }

  // xhr.open("GET", "http://localhost:3001/tasks")
  // xhr.setRequestHeader("Content-Type", "application/json") 
  // xhr.send()
}

logic.deleteTask = (taskId, callback) => {

  fetch(`http://localhost:3001/tasks/${taskId}`, {
    method: "DELETE",
  })

    .then(res => {
      if (res.status === 204) {
        callback(null)
        return
      }

      return res.json()
        .then(body => {
          const { error, message } = body
          callback(new Error(error || message))
        })
        .catch(error => callback(new Error(error)))
    })
    .catch(error => callback(new Error(error.message)))

  // const xhr = new XMLHttpRequest

  // xhr.onload = () => {
  //   if (xhr.status === (204)) {
  //     callback(null)
  //     return
  //   }

  //   const { error, message } = JSON.parse(xhr.response)

  //   callback({ error, message })
  // }

  // xhr.open("DELETE", `http://localhost:3001/tasks/${taskId}`)
  // xhr.send()
}

export default logic