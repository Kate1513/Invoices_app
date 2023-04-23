import express from 'express'
import cors from 'cors'
import {db} from './database/db.js'
import { router } from './routes/routes.js'

//API
const app = express()

//Cors
app.use(cors())

app.use(express.json())

app.use('/', router)

try {
    await db.authenticate()
    console.log('DB Conection')
} catch (error) {
    console.log(`Conection error: ${error}`)
}

app.get('/', (req, res) =>{
    res.send('Hello everyone')
})

const port = 7000
app.listen(port, ()=> {
    console.log(`servidor levantado http://localhost:${port}`)
})