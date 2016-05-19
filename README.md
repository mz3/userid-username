# userid-username

Convert a linux uid to a username in your nodejs program.

## Usage

```node
var uidToUsername = require("userid-username");

uidToUsername("1000", function (err, username) {
  console.log(username);
});
```
