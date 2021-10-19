const { createWriteStream } = require("fs");
let contents = "";
for (let i = 1; i < 1e10; i++) {
  createWriteStream(".txt").write("another one");
}
