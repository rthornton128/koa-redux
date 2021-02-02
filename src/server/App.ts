import Koa from 'koa';
import KoaRouter, { IRouterContext } from 'koa-router';
import { ApolloServer } from 'apollo-server-koa';
import { resolvers } from './Resolvers';
import { typeDefs } from './Schema';

const router = new KoaRouter();
router.get('/healthcheck', (ctx: IRouterContext) => ctx.body = 'OK');

const app = new Koa();
app.use(router.routes());

const gqlServer = new ApolloServer({typeDefs, resolvers});
app.use(gqlServer.getMiddleware());

export function App() {
  app.listen(3000);
  console.log('Server listening on port 3000');
}
