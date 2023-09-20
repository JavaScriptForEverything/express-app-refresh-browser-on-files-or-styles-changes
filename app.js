const express = require('express')
const path = require('path')
const liveReload = require('livereload')
const connectLiveReload = require('connect-livereload')

const publicDir = path.join( process.cwd(), 'public')

const liveReloadServer = liveReload.createServer() 						// create seperate server browser will listen on it
liveReloadServer.watch( publicDir )
liveReloadServer.server.once('connection', () => {
	setTimeout(() => {
		liveReloadServer.refresh('/')
	}, 10);
})

const app = express()

app.use( connectLiveReload() )

app.use( express.static( publicDir ) )
app.set('view engine', 'ejs')

app.get('/', (_req, res) => {
	const users = [
		{ id: 1, name: 'riajul', email: 'riajul@gmail.com' },
		{ id: 2, name: 'rakib', email: 'rakib@yahoo.com' },
	]
	res.render('./pages/index', { users })
})
app.get('/about', (_req, res) => {
	res.render('pages/about')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server starts on http://localhost:${PORT} - ${process.env.NODE_ENV}`))