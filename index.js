// import { generateNumber, sayHello } from "./utils.js";
import getPosts, { getLength } from "./posts.js";

// console.log(generateNumber());

// console.log(sayHello());

// console.log(getPosts());
// console.log(getLength());

// import * as fs from "fs";

// const files = fs.readdirSync("./");

// fs.readFile("C:/Users/SAMA/Desktop/NodeJS-WS/text.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error:", err);
//   else console.log("Result:", files);
// });

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello There");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify(getPosts()));
    res.end();
  }
});

server.listen(5000);
