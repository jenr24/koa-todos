// Update with your config settings.

const PG_CONNECTION_STRING = (() => {
  if (process.env.PG_CONNECTION_STRING) {
      return process.env.PG_CONNECTION_STRING
  } else {
      return ""
  }
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './koa-todos-dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      connectionString: PG_CONNECTION_STRING()
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
      connectionString: PG_CONNECTION_STRING()
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
