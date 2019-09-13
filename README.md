# graphql
Samer Buna's gently intro course to GraphQL, Sept 11, 2019

Basics:
  -schema
  -top-level fields in schema, queries, resolvers
  -executable schemas, Graphiql Editor
  -examples: query {currentTime}, query { currentTime, counter, person }

  http://localhost:3000/?query={currentTime}
  -the OUTPUT in Cursor part of the GraphiQL Editor is:
  {
          "data": {
            "currentTime": "9/13/2019, 3:38:08 PM"
          }
  }
