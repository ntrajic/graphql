/*
query{
	currentTime
}
*/

import { graphql, buildSchema } from 'graphql';


const schemaSDL = `
type Person {
	firstName: String,
	lastName: String,
	age: Int
},
type Query {
	currentTime: String,
	person: Person,
	counter: Int
}
`;

const schema = buildSchema(schemaSDL);

console.log(schema);

let count = 0;

const rootValue = {
	currentTime: () => new Date().toLocaleString(),
	counter: () => ++count,
	//person: () => { firstName: 'Joe', lastName: 'Doe', age: 42 }
};

export { schema, rootValue };

// Adding resolvers for counter, 1st step: top-level-field counter: () => 42
// http://localhost:3000/?query={counter}
// GraphiQL Web Editor OUT:
// {
// 	"data": {
// 	  "counter": 42
// 	}
// }

// counter's state is 20
// http://localhost:3000/?query={counter}
// {
// 	"data": {
// 	  "counter": 21
// 	}
//   }
