const express = require('express')
const app = express();

app.set("view engine", "ejs");

app.get("/", function(requisition, response){
    response.render("index");
})

app.get("/sobre", function (requisition, response) {
    response.render("about");
})

app.listen(8080);
console.log('Server initialized')