import * as SparkPost from "sparkpost";
const client = new SparkPost(process.env.SPARKPOST_API_KEY1);
console.log('start email send=1');

export const sendEmail = async (recipient: string, url: string) => 
{
  console.log('start email send=recepient', recipient);
  console.log('start email send=url', url);
  const response = await client.transmissions.send(
    {
      options: {  sandbox: true  },
      content: {
        from: "testing@sparkpostbox.com",
        subject: "Confirm Email",
        html: `<html>
          <body>
          <p>Testing SparkPost - the world's most awesomest email service!</p>
          <a href="${url}">confirm email</a>
          </body>
          </html>`
    },
    recipients: [{ address: recipient }]
  });
  console.log('server/src/utils/sendemail.ts-response=',response);
};
