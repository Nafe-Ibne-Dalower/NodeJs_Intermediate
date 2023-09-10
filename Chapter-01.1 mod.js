// Let's build an function adder
function addnum() {
  temp = Number(" ");
  for (i = 0; i < arguments.length; i++) {
    temp += arguments[i];
  }
  console.log(temp);
}

creator = "Nafe Ibne Dalower";

const EventEmitter = require("events");
class Security extends EventEmitter {
    startevent() {
        this.emit('Security_fix')
}
}

// Exporting
module.exports = {
  addnum: addnum,
  creator: creator,
};
module.exports = Security