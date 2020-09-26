const connection = require('./connection');

const getInfo = async (e) => connection()
  .then((db) => db
    .getTable('users')
    .select(['name', 'email', 'password', 'role'])
    .execute())
  .then((results) => results.fetchAll())
  .then((data) => data.filter(([name, email, password, role]) => (e === email
    ? { name, email, password, role } : false)));

const verifyIfExists = async (email) => connection()
  .then((db) => db
    .getTable('users')
    .select(['email'])
    .execute())
  .then((results) => results.fetchAll())
  .then((authors) => authors.some(([dbEmail]) => dbEmail === email));

const verfiyPassword = async (password) => connection()
  .then((db) => db
    .getTable('users')
    .select(['password'])
    .execute())
  .then((results) => results.fetchAll())
  .then((dbInfo) => dbInfo.filter(([e]) => e === password));

const registerUser = async ({ name, email, password, role }) => connection()
  .then((db) => db
    .getTable('users')
    .insert(['name', 'email', 'password', 'role'])
    .values([name, email, password, role])
    .execute());

const updateUser = async (email, name) => connection()
  .then((db) => db
    .getTable('users')
    .update()
    .set('name', name)
    .where('email = :email')
    .bind('email', email)
    .execute());

module.exports = {
  verifyIfExists,
  registerUser,
  verfiyPassword,
  getInfo,
  updateUser,
};
