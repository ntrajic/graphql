/* 
	# TSDL or SDL   type system definition language
	query{
		currentTime
	}
*/

import { graphql, buildSchema } from 'graphql';


// currentTime is top level field; each tl field has resolver function in executable schema
// resolver: default resolver (parent-child => child resolver), or actual resolver
const schemaSDL = `
type Query {
	currentTime: String
}
`;

// root resolvers respond to schema's top level fields (e.g. currentTime) 
// and interact with schema; top level field in schema is resolved with this resolver function
const rootValue = {
	currentTime: () => new Date().toLocaleString(),
};

const schema = buildSchema(schemaSDL);

console.log(schema);

// supply query as 2nd argument to graphql
const query = process.argv[2];
console.log(query);

// execute graphql schema against the query, and top/root level field of schema
graphql(schema, query, rootValue).then(resp => {
 	console.log(resp);
});

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>query2.bat

// C:\SRC\React\GraphQL\SamerBunaGraphQL-intro\0911>node -r esm schema/index2.js "query{currentTime}"
// OUTPUT:
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
//   _implementations: [Object: null prototype] {} }
// query{currentTime}
// { data:
//    [Object: null prototype] { currentTime: '9/13/2019, 1:18:20 PM' } }

export { schema, rootValue };