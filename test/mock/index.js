let home=require('./home')

module.exports = function (app) {
    app.get('/api/add', (req, res) => {
        res.json({a:1,b:3})
    })
    home(app)
}