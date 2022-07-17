// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const client = require("mailchimp-marketing");
type Data = { email: string };

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_ID,
});
const genericError = "Oops, an error has occurred";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      if (!client) throw new Error("Mailchimp client not initiated correctly");
      const { email } = JSON.parse(req.body);

      if (!email) throw new Error("Email not available");

      const response = await client.lists.batchListMembers(
        process.env.MAILCHIMP_AUDIENCE_LIST_ID,
        {
          members: [
            { email_address: email, status: "subscribed", merge_fields: {} },
          ],
        }
      );

      // console.log("response: ", response);
      res.status(200).json(response);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).end(JSON.stringify({ error: err.message }));
      } else {
        res.status(500).end(JSON.stringify({ error: genericError }));
      }
    }
  } else {
    res.status(405).end(JSON.stringify({ error: "Method not allowed" }));
  }
}
