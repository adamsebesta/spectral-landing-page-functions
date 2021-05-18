// MAILCHIMP_API_KEY

const client = require("@mailchimp/mailchimp_marketing");

exports.addMailChimpSub = async (req, res) => {
  let email = req.body.email;

  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us",
  });

  const response = await client.lists.addListMember("6ed13096dd", {
    email_address: "Adrianna_Gutkowski@hotmail.com",
    status: "pending",
  });
  console.log(response);
  res.status(200).send(response);
};