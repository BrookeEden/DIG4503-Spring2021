import Express from "express";
import CORS from "cors";
import Database from "./Database.js";

const App = Express();
const port = 45076; //changed port!!!

App.use(Express.json()); //allows use request bodies & translate it out of JSON
App.use(CORS());

const db= new Database();

db.connect("portfolio2", "BrookeEden"); 

//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!
//PUT -> createOne() -> collection.insertOne()
App.put("/movies/:number", async (req, res) => {
  const number = req.params.number; //CHANGE
  const title= req.body.title;
  const director= req.body.director;
  const rate= req.body.rate;

  const result = await db.createOne(number, title, director, rate);
    res.json(result);
});

//GET -> readOne() -> collection.findOne()
App.get("/movies/:number", async (req, res) => {
    const number = req.params.number; //CHANGE
    const result = await db.readOne(number)
      res.json(result);
});

//PATCH -> updateOne() -> collection.updateOne()
App.patch ("/movies/:search", async (req, res) => {
  const number  = req.params.number; //CHANGE
  const title = req.body.title;
  const director = req.body.director;
  const rate = req.body.rate;
   
  const result = await db.updateOne(number,title,director,rate);
    res.json(result); 
});

//DELETE -> deleteOne() -> collection.deleteOne()
App.delete ("/movies/:number", async (req, res) => {
  const number = req.params.number; // CHANGE
  const result = await db.deleteOne(number);
    res.json(result);
});

App.listen(port  => {
  console.log("Server running!");
});
    
