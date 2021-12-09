// const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
// const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
// const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const core = require('@actions/core');
const github = require('@actions/github');


try {


    // client.messages.list({
    //     to: TWILIO_PHONE_NUMBER,
    //     limit: 20
    // })
    //     .then(messages => messages.forEach(m => {
    //
    //         console.log(m.body)
    //     }))
    //     .catch(err => console.log(`Error in the call detected`))


    const nameToGreet = core.getInput('phone');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}


