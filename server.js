import express from "express";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import serverRender from "./serverRender";

import config from "./config";
import apiRouter from "./api";

//import fs from 'fs';

const server = express();

server.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public")
  })
);

server.set("view engine", "ejs");

//serverRender();

server.get(["/", "contest/:contestId"], (req, res) => {
  console.log(req.params.contestId);
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      //console.log('content is',content);
      res.render("index", {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.listen(config.port, config.host, () => {
  console.info("express is listening to the", config.port);
});

server.use(express.static("public"));

server.use("/api", apiRouter);
