import React from 'react'
import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

    const posts = [
        {
            id:1,
            name:"Albert Trump",
            userId:1,
            profilePic: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            img:"https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=600"

        },
        {
            id:1,
            name:"Joseph Jobs",
            userId:2,
            profilePic: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            img:"https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];
    return (
        <div className="posts">
            { posts.map((post)=> 
                <Post post={post} key={post.id} />)
            }
        </div>
    )
}

export default Posts;