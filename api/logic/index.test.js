import logic from "./logic.js"

// try {
//   logic.getAllTasks(() => true, (error, tasks) => {
//     if (error) {
//       console.log(error)

//     }

//     console.log(tasks)

//   })
// } catch (error) {

//   console.log(error)
// }



// try {
//   logic.createTask('Prueba', (error) => {
//     if (error) {
//       console.log(error)

//       return
//     }
//     console.log('task inserted, seguimos Laiiifff!!!')

//   })

// } catch (error) {
//   console.log(error)
// }

try {
  logic.deleteTask("8322284392957846-1718037846180", (error) => {
    if (error) {
      console.log("error")
      return
    }

    console.log("task deleted")
  })

} catch (error) {
  console.log(error)
}