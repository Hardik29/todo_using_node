
var mongoose = require('mongoose')//make it easier to connect ojecty data library
var todo = require('./todo.js')


const dbms = ('mongodb+srv://test:test@cluster0.lysxb.mongodb.net/kuch?retryWrites=true&w=majority')
mongoose.connect(dbms, { useNewUrlParser: true,useUnifiedTopology: true })
.then(res => console.log("connected to mongo db"))//callback function
.catch(err => console.log(err))


const todoHandle = new todo({
    body: "yohoh"
}) //creted new instance from todo

module.exports = function(app){
  
  app.get("/", function (req, res) {
    res.redirect("/todo");//to redirect user to /todo
   }) 

    app.get('/todo',function(req,res){ 

      todo.find().sort({createdAt:-1})//timsetamp -1 to sort in ascending acc to time
      .then(data => res.render("todo",{todos:data}))
      .catch(err => console.log("erroorrr in get"))
    })
    app.post('/todo',function(req,res){
         var todoPost = todo(req.body)//req body will get our item 
           todoPost.save()  //auto save async    
          .then(data => res.json({todos: data}))
          .catch(err => console.log(err))
    })


    app.delete('/todo/:item',function(req,res){
        todo.find({item : req.params.item.replace(/ /g, " ")}).remove()//find and replace 
        .then(data => res.json({todos: data}))
        .catch(err => console.log(err))   
    })
}
//module.exports to export function