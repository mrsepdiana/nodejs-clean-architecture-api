import {Sequelize} from 'sequelize'
import appConfig from '../config'
import config from '../config/database'

if(config && !config) {
  throw new Error("Database configuration not found.");
}

const { database, username, password, host, port, dialect } = config

const dbConnection = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  logging: appConfig.debug ? console.log : false,
}) 

export default dbConnection;