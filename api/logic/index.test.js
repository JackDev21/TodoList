// import findTasks from './logic.js'

// try {
//     findTasks(() => true, (error, tasks) => {
//         if (error) {
//             console.log(error)

//         }

//         console.log(tasks)

//     })
// } catch (error) {

//     console.log(error)
// }

import createTask from './logic.js'

try {
    createTask(11, 'Prueba', (error) => {
        if (error) {
            console.log(error)

            return
        }
        console.log('task inserted, seguimos Laiiifff!!!')

    })

} catch (error) {
    console.log(error)
}