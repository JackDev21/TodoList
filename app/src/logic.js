const logic = {}

logic.createTask = (text, callback) => {
  const xhr = new XMLHttpRequest()

  xhr.onload = () => {

    if (xhr.status === 201) {

      callback(null)
      console.log("task inserted, seguimos Laiiifff!!!")
      return
    }

    const { error, message } = JSON.parse(xhr.responseText)

    callback({ error, message })
  }

  xhr.open("POST", "http://localhost:3000/tasks")

  const body = { text }

  const json = JSON.stringify(body)

  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(json)
}

export default logic