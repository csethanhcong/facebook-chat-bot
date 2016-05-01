var login = require("facebook-chat-api");
 
var answeredThreads = {};
 
// Create simple echo bot
login({email: "cse.thanhcong@gmail.com", password: "#))*@)!!"}, function callback (err, api) {
    if(err) return console.error(err);
    
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("BOT: I'm currently not available. I will reply you later. Thanks!", message.threadID);
        }
    });
});