import { chromium } from "playwright";
import { resolve } from "path";
import http from "http";
import fs from "fs";
import path from "path";

const CHROME_PATH = "/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome";
const BUILD_DIR = resolve("build");
const OUTPUT = resolve("resume.pdf");
const PORT = 3456;

const MIME_TYPES = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
    let filePath = path.join(BUILD_DIR, req.url === "/" ? "index.html" : req.url);
    if (!fs.existsSync(filePath)) filePath = path.join(BUILD_DIR, "index.html");
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
});

await new Promise(r => server.listen(PORT, r));
console.log(`Server on port ${PORT}`);

const browser = await chromium.launch({ executablePath: CHROME_PATH });
const page = await browser.newPage();
await page.goto(`http://localhost:${PORT}`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3000);
await page.pdf({
    path: OUTPUT,
    format: "Letter",
    printBackground: true,
    margin: { top: "0.25in", bottom: "0.25in", left: "0.25in", right: "0.25in" },
});

await browser.close();
server.close();
console.log(`PDF saved to ${OUTPUT}`);
