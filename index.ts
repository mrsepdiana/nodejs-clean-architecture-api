import { ServiceProvider } from './src/app'

const server: any = ServiceProvider.resolve("server");

server.start().catch((error: any) => {
  console.error(error.stack);
  process.exit();
});