const  controllers = require('../app/controller/home')
function router (app){
    app.post('/',controllers.homePost)
    app.get('/',controllers.home)
}

module.exports= router
