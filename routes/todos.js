var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos');

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

// router.get('/', );
// router.post('/', );

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

// router.get('/:todoId', );
// router.put('/:todoId', );
// router.delete('/:todoId', );

module.exports = router;