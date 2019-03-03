const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const typeDefs = `
type Query {
  info: String!
  feed(filter: String, skip: Int, first: Int, orderBy: LinkOrderByInput): Feed!
}

type Mutation {
  post(url: String!, description: String!): Link!
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
  vote(linkId: ID!): Vote
}

type Feed {
  links: [Link!]!
  count: Int!
}

type Link {
  id: ID!
  description: String!
  url: String!
  postedBy: User
  votes: [Vote!]!
}

type AuthPayload {
  token: String
  user: User
}

type User {
  id: ID!
  name: String!
  email: String!
  links: [Link!]!
}

type Subscription {
  newLink: Link
  newVote: Vote
}

type Vote {
  id: ID!
  link: Link!
  user: User!
}

enum LinkOrderByInput {
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
}
`
  const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
}

// 3
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  })
server.start(() => console.log(`Server is running on http://localhost:4000`))