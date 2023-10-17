import Knex from 'knex';
export default (() => {
    switch (process.env.APP_ENV) {
      case "DEV":
        return Knex({
          client: 'sqlite3',
          connection: {
            filename: "./koa-todos-dev.sqlite"
          }
        });
      case "STAGE":
      case "PROD":
        return Knex({
          client: 'pg',
          connection: {
            host: '127.0.0.1',
            port: '5432',
            user: undefined,
            password: undefined,
            database: undefined
          }
        });
      default:
        throw new Error("Application environment not set, cannot create database instance!");
    }
  })();