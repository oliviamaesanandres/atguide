const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://via:via@cluster0-jcv3b.mongodb.net/test?retryWrites=true&w=majority',
// mongoose.connect('mongodb+srv://via:via@cluster0-jcv3b.mongodb.net/test?retryWrites=true&w=majority',
// {useNewUrlParser: true}).catch(err => console.log(err));

//  mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true});


mongoose.connect(
    "mongodb+srv://oliviamaesanandres:oliviamaesanandres@cluster0-v47pn.mongodb.net/test?retryWrites=true&w=majority",{
        useUnifiedTopology : true,
        useNewUrlParser : true
    }
);
const cors = require('cors');
app.use(cors());

const Place = mongoose.model('place',{
    
    name: String,
    location: String,
    nearby: String,
    price: Number
});


const Comment = mongoose.model('comment',{
    
    name: String,
    comment: String,
    rating: Number
});

app.use(express.static(__dirname + '/dist/tguide'));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/dist/tguide/index.html');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/place', (req, res) => {
    Place.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/place', urlEncoded, (req, res) => {
    var place = new Place({
       
        name: req.body.name,
        location: req.body.location,
        nearby: req.body.nearby,
        price: req.body.price
    });
    place.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/place/:id', urlEncoded, (req, res) => {
    Place.updateOne({_id:req.params.id},{
        name: req.body.name,
        location: req.body.location,
        nearby: req.body.nearby,
        price: req.body.price
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/place/:id', (req, res) => {
    Place.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});



app.get('/comment', (req, res) => {
    Comment.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/comment', urlEncoded, (req, res) => {
    var comment = new Comment({
       
        name: req.body.name,
        comment: req.body.comment,
        rating: req.body.rating
    });
    comment.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/comment/:id', urlEncoded, (req, res) => {
    Comment.updateOne({_id:req.params.id},{
        name: req.body.name,
        comment: req.body.comment,
        rating: req.body.rating
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/comment/:id', (req, res) => {
    Comment.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);

});