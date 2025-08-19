// Server Start krna 
// Database connect krna

const app = require('./src/app')
const app = require('./src/db/db')


app.listen(3000, () => {
    console.log('server started!')
})

connectDB()