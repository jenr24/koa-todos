import Knex from 'knex';

const PG_CONNECTION_STRING = (() => {
    if (process.env.PG_CONNECTION_STRING) {
        return process.env.PG_CONNECTION_STRING
    } else {
        return ""
    }
});

export default (() => {
    switch (process.env.APP_ENV) {
      case "DEV":
        return Knex({
          client: 'sqlite3',
          connection: {
            filename: "./koa-todos-dev.sqlite"
          },
          migrations: {
            tableName: 'migrations'
          }
        });
      case "STAGE":
      case "PROD":
        return Knex({
          client: 'pg',
          connection: {
            connectionString: PG_CONNECTION_STRING()
          },
          migrations: {
            tableName: 'migrations'
          }
        });
      default:
        throw new Error("Application environment not set, cannot create database instance!");
    }
  })();