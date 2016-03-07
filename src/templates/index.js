// node imports
import fs from 'fs'
// local imports
import {cssBuild} from 'config/projectPaths'


const css = fs.readFileSync(cssBuild)


export default function renderTemplate({title, renderedComponent}) {
    return `<!DOCTYPE html>
<html>
  <head>
    ${title}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/static/images/favicon.png" type="image/png">
    <style>${css}</style>
  </head>
  <body>
    <div id="app">${renderedComponent}</div>
    <script async src="/static/client.js"></script>
    <script async src="//www.google-analytics.com/analytics.js"></script>
  </body>
</html>`
}
