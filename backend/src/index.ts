require('dotenv').config()

import app from './app'

const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port)

console.log(`Listening on port ${port}`)
