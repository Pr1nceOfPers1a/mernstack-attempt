import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState ('');
    const [body, setBody] = useState ('');
    const [author, setAuthor] = useState ('');
    //below false because nothing is pending until we submit the form!
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        // below makes a post request to localhost endpoint to add in a new blog which will add in a new blog and json server adds an id property for us
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog )
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
            //history.go(-1) to go back one page
            history.push ('/') //to go to the home page
        });
    }

    return (
        <div className="create">
            <h2>Compose a Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog Title</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                 <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                 <label>Blog Author</label>
                <textarea 
                required
                onChange={(e) => setAuthor(e.target.value)}
                ></textarea>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding...</button>}
            </form>
        </div>
      );
}

export default Create;