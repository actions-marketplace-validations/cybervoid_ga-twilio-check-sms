const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const TWILIO_PHONE_NUMBER = core.getInput('phone');
    const NEEDLE = core.getInput('text');

    client.messages.list({
        to: TWILIO_PHONE_NUMBER,
        limit: 20
    })
        .then(messages => messages.forEach(m => {

            console.log(`Message found:`, m)
        }))
        .catch(err => console.log(`Error in the call detected`))

    console.log(`Hello ${NEEDLE}! and TWILIO_ACCOUNT_SID: ${TWILIO_ACCOUNT_SID}`);

    const time = "it works"
    core.setOutput("time", time);

} catch (error) {
    core.setFailed(error.message);
}


