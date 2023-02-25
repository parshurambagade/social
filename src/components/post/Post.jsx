import React,{useState} from 'react';
import "./post.scss";
import {BsThreeDots} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {FaRegCommentDots} from "react-icons/fa";
import {BiShareAlt} from "react-icons/bi";
import Comments from '../comments/Comments';

const Post = ({post}) => {
    
    //Temporary function( liked or not)

    const [showComments, setShowComments] = useState(false);

    const [liked, setLiked] = useState(false);

    return (

    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="profile pic" />
                    <div>
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color: "inherit"}} className="userDetails">
                        <span className="userName">{post.name}</span>
                        </Link>
                        <span className="date">1 min ago</span>
                    </div>
                </div>
                <BsThreeDots />
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="post" />
            </div>
            <div className="interaction">
                <div className="item" onClick={()=> setLiked(!liked)}>
                {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                15 Likes
                </div>
                <div className="item" onClick={()=>setShowComments(!showComments)}>
                <FaRegCommentDots />
                10 Comments
                </div>
                <div className="item">
                <BiShareAlt />
                Share
                </div>
            </div> 
            {showComments && <Comments /> }
        </div>
    </div>
    )
}
export default Post;
