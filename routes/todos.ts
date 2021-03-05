
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface ITodo {
	id: string
	text: string
}

let todos: ITodo[] =[]

router.get('/todos', (ctx) => {
	ctx.response.body = { todos };
});

router.post('/todos', async (ctx) => {
	const data = await ctx.request.body();
	const newTodo: ITodo = {
		id: new Date().toISOString(),
		text: data.value.text
	}

	todos.push(newTodo);
	ctx.response.body = { todo: newTodo }
});

router.put('/todos/:todoId', (ctx) => {
	// TODO
});

router.delete('/todos/:todoId', (ctx) => {
	// TODO
});

export default router;