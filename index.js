const express = require("express");
const axios = require("axios");
const path = require("path");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const app = express()

const PORT = 4000
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))
app.get('/', async(req, res)=>{
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(data)
const names = ["Musa", "Radiyah", "Habeeb"]
    res.render('index',data)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})