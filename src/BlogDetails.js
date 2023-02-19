import axios, { Axios } from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';
const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog, error , isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
       
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE',
        }).then( (e)=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
           
          {isPending && <div>Yükleniyor.. <br /><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}
          {error && <div> {error} </div>}
          {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Yazan: {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Sil</button>
            </article>
          )}  
        </div>
     );
}
 
export default BlogDetails;