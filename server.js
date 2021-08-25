const header = require('./backend/app/header')
require('./backend/routes/user')
require('./backend/routes/auth')

header.app.listen("3000",()=>{
    console.log("server at 3000")
})