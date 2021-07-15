var express = require('express') //impoerting express moodule


var todocontroller = require('./controllers/todocontroller')//importin modules making get post request there

var app = express() //refrencing export object to app

app.use(express.json())//body parse is deppreacted us this 
app.use(express.urlencoded({extended: true}))//use in res body 


todocontroller(app) //passing app for handeling  post get req in file todio controller

app.set('view engine','ejs')//use to set template engine(html with js)

app.use(express.static('./assest'))//will direct every route to assest

app.listen(3000)//assigning port no
console.log("started")




