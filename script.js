const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// plistFile = path.resolve("./md.plist");
// const plist = fs.readFileSync(plistFile).toString();
const tagColor = ["Green", "Red"];

const plist = `<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<array>
        <string>${tagColor}</string>
	</array>
</plist>`;

const dest = path.join(__dirname, "../ts");

const addTag = () => {
  const xattr = `xattr -w com.apple.metadata:_kMDItemUserTags \'${plist}\' ${dest}`;

  exec(xattr, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
};

/* 
    Removes All Tags 
    TODO - need way to remove specific tags if users already have other tags 
    xattr --help
*/
const removeAllTags = () => {
  const promise = new Promise((resolve, reject) => {
    const xattr = `xattr -cr ${dest}`;

    exec(xattr, (err, stdout, stderr) => {
      if (err || reject) {
        console.error(err);
        console.log(reject);
      } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
      resolve();
    });
  });
  return promise;
};

removeAllTags().then(addTag);
