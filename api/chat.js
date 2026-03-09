export default async function handler(req, res) {
  console.log("API HIT ✅");
  res.status(200).json({
    reply: "API is working ✅"
  });
}
