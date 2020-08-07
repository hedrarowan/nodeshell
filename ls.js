const fs = require("fs");
const path = require("path");

let directoryPath = path.join(__dirname);

let ls = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "ls") {
    fs.readdir(directoryPath, "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("prompt > ");
      }
    });
  }
});

module.exports = ls;
