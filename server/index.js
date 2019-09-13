import express from 'express';
// express graphql bridge via HTTP: 0911>npm i express-graphql
import graphqlHTTP from 'express-graphql';
import { schema, rootValue } from '../schema';

// GraphQLObject is Executable Schema, Query support fo Type Person
import { buildSchema, GraphQLObjectType } from 'graphql'; 


const server = express();

// do not use server.get(), b/c graphHTTP uses get()/post() 
server.use('/', 

	// begin_placeholder: execute access to schema

    graphqlHTTP({
		schema,
		rootValue,
		graphiql: true
	})

	// end_placeholder: execute access to schema

);
server.listen(3000);

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>server.bat

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>node -r esm server/index.js
// http://localhost:3000
// OUT:
// {
// 	errors: [
// 	{
// 	message: "Must provide query string."
// 	}
// 	]
// 	}
// 	http://localhost:3000/?query="{currentTime}"
// 	{
// 		- errors: [
// 			- {
// 			message: "Syntax Error: Unexpected <EOF>",
// 			- locations: [
// 				{
// 					line: 1,
// 					column: 16
// 				}
// 			   ]
// 			}
// 		]
// 	}

// SETTIG Graphiql Editor in the Browser: graphical: true flag 
// in graphicalHTTP call
// GraphiqL > Prettify Merge Copy Histor    Cursor space     <Docs
// =====================================    =========================
//
// http://localhost:3000/?query={currentTime}   <---- no quotes around
// 
// the OUTPUT in Cursor part of GraphiQL Editor is:
//{
// 	"data": {
// 	  "currentTime": "9/13/2019, 3:38:08 PM"
// 	}
//}
//
// http://localhost:3000/?query=%7BcurrentTime%7D is equivalent to:
// http://localhost:3000/?query={currentTime}
//
// thus do not put top level field in quotes when making the query in 
// browser's address bar: /?query={currentTime}
// 