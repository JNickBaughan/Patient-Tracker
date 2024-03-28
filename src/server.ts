
import express, { Request, Response } from 'express';
let bodyParser = require('body-parser')
let PORT = 3000;
let server = express();

const middlewares = [
  express.static('dist'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];
	
server.use(...middlewares);

server.get("/", (_: Request, res: Response) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div id="root" />
      <div>HELLO WORLD!!</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `);
});

server.listen(PORT, function(){
	console.log('server listening on port: ' + PORT);
});
