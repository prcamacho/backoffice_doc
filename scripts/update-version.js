const fs = require("fs");
const packageJson = require("../package.json");

let version = packageJson.version.split(".");
version[1] = parseInt(version[1]) + 1;
version = version.join(".");
packageJson.version = version;


fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));


const indexPath = "./src/index.html";
const indexHtml = fs.readFileSync(indexPath, "utf8");
const newIndexHtml = indexHtml.replace(
  /<!--V[0-9.]+b-->/,
  `<!--V${version}b-->`
);
fs.writeFileSync(indexPath, newIndexHtml);

console.log(`Versión actualizada a ${version}`);