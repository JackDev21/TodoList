import express from 'express'

import cors from 'cors'

const api = express()

api.use(cors())

const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

api.get('/', (req, res) => {
    res.send('Hello World!')
})

api.listen(3000, () => console.log('Tamosss Laifff!!! http://localhost:3000'))





