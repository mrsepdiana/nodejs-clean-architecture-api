import { createContainer, Lifetime, asClass, asValue } from 'awilix'
import  {scopePerRequest } from 'awilix-express' 
import { cwd } from 'process'

// Load configuration
import config from '../config' 
// Load the server interface
import Server from './Server'

// Start creating the container for service provider
const ServiceProvider = createContainer()

// Manualy register IoC
ServiceProvider.register({
  config: asValue(config),
  server: asClass(Server).singleton()
})

ServiceProvider.loadModules([
  './utilities/**/*.ts',
  '../domain/**/*.ts'
], {
    formatName: 'camelCase', 
    resolverOptions: {
      lifetime: Lifetime.SINGLETON
    },
    cwd: __dirname 
  })

// Middleware
ServiceProvider.register({
  containerMiddleware: asValue(scopePerRequest(ServiceProvider)),
});

export default ServiceProvider;