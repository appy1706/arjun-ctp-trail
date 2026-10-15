// Builds the site. The finished files (index.html + app.js) are written to BOTH
// the repo root and /docs, so GitHub Pages works whether its source is
// "/ (root)" or "/docs".
import { build } from "esbuild";
import { copyFile, mkdir, writeFile } from "node:fs/promises";

await mkdir("docs", { recursive: true });
await build({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020"],
  loader: { ".jsx": "jsx" },
  define: { "process.env.NODE_ENV": '"production"' },
  outfile: "app.js",
});
await copyFile("src/index.template.html", "index.html");
await copyFile("app.js", "docs/app.js");
await copyFile("src/index.template.html", "docs/index.html");
await writeFile(".nojekyll", "");
await writeFile("docs/.nojekyll", "");
console.log("Built: index.html + app.js at repo root and in docs/");
