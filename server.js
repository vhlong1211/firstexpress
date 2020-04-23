// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var hoatdong=[
  {name:'nấu cơm'},
  {name:'đi ngủ'}
]
app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-
// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('yoo');


});
app.get('/tim',function(request,response){
  console.log(request.query)
  var dangngu=request.query.q;
  var matchUs=hoatdong.filter(function(i){
    return i.name.indexOf(dangngu)!==-1;
  })
  response.render('index',{
    meow:matchUs
  })
})
app.get('/todos',function(request,response){
  response.render('index',{
    meow:hoatdong
  })
})
app.get('/todos/create',function(request,response){
  response.render('create');
})
app.post('/todos/create',function(request,response){
  console.log(request.body);
  hoatdong.push(request.body);
  response.redirect('/todos');
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
