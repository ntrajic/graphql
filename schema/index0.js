/* 

	#TSDL or SDL   type system definition language

	query {
		currentTime
	}

*/

import { buildSchema } from 'graphql';

const schemaSDL = `
	type Query {
		currentTime: String
	}
`;

const schema = buildSchema(schemaSDL);

console.log(schema);

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>query0.bat

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>node -r esm schema/index0.js
// OUTPUT: - object - schema is not executable - currentTime is a TOP LEVEL FIELD (rootValue)
// #Eery field in schema maps to a resolver function; there are default resolvers.
//
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
//      __DirectiveLocation: __DirectiveLocation },
//   _possibleTypeMap: [Object: null prototype] {},
//   _implementations: [Object: null prototype] {} }
