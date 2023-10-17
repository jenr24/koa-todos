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
            connectionString: `postgres://${process.env.TF_VAR_PG_USERNAME}:${process.env.TF_VAR_PG_PASSWD}@terraform-20231017184024200600000001.cko0t6ezl5s0.us-east-2.rds.amazonaws.com:5432/todos`,
          },
          migrations: {
            tableName: 'migrations'
          }
        });
      default:
        throw new Error("Application environment not set, cannot create database instance!");
    }
  })();