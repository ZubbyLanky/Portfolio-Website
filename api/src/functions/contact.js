// CommonJS (default for Functions JS)
const { app } = require("@azure/functions");

// Optional: small helper to include CORS headers when you call the API directly
function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",            // tighten in production
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

app.http("contact", {
  route: "contact",                 // endpoint path: /api/contact
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    // Handle CORS preflight if the browser sends it
    if (request.method === "OPTIONS") {
      return { status: 204, headers: corsHeaders() };
    }

    let body;
    try {
      body = await request.json();  // parse JSON body
    } catch {
      return {
        status: 400,
        jsonBody: { message: "Invalid JSON body." },
        headers: corsHeaders(),
      };
    }

    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return {
        status: 400,
        jsonBody: { message: "All fields are required." },
        headers: corsHeaders(),
      };
    }

    // TODO: send email (SendGrid/Azure Communication Services) or persist to storage
    context.log("Contact message:", { name, email, message });

    return {
      status: 200,
      jsonBody: { message: "Thanks, your message has been received." },
      headers: corsHeaders(),
    };
  },
});
