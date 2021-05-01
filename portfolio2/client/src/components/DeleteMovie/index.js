import Axios from 'axios';
import {useState} from 'react';

//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!
function DeleteMovie() {
    const[number, setNumber] = useState("");   
    const[title, setTitle] = useState("");    
    const[director, setDirector] = useState("");
    const[rate, setRate] = useState("");

// LOOK AT SCREENSHOTS FROM CLASS & NOTES!!
    const deleteMovie = async() => {
        const response = await Axios.delete("http://localhost:45076/movies/" +  number   , {
            title:  "title",
            director: "director",
            rate: "rate"
        });
        console.log(response.data);
    }

 //All must have input!
    return (
        <div><h3>Delete Your Movie Here!</h3>
            <input 
              type = "text" 
              placeholder="Number" 
              value={number} 
              onChange={(event) => setNumber(event.target.value)}
            />
            <input 
              type = "text" 
              placeholder="Title" 
              value={title} 
              onChange={(event) => setTitle(event.target.value)}
            />
            <input 
              type = "text" 
              placeholder="Director" 
              value={director} 
              onChange={(event) => setDirector(event.target.value)}
            />
            <input 
              type = "text" 
              placeholder="Rate" 
              value={rate} 
              onChange={(event) => setRate(event.target.value)}
            />
            <p>Click Button!!</p>
            <button onClick = {() => {deleteMovie()}}>Delete Movie!</button>
        </div>
    );
}
export default DeleteMovie;
//matches the function name from top 