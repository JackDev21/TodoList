import express from 'express'
import cors from 'cors'

import logic from './logic/logic.js'

const api = express()

api.use(cors())

const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

api.get('/', (req, res) => {
    res.send('Hello World!')
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

api.listen(3000, () => console.log('Tamosss Laifff!!! http://localhost:3000'))





