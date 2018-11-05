WebServer (nodeJS)

nodeJS | Express | PUG Template 

DevelopmentServer : Port 7000

ProductionServer  : Port 8080


INSTALL
-------
npm install


USE
---
DEVELOPMENT MODE (server_dev.js -> PUG Templating & PM2 Watching)

npm run dev // npm run dev:stop // npm run dev:delete

BUILD (Build html from PUG)

npm run build

PRODUCTION MODE (server.js -> serves index.html in ./dist)

npm start

STANDALONE VERSION FOR OSX (nexe)

npm run build:osx  

./SERVER_OSX
