const express=require('express');
const app=express();
const mongoose=require('mongoose');
const evs=require('./Schema/EvSchema');
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/EVApp').then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

// dummy=[{name:'Name 1',
// image:'https://www.evnexus.in/images/evnexus-charging-station.jpg',
// pricing:'45',
// address:'45/A Street 1'},
// {name:'Name 2',
// image:'https://www.evnexus.in/images/evnexus-charging-station.jpg',
// pricing:'30',
// address:'45/A Street 2'}]

// async function seedDB(){
//     await evs.deleteMany();
//     await evs.insertMany(dummy);
// }
// seedDB();

app.get('/',async(req,res)=>{
    const data=await evs.find({});
    // console.log(data);
    res.render('index',{data});
    
})

app.get('/:EVid',async(req,res)=>{
    const {EVid}=req.params;
    const ev=await evs.findById(EVid);
    res.render('show',{ev});
})

app.get('/newabc',(req,res)=>{
    res.render('index');
})

app.listen(3000,()=>{
    console.log("server running");
})