module.exports = app => {
     app.get('/',(req, res) => {
         res.render('index', {title: 'ex per iments'});
     });

     app.get('/enter',(req, res) => {
        res.render('enter', {title: 'ex per iments'});
    });
}