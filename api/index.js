import express from 'express'
import cors from 'cors'

import logic from '../api/logic/logic.js'

const api = express()

api.use(cors())


const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

api.get('/', (req, res) => {
    res.send('Hello World!')
})


api.get("/tasks", (req, res) => {

    try {
        logic.getAllTasks((error, tasks) => {
            if (error) {
                res.status(500).json({ error: error.message })
                return
            }
            res.json(tasks)
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


api.post("/tasks", jsonBodyParser, (req, res) => {

    const { text } = req.body

    try {
        logic.createTask(text, (error) => {
            if (error) {
                res.status(500).json({ error: error })

                return
            }

            res.status(201).send({ message: 'task inserted, seguimos Laiiifff!!!' })
        })

    } catch (error) {
        console.log(error)
    }
})

api.delete("/tasks/:taskId", (req, res) => {

    const { taskId } = req.params

    try {
        logic.deleteTask(taskId, (error) => {
            if (error) {
                res.status(500).json({ error: error })
                return
            }

            res.status(204).send()
        })

    } catch (error) {

        res.status(500).json({ error: error })
    }
})

api.listen(3001, () => console.log('Tamosss Laifff!!! http://localhost:3001'))





