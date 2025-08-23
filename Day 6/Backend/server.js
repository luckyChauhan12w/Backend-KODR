const app = require('./src/app');
const connectDB = require('./src/db/db');
require("dotenv").config();

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running at http://localhost:3000`);
});