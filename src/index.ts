import express from 'express'
import 'dotenv/config'
import { Client, Events, GatewayIntentBits } from 'discord.js'

const app = express()
const port = process.env.port || 3000
const token = process.env.DISCORD_TOKEN

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, () => {
  console.log('Ready!')
})

client.login(token)

app.get('/', data => {
  data.res?.send('Hello World')
})

app.listen(port, () => {
  console.log(port)
})