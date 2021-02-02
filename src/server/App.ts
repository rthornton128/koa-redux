import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();
router.get('/', async (ctx: any) => ctx.status = 401);
router.post('/graphql', async (ctx: any) => ctx.body = 'GraphQL');
router.get('/graphiql', async (ctx: any) => ctx.body = 'GraphiQL');

const app = new Koa();
app.use(router.routes())

export function App() {
  app.listen(3000);
  console.log('Server listening on port 3000');
}
