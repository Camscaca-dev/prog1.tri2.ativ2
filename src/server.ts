/// <reference types="bun" />
import TodoListClass, { Item } from "./core"
const todolist = new TodoListClass("todolist.json")

function testRoute(req: Bun.BunRequest) {
  return Response.json({
    method: req.method,
    time: new Date().toLocaleString('pt-BR'),
    body: req.body,
  });
}

const server = Bun.serve({
  port: 3000,
  routes: {
    '/api-debugger': (req) => new Response(Bun.file('./public/api-debugger.html')),
    '/test': {
      GET: testRoute,
      POST: testRoute,
      PUT: testRoute,
      DELETE: testRoute,
      PATCH: testRoute,
      OPTIONS: testRoute,
    },
  },
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);