const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// client.messages.fetch()

client.messages
    .create({
        body: 'Hello from Node',
        to: '', // Text this number
        from: TWILIO_PHONE_NUMBER,
    })
    .then((message) => console.log(message.sid));
