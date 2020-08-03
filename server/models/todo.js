const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    task: {
         type: String 
        },
    isChecked:{
        type:boolean,
        default:false
    }
    },'tasklist');

module.exports = { Todo };