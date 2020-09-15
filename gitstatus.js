const cp = require("child_process");

module.exports = {
  changes: (dir) => {
    cp.exec("./status.sh", [], (err, stdout, stderr) => {
      if (stdout) {
        return true;
      }
    });
  },
};

cp.exec("./status.sh", [], (err, stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
    return true;
  }
});
