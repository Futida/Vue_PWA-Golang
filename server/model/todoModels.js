const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for todoitems
const todo = new Schema({
    todo: {
        type: String
    },

    done: {
        type: Boolean
    },

    date: {
        type: String,
        default: new Date()
    }
},
{
    collection: 'todos'
});

module.exports = mongoose.model('todos', todo);