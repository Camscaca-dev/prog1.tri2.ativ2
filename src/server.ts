import TodoListClass, { Item } from "./core"

const todolist = new TodoListClass("todolist.json")

async function testRoute(req: Request) {
  return Response.json({
    method: req.method,
    time: new Date().toLocaleString("pt-BR"),
    body: await req.text(),
    key: crypto.randomUUID()
  })
}

const server = Bun.serve({
  port: 3000,

  routes: {
    "/": () =>
      new Response(Bun.file("./public/index.html")),

    "/api-debugger": () =>
      new Response(Bun.file("./public/api-debugger.html")),

    "/test": testRoute,

    "/todo": {
      GET: async () => {
        const items = await todolist.getItems()
        return Response.json(items)
      },

      POST: async (req: Request) => {
        let data

        try {
          data = await req.json()
        } catch {
          return new Response("JSON inválido", {
            status: 400
          })
        }

        if (!data?.title)
          return new Response(
            "É preciso informar title",
            { status: 400 }
          )

        try {
          const index = await todolist.addItem(
            new Item(data.title)
          )

          return Response.json(
            { index },
            { status: 201 }
          )
        } catch (e) {
          return new Response(String(e), {
            status: 400
          })
        }
      }
    },

    "/todo/:index": {
      GET: async (req: any) => {
        const index = parseInt(req.params.index)

        if (isNaN(index))
          return new Response(
            "Índice inválido",
            { status: 400 }
          )

        try {
          const item =
            await todolist.getItem(index)

          return Response.json(item)
        } catch (e) {
          return new Response(String(e), {
            status: 404
          })
        }
      },

      PUT: async (req: any) => {
        const index = parseInt(req.params.index)

        if (isNaN(index))
          return new Response(
            "Índice inválido",
            { status: 400 }
          )

        let data

        try {
          data = await req.json()
        } catch {
          return new Response(
            "JSON inválido",
            { status: 400 }
          )
        }

        if (!data?.title)
          return new Response(
            "É preciso informar title",
            { status: 400 }
          )

        try {
          await todolist.updateItem(
            index,
            data.title
          )

          return new Response(
            "Item atualizado"
          )
        } catch (e) {
          return new Response(String(e), {
            status: 400
          })
        }
      },

      DELETE: async (req: any) => {
        const index =
          parseInt(req.params.index)

        if (isNaN(index))
          return new Response(
            "Índice inválido",
            { status: 400 }
          )

        try {
          await todolist.removeItem(index)

          return new Response(
            "Item removido"
          )
        } catch (e) {
          return new Response(String(e), {
            status: 400
          })
        }
      }
    }
  },

  fetch() {
    return new Response(
      "Rota não encontrada",
      { status: 404 }
    )
  }
})

console.log(
  `Servidor rodando em http://localhost:${server.port}`
)