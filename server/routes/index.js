const router = require('express').Router();
const controller = require('../controllers');

router.get('/users/:userId', controller.users.getOne);
router.post('/users', controller.users.create);
router.put('/users', controller.users.update);
router.delete('/users/:userId', controller.users.delete);

router.post('/users/login', controller.users.login);

router.get('/signups/', controller.signups.getAll);
router.get('/signups/:signupId', controller.signups.getOne);
router.post('/signups', controller.signups.create);
router.put('/signups', controller.signups.update);
router.delete('/signups/:signupId', controller.signups.delete);

router.get('/signups/users/:signupId', controller.signupUsers.getAll);
router.post('/signups/users/', controller.signupUsers.create);



module.exports = router;