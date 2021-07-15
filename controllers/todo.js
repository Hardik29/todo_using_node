const mongoose = require('mongoose')
const Schema =  mongoose.Schema//to define schema 

const todoSchema = new Schema({
    item:{
        type: String,
        required:true
    }
}, {timestamps: true})

const todo = mongoose.model('todo',todoSchema);//it will used to look todo in  mongo bd atlas

module.exports = todo;//to export 