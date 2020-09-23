require('dotenv/config');
const mysqlx = require('@mysql/xdevapi');

const connection = () => mysqlx.getSession({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  schema: 'Trybeer',
})
  .then((session) => session.getSchema('Trybeer'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
