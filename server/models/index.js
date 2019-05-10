/* eslint-disable no-console */
const db = require('../database');

module.exports = {
  signupUsers: {
    getAll: (id) => new Promise((resolve, reject) => {
      const queryString = `select * from usersignups inner join users on usersignups.userid = users.id
      where signupid =${id}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    create: (signupUser) => new Promise((resolve, reject) => {
      console.log(signupUser)
      const queryString = `insert into usersignups (userid, signupid, comment) 
      values(${signupUser.userid}, ${signupUser.signupid}, '${signupUser.comment}')`
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        console.log(results);
        resolve(results);
      });
    }),
  },
  users: {
    getOne: (id) => new Promise((resolve, reject) => {
      const queryString = `select * from users where id =${id}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    create: (user) => new Promise((resolve, reject) => {
      const queryString = `insert into users (username, password, firstName, lastName, email, phone, type) 
      values('${user.username}', '${user.password}', '${user.firstName}', '${user.lastName}', '${user.email}', '${user.phone}', 2)
      returning id`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        console.log(results);
        resolve(results);
      });
    }),
    update: (user) => new Promise((resolve, reject) => {
      const queryString = `update users set 
                            username='${user.username}',
                            firstname='${user.firstName}',
                            lastname='${user.lastName}',
                            email='${user.email}',
                            phone='${user.phone}',
                            type=2
                            where id = ${user.id}`;

      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    delete: (userId) => new Promise((resolve, reject) => {
      const queryString = `delete from users where id = ${userId}`;
      //console.log(queryString)
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    login: (username, password) => new Promise((resolve, reject) => {
      const queryString = `select id from users where username = '${username}' and password ='${password}'`;;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows.length > 0) {
          resolve(true)
        } else {
          resolve(false)
        }
      });
    }),
  },
  signups: {
    getAll: () => new Promise((resolve, reject) => {
      const queryString = `select *, (select count(signupid) from usersignups where signupid =signups.id group by signupid) from signups;`

      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    getOne: (id) => new Promise((resolve, reject) => {
      const queryString = `select * from signups where id =${id}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    create: (signup) => new Promise((resolve, reject) => {
      console.log(signup);
      const queryString = `insert into signups (date, time, numberOfSignups, title, description, location, active) 
      values('${signup.date}', '${signup.time}', ${signup.numberofsignups}, '${signup.title}', '${signup.description}', '${signup.location}', ${signup.active})`;;
      console.log(queryString)
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    update: (signup) => new Promise((resolve, reject) => {
      const queryString = `update signups set 
                            date='${signup.date}',
                            time='${signup.time}',
                            numberOfSignups=${signup.numberofsignups},
                            title='${signup.title}',
                            description='${signup.description}',
                            location='${signup.location}',
                            active=${signup.active}
                            where id = ${signup.id}`;
      console.log(queryString)
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    delete: (signupId) => new Promise((resolve, reject) => {
      const queryString = `delete from signups where id = ${signupId}`;
      //console.log(queryString)
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
}