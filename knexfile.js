// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './koa-todos-dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'terraform-20231017184024200600000001.cko0t6ezl5s0.us-east-2.rds.amazonaws.com',
      port: 5432,
      user: process.env.TF_VAR_PG_USERNAME,
      password: process.env.TF_VAR_PG_PASSWD,
      database: 'todos'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_HOST,
      port: 5432,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWD,
      database: 'todos'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
