import Knex from 'knex';

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
            connectionString: `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWD}@todos:5432`,
          },
          migrations: {
            tableName: 'migrations'
          }
        });
      default:
        throw new Error("Application environment not set, cannot create database instance!");
    }
  })();