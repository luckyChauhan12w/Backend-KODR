const app = require('./src/app');
const user = require('./src/db/db')
const connectdb = require('./src/db/db')
require('dotenv').config()

connectdb()

app.listen(3000, () => {
    console.log('server is started')
})