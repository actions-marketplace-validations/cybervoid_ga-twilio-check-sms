const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
    const NEEDLE = "Node"
    // const TWILIO_PHONE_NUMBER = core.getInput('phone');
    // const NEEDLE = core.getInput('text');
    const RETRIES = core.getInput('retries');

    const res = getMessages(TWILIO_PHONE_NUMBER, NEEDLE)
    console.log(`Was the message found?`, res)
    core.setOutput("found", res);

} catch (error) {
    core.setFailed(error.message);
}


function getMessages(TWILIO_PHONE_NUMBER, NEEDLE){
    const realRes = new Promise((resolve, reject) => {

    })
    const res = client.messages.list({
        to: TWILIO_PHONE_NUMBER,
        limit: 20
    })
        .then(messages => {
            return  messages.some(m =>  m.body.search(NEEDLE) !== -1)
        })
        .catch(err => console.log(`Error in the call detected`, err))

    return res
}

