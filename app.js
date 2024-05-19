const express= require('express');
const app= express();
const path = require('path');
const routes= require('./routes');

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






/* lets use the pug template to dynamic data rendering using the set method of express to 
set the default template rendering to pug */

app.set('view engine', 'pug');

/* this line means i have views named convention  named to something else as template or anything else
so i just made it but my name convention is views only else it could be 
app.set('views', 'template') */
app.set('views','views');


/* i used sendFile to send the html file but that is a static file .. 
incase we have to send html with styles and javscript code wee can use a better a approach to 
render dynamic  content by using the templates as pug , ejs etc  */
app.get('/home',(req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'shop.html'));
    res.render("pop.pug");
    })
    
app.get('/happy',  (req, res) => {
res.render('pop');  
})



app.use('/', routes);
// app.use(app.router);
// router.initialize(app);

// const router= express.Router();

app.listen(3000, ()=>{
    console.log('server running on port 3000');
});

module.exports= app;