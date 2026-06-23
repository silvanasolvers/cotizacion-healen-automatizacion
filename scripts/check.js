const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const required = [
  "Healen",
  "Telegram",
  "Excel",
  "$1.500.000 COP",
  "tratamientos",
  "puntos",
  "ventas",
  "ingresos",
  "egresos"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing required proposal terms: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Proposal check passed.");
