// it used to create server
// it used to connect to the database

const app = require('./src/app')
const connectDB = require('./src/db/db')


app.listen(3000, () => {
    console.log('server started!')
})

connectDB()