import Express from "express";
import CORS from "cors";
import Database from "./Database.js";

const App = Express();
const port = 45040; //changed port!!!

App.use(Express.json()); //allows use request bodies & translate it out of JSON
App.use(CORS());

const db= new Database();

db.connect("lab11", "books");

//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!
//PUT -> createOne() -> collection.insertOne()
App.put("/books/:ISBN", async (req, res) => {
  const ISBN= req.params.ISBN;
  const title= req.body.title;
  const author= req.body.author;
  const description= req.body.description;

  const results = await db.createOne(ISBN, title, author, description);
    res.json(results);
    /*res.json ({
      ISBN: ISBN,
      title: title,
      author: author,
      description: description,
    });*/
});
//GET -> readOne() -> collection.findOne()
App.get("/books/:ISBN", async (req, res) => {
  const ISBN= req.params.ISBN;
  const result= await db.params.ISBN;
    res.json({book:"not found"});
});
//POST
App.post ("/books/:search", (req, res) => {
    const ISBN = req.params.ISBN;  
  /*res.json({
      URLParameters: req.query
    });*/ 
});
//PATCH -> updateOne() -> collection.updateOne()
App.patch ("/books/:ISBN", async (req, res) => {
  const ISBN= req.params.ISBN;
  const title= req.body.title;
  const author= req.body.author;
  const description= req.body.description;
    /*res.json ({
      ISBN: ISBN,
      title: title,
      author: author,
      description: description,
    });*/
  const result = await db.updateOne(ISBN,title,author,description);
    res.json(result); 
});
//DELETE -> deleteOne() -> collection.deleteOne()
App.delete ("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const result = await db.deleteOne(ISBN);
    res.json(result);
});

App.listen(port);