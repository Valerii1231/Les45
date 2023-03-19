
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SinglePost = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
 
  useEffect(()=>{
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data.id){
          navigate('/posts')
          return
        }
        setPost(data)
    })

  }, [id, navigate])
 
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}
export default SinglePost;