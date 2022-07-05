import { Link } from "react-router-dom";

const BlogList = ({blogs, title }) => {
    return ( 
        <div className="blog-list">
            {
            //blogs.map is how we are able to see the entire blogs array on screen
            }
                 {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title}</h2>
                    <p>Composed by { blog.author }</p>
                    </Link>
                </div>
            ))}    
        </div>
     );
}
 
export default BlogList;