import React from 'react'
import './comments.scss'
import user from '../../constants.js'

const Comments = () => {
    const comments = [
        {
            id:1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", 
            name:"Albert Trump",
            userId:1,
            profilePic: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            name:"Joseph Jobs",
            userId:2,
            profilePic: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }
    ];
    return (
        <div className="comments">
            <div className="userComment">
                <img src={user.img} alt="profile pic" />
                <input type="text" placeholder="write a comment" />
                <button>send</button>
            </div>
            {comments.map(function (comment) {
                return(
                    <div className="comment">
                        <img src={comment.profilePic} alt="profile pic" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>);
                })
            }
        </div>
    )
}

export default Comments
