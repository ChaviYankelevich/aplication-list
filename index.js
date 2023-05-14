import express from "express";
import sdk from 'api';


const app=express()
const port=3000
// const API_KEY="rnd_U7LZ2tFjcogsWlX9PHVZjo0ZKsoN"
const api = sdk('@render-api/v1.0#dnrc1ulf088q9j');

api.auth('rnd_U7LZ2tFjcogsWlX9PHVZjo0ZKsoN');

app.get('/',(rec,res)=>{
    api.getServices({limit: '20'})
  .then(({ data }) => res.send(data))
  .catch(err => console.error(err));
    // res.send("hello world")
})
app.listen(port,()=>{
console.log(`example ${port}`)
})



