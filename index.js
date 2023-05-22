const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${userInfo.name} and I'm from ${userInfo.campus}`,
    e : "oO",
    T : "U ",
}));