import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "./Post";
import { getAllPosts } from "./Postapi";
import CreatePostForm from "./CreatePostForm";
import DeletePostForm from "./DeletePostForm";
import UpdatePostForm from "./UpdatePostForm";

export default function Posts(props) {
  const navigate = useNavigate();
  console.log("props in Posts", props)
  // Display Posts

  useEffect(() => {
    getAllPosts()
      .then((data) => data.json())
      .then((newPosts) => props.setPosts(newPosts));
  }, []);

  //Map data into individual post elements

  //Displayed if no posts

  let allPosts = <h3>Loading...</h3>;

  //List of posts displayed in Post Element if posts are present

  if (props.posts.posts) {
  }
  if (props.posts.posts) {
    if (props.posts.posts.length > 0) {
      allPosts = props.posts.posts.map((post, index) => {
        return (
          <>
          
          <Post
            id={post._id}
            idUpdate={post._id}
            author={post.author}
            title={post.title}
            content={post.content}
            posts={props.posts}
            setPosts={props.setPosts}
            key={props.index}
          />
          </>
        );
      });
    }
  }

  return (
    <div>
     <h1 className="font-bold text-2xl pb-4 ">Posts</h1>
      {allPosts}
      <br />
      <br />
      <CreatePostForm
        id={props.id}
        setId={props.setID}
        author={props.author}
        setAuthor={props.setAuthor}
        title={props.title}
        setTitle={props.setTitle}
        content={props.content}
        setContent={props.setContent}
      />
      <br />
      <br />
      <DeletePostForm id={props.id} setId={props.setId} />
      <UpdatePostForm
        idUpdate={props.idUpdate}
        setIdUpdate={props.setIdUpdate}
        author={props.author}
        setAuthor={props.setAuthor}
        title={props.title}
        setTitle={props.setTitle}
        content={props.content}
        setContent={props.setContent}
      />
    </div>
  );
}
