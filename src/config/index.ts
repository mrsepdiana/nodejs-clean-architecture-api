import appConfig from './app'
import databaseConfig from './database';

const config = {
  ...appConfig,
  dbConfig: {
    ...databaseConfig
  }
}

export default config;