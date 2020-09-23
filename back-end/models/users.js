const connection = require('./connection');

const verifyIfExists = async ({ email }) => connection()
  .then((db) => db
    .getTable('users')
    .select(['email'])
    .execute())
  .then((results) => results.fetchAll())
  .then((authors) => authors.some(([dbEmail]) => dbEmail === email));

const registerUser = async ({ name, email, password, role }) => connection()
  .then((db) => db
    .getTable('users')
    .insert(['name', 'email', 'password', 'role'])
    .values([name, email, password, role])
    .execute());

module.exports = {
  verifyIfExists,
  registerUser,
};
// return session.getSchema('mySchema').getTable('myTable')
//                     .insert(['name', 'age'])
//                     .values(['foo', 42])
//                     .execute();
