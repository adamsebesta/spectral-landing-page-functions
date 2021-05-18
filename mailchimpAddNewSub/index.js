module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  const client = require("@mailchimp/mailchimp_marketing");
  let email = req.body.email;

  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY || "890af1b395aa3a0bdad986741446da2b",
    server: "us7",
  });

  try {
    const response = await client.lists.addListMember("6ed13096dd", {
      email_address: email,
      status: "subscribed",
    });

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: response,
    };
  } catch (e) {
    context.res = {
      // status: 200
      body: JSON.parse(e.response.text),
    };
    return;
  }
};
