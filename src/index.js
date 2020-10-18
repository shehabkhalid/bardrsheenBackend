require('./dataBase/connection')
const { ApolloServer, } = require('apollo-server');
const fs = require('fs')
const resolvers = require('./graphql/resolvers')



const server = new ApolloServer({
    typeDefs: fs.readFileSync('src/graphql/schema.graphql','utf8'),
    resolvers: resolvers

})

server.listen().then(({ url }) =>
{
    console.log(`🚀 Server ready at ${url}`);
});