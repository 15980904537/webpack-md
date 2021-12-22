module.exports = function (app) {
    app.get('api/home', (req, res) => {
        res.json({ a: 1, b: 6,c:10 })
    })
}