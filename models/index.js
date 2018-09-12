var mongoose = require("mongoose");
    // mongoose.set('debug', true);
    const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-api';
    mongoose.connect( databaseUri, {useNewUrlParser: true});
    mongoose.Promise = Promise;
    
    
module.exports.Todo = require("./todo");
