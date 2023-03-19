
/*

import React from 'react'
import { Link } from 'react-router-dom';
const News = () => {
 const [news, setNews] = useState([]);
 useEffect(()=>{ fetch('https://dummyjson.com/posts')
 .then(res => res.json())
 .then(data => setNews(data.posts))
 },[])
const About = () => {
  return (
    <>
    <h1>Posts</h1>
    <p>View our posts</p>
    <div className='posts-body'>

    </div>
    </>
  )
}
export default About
*/





/*

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Posts = () => {
  const [posts, setPost] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPost(data.posts))
  },[])

  return (
    <>
      <h1>Posts</h1>
      <p>View our posts</p>
      <div className='posts-body'>
        {posts.map(item => (
          <Link key={item.id} to={`/news/${item.id}`}>
            <li>{item.title}</li>
          </Link>))
        }
      </div>
    </>
    )
  }
export default Posts;

*/


import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

const Posts = () => {
  const [posts, setPost] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPost(data.posts))
  },[])

  return (
    <>
      <h1>Posts</h1>
      <p>View our posts</p>
      <div className='posts-body'>
        {posts.map(item => (
          <NavLink key={item.id} to={`/posts/${item.id}`}>
            <li>{item.title}</li>
          </NavLink>
        ))}
      </div>
    </>
    )
  }
export default Posts;

