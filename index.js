const express = require("express");
const path = require("path");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
var routes = require('./routes/index')

const app = express()

const PORT = 4000
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '/public')))
app.use(routes)
// app.get('/', async(req, res)=>{
//     const data = await axios.get('https://jsonplaceholder.typicode.com/users')
//     // console.log(data)
// const names = ["Musa", "Radiyah", "Habeeb"]
//     res.render('index',data)
// })

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})