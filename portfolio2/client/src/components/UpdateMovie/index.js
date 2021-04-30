import Axios from 'axios';
import {useState} from 'react';

//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!
function UpdateMovie() {
  const[number, setNumber] = useState("");   
  const[title, setTitle] = useState("");    
  const[director, setDirector] = useState("");
  const[rate, setRate] = useState("");

// LOOK AT SCREENSHOTS FROM CLASS & NOTES!!
    const updateMovie = async() => {
        const response = await Axios.put("http://localhost:45045/movies/" +  number   , {
            title:  "title",
            director: "director",
            rate: "rate"
        });
        console.log(response.data);
    }

 //All must have input!
    return (
        <div><h3>Update Your Movie Here!</h3>
            <input 
              type = "text" 
              placeholder="number" 
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
                 <button onClick = {() => {updateMovie()}}>Update Movie!</button>
                  {
                    <h5> Updated: {number} {title} {director} {rate}</h5>
          }
        </div>
    );

}

export default UpdateMovie;
//matches the function name from top 