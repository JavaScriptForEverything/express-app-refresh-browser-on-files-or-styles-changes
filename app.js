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

app.get('/', (req, res) => {
	res.render('index')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server starts on http://localhost:${PORT} - ${process.env.NODE_ENV}`))