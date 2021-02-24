import React from "react";
import ReactDOMServer from "react-dom-server";
import { serve } from "std/http/server.ts";
import { ServerRequest } from "std/http/server.ts";
import { mime } from "mimetypes";

import { App, AppProps } from "./app.tsx";

const ssr = (req: ServerRequest, props: AppProps) =>
  req.respond({
    status: 200,
    body: `<!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="style.css" />
          <script type="module" src="app.js"></script>
        </head>
        <body data-props="${JSON.stringify(props).replace(/"/g, "&quot;")}">
          ${ReactDOMServer.renderToString(<App {...props} />)}
        </body>
      </html>`,
    headers: new Headers({
      "Content-Type": "text/html; charset=utf8",
    }),
  });

const staticFile = async (req: ServerRequest) => {
  const path = `${Deno.cwd()}/public${req.url}`;
  try {
    req.respond({
      body: await Deno.open(path),
      headers: new Headers({
        "Content-Type": mime.getType(path) || "text/plain",
      }),
    });
  } catch (err) {
    req.respond({ status: 404, body: "404 - not found" });
  }
};

const PORT = 8000;
const server = serve({ port: PORT });

const routes: Array<
  [RegExp, (req: ServerRequest, match: RegExpExecArray) => void]
> = [
  [
    /^\/(\d+)?$/,
    (req, match) => ssr(req, { counter: match.length ? Number(match[1]) : 0 }),
  ],
];

const router = (req: ServerRequest) => {
  for (let route of routes) {
    const [regexp, handler] = route;
    const match = regexp.exec(req.url);
    if (match) return handler(req, match);
  }
  return staticFile(req);
};

console.log(`🚀 Server is running on http://localhost:${PORT}`);

for await (const req of server) {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  router(req);
}
