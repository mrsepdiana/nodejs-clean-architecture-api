import {Sequelize} from 'sequelize'
import config from '../../config'

if(config && !config.dbConfig) {
  throw new Error("Database configuration not found.");
}

const { database, username, password, host, port, dialect } = config.dbConfig

const dbConnection = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  logging: config.debug ? console.log : false,
}) 

export default dbConnection;