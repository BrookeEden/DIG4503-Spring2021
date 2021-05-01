import Axios from 'axios';
import {useState} from 'react';
//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!
function CreateMovie() {
    const[number, setNumber] = useState("");   
    const[title, setTitle] = useState("");    
    const[director, setDirector] = useState("");
    const[rate, setRate] = useState("");

// LOOK AT SCREENSHOTS FROM CLASS & NOTES!!
    const putMovie = async() => {
        const response = await Axios.put("http://localhost:45076/movies/" + number, {
            title:  "title",
            director: "director",
            rate: "rate"
        });
        console.log(response.data);
    }

 //All must have input!
    return (
        <div><h3>Insert Your Movie Here!</h3>
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
            <button onClick = {() => {putMovie()}}>Insert Movie!</button>
        </div>
    );
}
export default CreateMovie;
//matches the function name from top 