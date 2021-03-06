import express from 'express'
import cors from 'cors'
import * as core from 'express-serve-static-core';
import { Api as routers } from './http/routers'
import dbConnection from '../database';

class Server {
  app: core.Express
  config: any;
  
  constructor({ config, containerMiddleware }: any) {
    this.config = config
    this.app = express()

    // Load up the container
    this.app.use(containerMiddleware)
  }

  /**
   * Start()
   * Start the server services
   *  
   * @returns Promise
   */
  async start() {

    // Check for db connection
    try {
      await dbConnection.authenticate()
    } catch (e) {
      console.error("Unable to connect to database", e);
    }

    // Enable app configuration
    this.configuration();

    // start the server
    return new Promise((resolve) => {
      console.log(this.config.appPort)
      const http =  this.app.listen(this.config.appPort, () => {
        const { port }: any = http.address()
        console.log(`API Running at port: ${port}`);
      });
    });
  }

  /**
   * Server configurations
   */
  async configuration() {
    this.app.disable('x-powered-by');
    // Enable CORS in all requests
    this.app.use(cors());

    // Load availabel router of the application
    this.app.use(routers())
  }

}

export default Server