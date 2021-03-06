import Express from 'express';

const App = Express();
const port = 45030;

function App() {
    return (
      <div
        style={{
          backgroundColor: 'gray',
          width: '100px',
          height: '100px'
        }}
      />
    );
}

const person = {
    name: "Brooke Eden",
    favoritecolor: "purple",
    favoriteanimal: "dog",
    favoriteseason: "winter"
}

App.get("/", function(req,res){
    res.send("Hi!!");
});

App.get("/person", function(req, res){
    res.json(person);
});



App.listen(port, function() {
    console.log("Server is running");
});