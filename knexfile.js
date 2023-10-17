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
      connectionString: `postgres://${process.env.TF_VAR_PG_USERNAME}:${process.env.TF_VAR_PG_PASSWD}@todos:5432`,
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
      connectionString: `postgres://${process.env.TF_VAR_PG_USERNAME}:${process.env.TF_VAR_PG_PASSWD}@terraform-20231017184024200600000001.cko0t6ezl5s0.us-east-2.rds.amazonaws.com:5432/todos`,
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
