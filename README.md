# ga-twilio-check-sms

GitHub Action App that reaches out to [Twilio](https://www.twilio.com/) and fetch a list of received messages for a
given phone number.

The end goal of this tool is to provide as an input a Twilio phone number and a text (NEDDLE), this app will reach out
to Twilio using the provided token and it will fetch the last 20 messages sent to the provided phone number; run a
search for the provided text, if found it will return the body of the SMS, if not found it will return false.

## Input:

The app has the following input variables:

- `phone`: Twilio phone number that will be queried for recevied messages
- `text`: Text to search in the body of the text messages received by `phone`

## Secrets:

- `TWILIO_ACCOUNT_SID`: Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Twilio Auth Token

More
Info: [Auth Tokens and How to Change Them](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-How-to-Change-Them)

## Output:

The output ID is `found`, it will contain the matching SMS body or `false` if not found. 
