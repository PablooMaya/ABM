 import { Sequelize } from "sequelize";

 const db = new Sequelize('datablog', 'root', '2625',{

    host: 'localhost',
    dialect: "mysql"

 })

 export default db