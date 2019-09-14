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
},
type Mutation {
	incrementCounter: Int
}
`;

const schema = buildSchema(schemaSDL);

console.log(schema);

let count = 42;

const rootValue = {
	currentTime: () => new Date().toLocaleString(),
	counter: () => count,
	incrementCounter: () => ++count,
	person: () => ({ firstName: 'Joe', lastName: 'Doe', age: 42 })  // <--bracket - object
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

// http://localhost:3000/?query={counter}
// {
// 	"data": {
// 	  "counter": 46
// 	}
// }
// http://localhost:3000/?query=mutation%20%7B%0A%20%20incrementCounter%0A%7D%0A%0A%0A
// mutation {
// 	incrementCounter
// }
// {
// 	"data": {
// 	  "incrementCounter": 47
// 	}
// }  

// http://localhost:3000/?query=%7B%0A%20%20person%20%7B%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20age%0A%20%20%7D%0A%7D%0A
// {
// 	person {
// 	  firstName
// 	  lastName
// 	  age
// 	}
//   }
//   {
// 	"data": {
// 	  "person": {
// 		"firstName": "Joe",
// 		"lastName": "Doe",
// 		"age": 42
// 	  }
// 	}
//   }  