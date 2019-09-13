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
	person: Person
}
`;

const schema = buildSchema(schemaSDL);

console.log(schema);

const rootValue = {
	currentTime: () => new Date().toLocaleString(),
	//person: () => { firstName: 'Joe', lastName: 'Doe', age: 42 }
};

export { schema, rootValue };
