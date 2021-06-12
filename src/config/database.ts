import { Dialect } from "sequelize/types"

type DatabaseConfigType = {
  username: string,
  password: string,
  host: string,
  port: number,
  dialect: Dialect,
  database: string
}

const databaseConfig: DatabaseConfigType = {
  username: "root",
  password: "",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  database: "teemsly"
}

export default databaseConfig