// Update with your config settings.

module.exports = {
  //  [1a]
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/game.db3", //  [2b]
    },
    useNullAsDefault: true, //  [2a]
  },

  //  [1b]
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  //  [1c]
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

// [NOTES]
//  [1]
//  auto generated by the people at knex
//  [a] database configuration for development environment
//  [b] database configuration for staging/testing environment
//  remember deploying to Heroku? ⤵️
//  [c] database configuration for production environment

//  [2]
//  [a] add this line --> we'll come back to it
//  [b] add the correct file path
//      --> some editors will hide .db files
//      --> Luis usually uses .db3
//      --> there are a few options to use (look into it!)
