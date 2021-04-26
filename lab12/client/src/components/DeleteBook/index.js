import Axios from 'axios';
import {useState} from 'react';
//MAKE SKELTON FIRST OF WHAT NEEDS TO BE DONE!!!!
function DeleteBook() {
    const[ISBN, setISBN] = useState("");   
    const[title, setTitle] = useState("");    
    const[author, setAuthor] = useState("");
    const[description, setDescription] = useState("");
// LOOK AT SCREENSHOTS FROM CLASS & NOTES!!
    const deleteBook = async() => {
        const response = await Axios.delete("http://localhost:45045/books/" + ISBN, {
            title:  "title",
            author: "author",
            description: "description"
        });
           console.log(response.data);
    }
      return (
        <div><p>Delete Your Book Here!</p>
            <input 
              type = "text" 
              placeholder="ISBN" 
              value={ISBN} 
              onChange={(event) => setISBN(event.target.value)}
            />
            <input 
              type = "text" 
              placeholder="Title" 
              value={title} 
              onChange={(event) => setTitle(event.target.value)}
            />
            <input 
              type = "text" 
              placeholder="Author" 
              value={author} 
              onChange={(event) => setAuthor(event.target.value)}
            />
            <input 
              type = "text" 
              placeholder="Description" 
              value={description} 
              onChange={(event) => setDescription(event.target.value)}
            />
            <p>Click Button!!</p>
               <button onClick = {() => {deleteBook()}}>Delete Book!</button>
        </div>
    );
}
export default DeleteBook;