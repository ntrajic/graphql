import express from 'express';
// express graphql bridge via HTTP: 0911>npm i express-graphql
import graphqlHTTP from 'express-graphql';
import { schema, rootValue } from '../schema/index1.js';
import { graphql } from 'graphql';


const server = express();

server.get('/', (req, res) => {

	const query = req.body.query = "query{currentTime}";

	// begin_placeholder: execute access to schema, 
	// move it from schema/index1 here:

	graphql(schema, query, rootValue).then(resp => {
		res.send(resp.data);
	});	

	// end_placeholder: execute access to schema

});
server.listen(3000);

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>server1.bat

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>node -r esm server/index1.js
// GraphQLSchema {
//   __validationErrors: undefined,
//   extensions: undefined,
//   astNode: undefined,
//   extensionASTNodes: undefined,
//   __allowedLegacyNames: [],
//   _queryType: Query,
//   _mutationType: undefined,
//   _subscriptionType: undefined,
//   _directives: [ @skip, @include, @deprecated ],
//   _typeMap:
//    [Object: null prototype] {
//      Query: Query,
//      String: String,
//      __Schema: __Schema,
//      __Type: __Type,
//      __TypeKind: __TypeKind,
//      Boolean: Boolean,
//      __Field: __Field,
//      __InputValue: __InputValue,
//      __EnumValue: __EnumValue,
//      __Directive: __Directive,
//      __DirectiveLocation: __DirectiveLocation },
//   _possibleTypeMap: [Object: null prototype] {},
//   _implementations: [Object: null prototype] {} } [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\SRC\\React\\GraphQL\\SamerBunaGraphQL-intro\\0911\\server\\index1.js' ]

// http://localhost:3000/
// OUT:  <-----actually there's graphqlHTTP from express-graphql simplifying this
// TypeError: Cannot read property 'query' of undefined
//     at _7dc‍.r.server.get (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\server\index1.js:10:25)
//     at Layer.handle [as handle_request] (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\layer.js:95:5)
//     at next (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\route.js:137:13)
//     at Route.dispatch (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\route.js:112:3)
//     at Layer.handle [as handle_request] (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\layer.js:95:5)
//     at C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\index.js:281:22
//     at Function.process_params (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\index.js:335:12)
//     at next (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\index.js:275:10)
//     at expressInit (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\middleware\init.js:40:5)
//     at Layer.handle [as handle_request] (C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911\node_modules\express\lib\router\layer.js:95:5)