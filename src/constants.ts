export const baseUrl = process.env.CLIENT_URL
  ? `https://${process.env.CLIENT_URL}`
  : "http://localhost:3000";

export const url = `${baseUrl}/api/trpc`;
