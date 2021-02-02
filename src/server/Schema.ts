import { gql } from 'apollo-server-koa';

export const typeDefs = gql`
  type Book {
    title: String
    author: String 
  }

  type Query {
    "Get book list"
    books: [Book]
  }
`;
