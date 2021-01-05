var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var cors = require('cors')
var { loadSchemaSync, GraphQLFileLoader } = require('graphql-tools')

var path = require('path')
const schema = loadSchemaSync(path.resolve('src/schema.graphql'), { loaders: [new GraphQLFileLoader()] })

var initDb = require('./db.json')
var db = JSON.parse(JSON.stringify(initDb))

var resolver = {
  user: ({ id }) => {
    return db.users[id]
  },
  users: () => {
    return db.users
  },
  changeNickname: ({ input }) => {
    const { id, nickname } = input
    db.users[id] = { ...db.users[id], nickname }
    return db.users[id]
  },
  resetUsers: () => {
    db = JSON.parse(JSON.stringify(initDb))
    return db.users
  },
}

var app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  }),
)
app.listen(4000, () => console.log('Now browse to http://localhost:4000/graphql'))
