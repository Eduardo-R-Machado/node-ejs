const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (requisition, response) {
  const items = [
    { 
        title: "D", 
        message: "esenvolver aplicações/serviços de forma fácil"
        
    },
    {
        title: "E",
        message: "JS usa JavaScript para renderizar HTML"
    },
    {
        title: "M",
        message: "ulti fácil de usar"
    },
    {
        title: "A",
        message: "morzinho de todos"
    },
    {
        title: "I",
        message: "nstall ejs"
    },
    {
        title: "S",
        message: "intaxe simples"
    }
  ];

  const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JS'

  response.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
});

app.get("/sobre", function (requisition, response) {
  response.render("pages/about");
});

app.listen(8080);
console.log("Server initialized");
