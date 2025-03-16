export function GET(request) {
  console.log("GET request received", request);
  return new Response("Hello!");
}
