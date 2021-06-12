import appConfig from './app'
import databaseConfig from './database';

const config = {
  ...appConfig,
  ...databaseConfig
}

export default config;