// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './src/database/db.sqlite',
	database: 'omni',
      user:     'admin',
      password: 'amor123M'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'omni',
      user:     'root',
      password: 'amor123M'
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
    client: 'mysql',
    connection: {
      database: 'omni',
      user:     'root',
      password: 'amor123M'
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
