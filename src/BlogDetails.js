import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch.js';

const BlogDetails = () => {

    const { id } = useParams();             // useParams Hook returns the object containing all the variable part of the called link
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);          // We change the fetching link from overall blogs to a particular blog of given id
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log('Blog Delted');
                history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={()=>{handleDelete()}}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;

