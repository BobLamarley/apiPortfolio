'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // todoList Routes
  app.route('/users')
    .get(user.listUsers)
    .post(user.createUser);

  app.route('/users/:userId')
    .get(user.readUser)
    .put(user.updateUser)
    .delete(user.deleteUser);
};
