// const { promisify } = require("util");
// const path = require("path");
// const fs = require("fs");
// const readdir = promisify(fs.readdir);
// const stat = promisify(fs.stat);

// const root = path.resolve(__dirname, "../ts");

// const getFiles = async (dir) => {
//   const subdirs = await readdir(dir);
//   const files = await Promise.all(
//     subdirs.map(async (subdir) => {
//       const res = path.resolve(dir, subdir);
//       return (await stat(res)).isDirectory() ? getFiles(res) : res;
//     })
//   );
//   return files.reduce((a, f) => a.concat(f), []);
// };

// const getFiles = async (dir) => {
//   const files = await Promise.all(
//     return (await stat(res)).isDirectory() ? getFiles(res) : res;
//   );
//   return files.reduce((a, f) => a.concat(f), []);
// };

var cgf = require("changed-git-files");

// cgf.cwd = "../";
cgf((err, results) => {
  if (err) throw new Error(err);
  if (results.length > 0) {
    // Orange
    console.log("Changed Files", results);
  } else {
    // Green or Red
    console.log("No changes or uninitialized", results);
  }
});

// getFiles(root)
//   .then((files) => console.log(files))
//   .catch((e) => console.error(e));
