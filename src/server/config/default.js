module.exports = {
  express: {
    port: 3000,
  },
  database: {
    client: "mysql",
    connection:{
      database: 'expess_knex',
      port: 3306,
      host: '127.0.0.1',
      user: 'root',
      password: '',
      charset  : 'utf8',
      debug: false
    }
  },
  winston: {
    log: {
      level:'info'
    }
  }
};
