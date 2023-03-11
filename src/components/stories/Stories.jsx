import React from 'react'
import user,{user2} from "../../constants";
import "../stories/stories.scss";

const Stories = () => {

    const stories = [
        {
            id:1,
            name: user2.name,
            img: user2.img
        },
        {
            id:2,
            name: user2.name,
            img: user2.img
        },
        {
            id:3,
            name: user2.name,
            img: user2.img
        },
        {
            id:4,
            name: user2.name,
            img: user2.img
        }
    ]
    return (
        <div className="storyContainer">
        <div className="stories">
            <div className="story">
                <img src={user.img} alt="user" />
                <span>{user.name}</span>
                <button>+</button>
            </div>
            {stories.map((story)=>{
                return(
                    <div className="story" id={story.id}>
                        <img src={story.img} alt="user" />
                        <span>{story.name}</span>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Stories;
