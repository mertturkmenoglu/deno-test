// const text = 'My text';
// const encoder = new TextEncoder();

// Deno.writeFile('message.txt', encoder.encode(text)).then(() => {
//  	console.log('Wrote to file');
// }).catch(err => {
//  	console.error(err);
// });

// ---------------------------------------------------------------------------------

// import { serve } from "https://deno.land/std@0.89.0/http/server.ts";
// const s = serve({ port: 8000 });
// console.log('Server started listening on port 8000');

// for await (const req of s) {
//  	req.respond({ body: "Hello World\n"})
// }

// ---------------------------------------------------------------------------------

import { Application } from "https://deno.land/x/oak/mod.ts";
import todosRoute from './routes/todos.ts';

const app = new Application();

app.use(todosRoute.routes());
app.use(todosRoute.allowedMethods());


await app.listen({ port: 3000 });