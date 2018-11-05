WebServer (nodeJS)
------------------

nodeJS | Express | PUG Template<br>

DevelopmentServer : Port 7000<br>
ProductionServer  : Port 8080


INSTALL
-------
npm install<br>
<br>
<br>

USE
---
DEVELOPMENT MODE<br>
(PUG Templating & PM2 Watching)<br>
npm run dev // npm run dev:stop // npm run dev:delete
<br>
<br>
BUILD<br>
(Build html from PUG)<br>
npm run build
<br>
<br>
PRODUCTION MODE<br>
(server.js -> serves index.html in ./dist)<br>
npm start
<br>
<br>
STANDALONE VERSION FOR OSX<br>
(nexe)<br>
npm run build:osx<br>
./SERVER_OSX
