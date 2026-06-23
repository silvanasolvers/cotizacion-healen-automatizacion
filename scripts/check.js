const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const required = [
  "Healen",
  "Excel",
  "$2.800.000 COP",
  "$3.500.000 COP",
  "Fase 1",
  "Control de inventario",
  "Control de clientes",
  "ingresos",
  "egresos",
  "50% iniciando",
  "25% antes de terminar",
  "25% finalizando"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing required proposal terms: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Proposal check passed.");
