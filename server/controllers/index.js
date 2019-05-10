const models = require('../models');


module.exports = {
  signupUsers: {
    getAll: (req, res) => {
      models.signupUsers.getAll(req.params.signupId).then(results => {
        res.send(results.rows);
      })
    },
    create: (req, res) => {
      //console.log(req.body);
      models.signupUsers.create(req.body).then(results => {
        res.send(results.rows);
      })
    },
  },

  users: {
    getOne: (req, res) => {
      models.users.getOne(req.params.userId).then(results => {
        res.send(results.rows);
      })
    },
    create: (req, res) => {
      //console.log(req.body);
      models.users.create(req.body).then(results => {
        res.send(results.rows);
      })
    },
    update: (req, res) => {
      //console.log(req.body);
      models.users.update(req.body).then(results => {
        res.send(results.rows);
      })
    },
    delete: (req, res) => {
      //console.log(req.body);
      models.users.delete(req.params.userId).then(results => {
        res.send(results);
      })
    },
    login: (req, res) => {
      //console.log(req.body);
      models.users.login(req.body.username, req.body.password).then(results => {
        res.send(results);
      })
    },
  },
  signups: {
    getAll: (req, res) => {
      models.signups.getAll().then(results => {
        res.send(results.rows);
      })
    },
    getOne: (req, res) => {
      models.signups.getOne(req.params.signupId).then(results => {
        res.send(results.rows);
      })
    },
    create: (req, res) => {
      //console.log(req.body);
      models.signups.create(req.body).then(results => {
        res.send(results.rows);
      })
    },
    update: (req, res) => {
      //console.log(req.body);
      models.signups.update(req.body).then(results => {
        res.send(results.rows);
      })
    },
    delete: (req, res) => {
      //console.log(req.body);
      models.signups.delete(req.params.signupId).then(results => {
        res.send(results);
      })
    },
  }
}