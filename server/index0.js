import express from 'express';
const server = express();
server.get('/', (req, res) => {
	// placeholder: execute access to schema
	res.send('Hello Express');
});
server.listen(3000);

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>server0.bat
// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>node -r esm server/index0.js
// Browser: http://localhost:3000/
// OUT: 
// Hello Express