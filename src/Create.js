import { useState } from "react";
import { useHistory } from 'react-router-dom';                  // Hook to redirect the page to some older page

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };               // json server will automatically add the unique ID to every blog
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {              // the 2nd argument of fetch defines the type of request we are going to send
            method: 'POST',                                 // method = the type of request we are gonna send
            headers: { "Content-Type": "application/json" }, // Here we define the content we'll send is of json type
            body: JSON.stringify(blog)                      // body defines the data we are going to send in json format
        })
            .then(() => {
                console.log('New Blog added');
                setIsPending(false);
                history.push('/');                          // When data is added, the page redirects to home page
            })
    }

    return (
        <div className="create">
            <h2>Create a new Blog</h2> 
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={(event) => {setTitle(event.target.value)}}
                />
                <label>Blog body: </label>
                <textarea
                    required
                    value={ body }
                    onChange={(event) => {setBody(event.target.value)}}
                >
                </textarea>
                <label>Blog author: </label>
                <input 
                    type="text"
                    required
                    value={ author }
                    onChange={(event)=>{setAuthor(event.target.value)}}
                />
                
                { (isPending == false) && <button>Add Blog</button> }
                { (isPending == true) && <button disabled>Adding Blog..</button>}

            </form>
        </div>
    );
};

export default Create;





{/* <select 
    value={ author }
    onChange={(event) => {setAuthor(event.target.value)}}
>
    <option value="mario">mario</option>
    <option value="yoshi">yoshi</option>
</select> */}