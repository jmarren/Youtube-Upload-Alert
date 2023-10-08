require("dotenv").config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNTSID,
  process.env.TWILIO_AUTHTOKEN
);

module.exports = function sendText(videoTitle) {
  client.messages
    .create({
      body: `${videoTitle}`,
      from: "+18339093750",
      to: "+18476512236",
    })
    .then((message) => console.log(message.sid));
};
