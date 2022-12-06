const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (requisition, response) {
  const items = [
    { 
        title: "D", 
        message: "Desenvolver aplicações/serviços de forma fácil"
        
    },
    {
        title: "E",
        message: "EJS usa JavaScript para renderizar HTML"
    },
    {
        title: "M",
        message: "Multi fácil de usar"
    },
    {
        title: "A",
        message: "Amorzinho de todos"
    },
    {
        title: "i",
        message: "Install ejs"
    },
    {
        title: "S",
        message: "Sintaxe simples"
    }
  ];
  response.render("pages/index",
    {
        qualitys: items,

    });
});

app.get("/sobre", function (requisition, response) {
  response.render("pages/about");
});

app.listen(8080);
console.log("Server initialized");
