const express=require('express');
const app=express();

const port=3000;

//list route
app.get('/',(req,res)=>{
  res.send('Hello,welcome to the home page!');
});

//show route
app.get('/:id',(req,res)=>{
  res.send('This is the show page')
})


app.post('/',(req,res)=>{
  res.send('This is a post request.');
})





app.listen(port,(req,res)=>{
  console.log(`port is listening on ${port}`);
});


