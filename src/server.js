"use strict";

const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
const routes = require("./routes.js");
const path = require("path");
const { parse } = require("url");
// Load environment variables from .env file if present
require("dotenv").config();

// now-logs allows remote debugging if deploying to now.sh
if (process.env.LOGS_SECRET) {
  require("now-logs")(process.env.LOGS_SECRET);
}

process.on("uncaughtException", function (err) {
  console.error("Uncaught Exception: ", err);
});

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection: Promise:", p, "Reason:", reason);
});

console.log("Backend :", process.env.BACKEND_URI);
// Default when run with `npm start` is 'production' and default port is '80'
// `npm run dev` defaults mode to 'development' & port to '3000'
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 3000;

const isDev = process.env.NODE_ENV === "development";

// Initialize Next.js
const nextApp = next({
  dir: "./src",
  dev: isDev,
});

let handler = routes.getRequestHandler(nextApp);
nextApp
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      "/api",
      createProxyMiddleware({
        target: "/api",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api/api": "/api", // rewrite path
        // },
      })
    );

    server.use(handler);

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(
        "> Ready on http://localhost:" +
          process.env.PORT +
          " [" +
          process.env.NODE_ENV +
          "]"
      );
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
