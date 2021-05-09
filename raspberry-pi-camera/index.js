"use strict";

const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const util = require("util");
const SDK = require("@zesty-io/sdk");

// !!! Do not commit your password to a repository. This needs to stay secret.
// We only have you enter it here for simplicity of the example.
const ZESTY_ACCESS_TOKEN = ""; // Change this to your instance access token
const ZESTY_INSTANCE_ZUID = ""; // Change this to your instance ZUID
const ZESTY_BIN_ZUID = ""; // Change this to your media bin ZUID

function main() {
  // Instantiate sdk instance with instance ZUID and access token
  const zesty = new SDK(ZESTY_INSTANCE_ZUID, ZESTY_ACCESS_TOKEN);

  // Continously run
  setInterval(() => {
    // Unix timestamp. Time since in milliseconds since 1970.
    const epoch = Date.now();
    const file = `garden_img_${epoch}.jpg`;

    // This sends the image stream to stdout
    exec(
      `raspistill --encoding jpg --output ./${file}`,
      (err, stdout, stderr) => {
        if (err || stderr) {
          // Something went wrong taking a photo
          console.error(stderr);
          // The camera crashed
          console.error(err);
        } else {
          // Read file that raspistill created
          const stream = fs.createReadStream(
            path.resolve(__dirname, `./${file}`)
          );

          // Send file to Zesty
          zesty.media
            .createFile(ZESTY_BIN_ZUID, stream, {
              title: `PI Zero Garden Photo Taken on ${epoch}`,
              fileName: file,
            })
            .then((res) => {
              // For debugging
              // Running this while in our garden would consume alot of memory overtime
              // Which could crash the PI Zero
              // console.log(util.inspect(res, false, null));
            })
            .catch((err) => {
              console.error(err);
              console.error("Failed saving photo to Zesty.io");
            })
            .finally(() => {
              // Remove file.
              // The PI does not have a lot of space and
              // this is going to make a lot of images
              fs.unlinkSync(path.resolve(__dirname, `./${file}`));
            });
        }
      }
    );
  }, 15000); // Take a photo every 15 seconds
}

// Start the function
main();
