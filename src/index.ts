import express from 'express'

const app = express()
const port: number = 3000

app.get('/', data => {
  data.res?.send('Hello World')
})

app.listen(port, () => {
  console.log(port)
})


export function sayHelloWorld(world: string) {
  return `Hello ${world}`;
}
