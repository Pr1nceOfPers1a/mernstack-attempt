const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


const dbURI = 'mongodb+srv://user:12345@cluster0.kkbk6.mongodb.net/?retryWrites=true&w=majority';
//usenewurlparser... gets rid of deprecated error
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .then((result) => console.log('handshake initialized'))
    .then((result) => console.log('handshake completed'))
    .catch((err) => console.log(err));

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



//route
app.get('/', (req, res) => {
    res.redirect('/blogs');
});


//routers

app.get('/about', (req, res) => {
    res.render('about', { title: 'about' })
});

//blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        console.log(req, res)
        res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
});

//redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create' });
});

//404 page (app.use says use this for every request but only is active if none of the above urls worked)
app.use((req, res) =>{
    res.status(404).render('404', { title: 'Error' });
});

