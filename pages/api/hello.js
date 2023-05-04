// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Exporting default function handler to handle incoming HTTP requests.
export default function handler(req, res) {
  // Sending an HTTP response with 200 status code and JSON data containing name: 'John Doe'.
  res.status(200).json({ name: "John Doe" });
}
