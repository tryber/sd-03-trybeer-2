require('dotenv/config');
const mysqlx = require('@mysql/xdevapi');
let schema;
const connection = () =>
  schema
    ? Promise.resolve(schema)
    : mysqlx
        .getSession({
          user: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          host: process.env.HOSTNAME,
          port: 33060,
          schema: 'Trybeer',
        })
        .then((session) => {
          schema = session.getSchema('Trybeer');
          return schema;
        })
        .catch((err) => {
          console.error(err);
          process.exit(1);
        });
module.exports = connection;