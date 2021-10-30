import BlogList from './BlogList.js';
import useFetch from './useFetch.js';         
                                        
                                        

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}                    {/*To show Loading msg while the time taken to fetch the data from the server */}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}     {/*since fetching data takes some time so at first blogs is equal to null, so when one condn is false, overall false => Hence no response, So when blogs is data fetched then response is shown*/}

        </div>
    );
}

export default Home;


// Uisng a function without arguments in onClick event:-
// <button onClick={handleClick}>Click Me</button>


// Using a function with an argument in onClick :- 
// const handleClickAgain = (name) => {
//     console.log(`Hola beta ${name}`);
// }
// <button onClick={() => {handleClickAgain('mario')}}>Click Me again</button>


// Filter Function:-
// const newBlogs = blogs.filter(blog => blog.id != id);           // filter functionreturn a new array iterate for each element and returns true for those who match the given expression or return false. It does not change the original array





