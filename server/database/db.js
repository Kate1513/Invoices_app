import { Sequelize } from "sequelize"

//Database conexion parameters
const db = new Sequelize('invoice_app', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

export { db } 