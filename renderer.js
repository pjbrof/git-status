// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

(function () {
  // document.getElementById("save").addEventListener("click", () => {
  //   const topLevel = document.getElementById("topLevelFolder");
  //   console.log(topLevel);
  // });

  document.getElementById("topLevelFolder").addEventListener(
    "change",
    function (event) {
      const pathString = event.target.files[0].webkitRelativePath;

      if (pathString) {
        document.getElementById("listing").innerText = pathString.split("/")[0];
        // pathString.split("/")[0];
        let { topLevelFolder } = remote.getGlobal("shared");
        console.log("tlf", topLevelFolder);
      }
    },
    false
  );
})();
