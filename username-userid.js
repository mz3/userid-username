var child_process = require("child_process");

module.exports = function (uid, cb) {

  return new Promise(function(resolve, reject) {

    var process = child_process.spawn("getent", ["passwd", uid]);
    var stdout = new String();
    var stderr = new String();

    process.stdout.on("data", function(chunk) {
      stdout += new String(chunk);
    });

    process.stderr.on("data", function(chunk) {
      stderr += new String(chunk);
    });

    process.on("close", function (code) {

      // handle stderr
      if(stderr.length) var err = new Error(stderr);

      // parse username from stdout
      var username = new String(stdout).split(":")[0];

      // callback api
      if(cb && cb.constructor === Function) cb(err, username);

      // promise api
      if(err) reject(err);
      else resolve(username);

    });

  });

}
