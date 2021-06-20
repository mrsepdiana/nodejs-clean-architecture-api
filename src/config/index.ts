import appConfig from './app'
import databaseConfig from './database';
import emailConfig from './email';

const config = {
  ...appConfig,
  dbConfig: {
    ...databaseConfig
  },
  emailConfig
}

export default config;