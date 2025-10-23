import { google } from "googleapis";

export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "No code provided." });
  }

  const oAuth2Client = new google.auth.OAuth2(
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
  );

  try {
    // Get tokens
    const { tokens } = await oAuth2Client.getToken(code);
    console.log(tokens);

    // Call your backend API here using fetch or axios and pass the tokens as needed
    // Example:
    // await fetch('YOUR_BACKEND_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ tokens })
    // });

    // For demo: show the token (NOT RECOMMENDED for prod)
    return res.status(200).json({ tokens });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to get token", details: err.message });
  }
}
