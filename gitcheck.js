const { promisify } = require("util");
const path = require("path");
const fs = require("fs");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const root = path.resolve(__dirname, "../");

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.reduce((a, f) => a.concat(f), []);
}

getFiles(root)
  .then(files => console.log(files))
  .catch(e => console.error(e));
