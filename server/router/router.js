const express = require('express');
const router = express.Router();

// Require TodoModel in our routes module
const todos = require('../model/todoModels');

router.route('/all').get(function(req, res, next) {
    todos.find(function(err, todos) {
        if (err) {
            return next(new Error(err))
        }

        res.json(todos) // return all todos
    })
});

router.route('/add').post(function(req, res) {
    todos.create(
    {
        todo: req.body.todo,
        done: false
    },
    function(error, todo) {
        if (error) {
            res.status(400).send('Unable to create todo list')
        }
        res.status(200).json(todo)
    }
    )
});

router.route('/delete/:id').get(function(req, res, next) {
    const id = req.params.id;

    todos.findByIdAndRemove(id, function(err, todo) {
        if (err) {
            return next(new Error('Todo was not found'))
        }
        res.json('Successfully removed')
    })
});

router.route('/update/:id').post(function(req, res, next) {
    const id = req.params.id;

    todos.findById(id, function(error, todo) {
        if (error) {
            return next(new Error('Todo was not found'))
        } else {
            todo.todo = req.body.todo;
            todo.done = req.body.done;

            todo.save({
                function(error, todo) {
                    if (error) {
                        res.status(400).send('Unable to update todo')
                    } else {
                        res.status(200).json(todo)
                    }
                }
            })
        }
    })
});

module.exports = router;