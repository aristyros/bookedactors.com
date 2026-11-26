// Which country is this visitor in? Vercel fills x-vercel-ip-country from the
// IP address on every request. Nothing is stored: the page only uses it to
// swap the App Store badge for the waitlist outside the storefronts Booked is in.
module.exports = function (req, res) {
  var country = String(req.headers["x-vercel-ip-country"] || "").toUpperCase().slice(0, 2);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(JSON.stringify({ country: country }));
};
