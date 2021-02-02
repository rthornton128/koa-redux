import { books } from "./Data";

export const resolvers = {
  Query: {
    books: () => books,
  },
};
