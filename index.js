export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Rewrite to your Vercel domain (domainY.com)
    url.hostname = "domainY.com";

    // Clone and modify headers
    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: {
        ...Object.fromEntries(request.headers),
        Host: "domainY.com", // Rewrite Host header
      },
      body: request.body,
      redirect: "manual",
    });

    return fetch(newRequest);
  },
};
