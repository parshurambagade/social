import React from "react"
import "./rightbar.scss";
import user from "../../constants";

const Rightbar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img class="userImg" src={user.img} alt="user"/>
                            <span className="userName">{user.name}</span>
                        </div>
                        <div className="buttons">
                            <button className="btn">Follow</button>
                            <button className="btn">dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img class="userImg" src={user.img} alt="user"/>
                            <span className="userName">{user.name}</span>
                        </div>
                        <div className="buttons">
                            <button className="btn">Follow</button>
                            <button className="btn">dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="notification">
                        <div className="userInfo">
                            <img class="userImg" src={user.img} alt="user"/>
                            <div>
                                <p>
                                    <span><bold className="userName">{user.name} </bold>liked a post</span>
                                </p>
                            </div>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="notification">
                        <div className="userInfo">
                            <img class="userImg" src={user.img} alt="user"/>
                            <div>
                                <p>
                                    <span><bold className="userName">{user.name} </bold>liked a comment</span>
                                </p>
                            </div>
                            
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="notification">
                        <div className="userInfo">
                            <img class="userImg" src={user.img} alt="user"/>
                            <div>
                                <p>
                                    <span><bold className="userName">{user.name} </bold>posted</span>
                                </p>
                            </div>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="notification">
                        <div className="userInfo">
                            <img class="userImg" src={user.img} alt="user"/>
                            <div>
                                <p>
                                    <span><bold className="userName">{user.name} </bold>changed their cover picture</span>
                                </p>
                            </div>
                        </div>
                        <span>1 min ago</span>
                    </div>
        
                </div>

                <div className="item">
                    <span>Online Friends</span>
                    <div className="online">
                    <div className="userInfo">
                        <img class="userImg" src={user.img} alt="user"/>
                        <div className="onDot"></div>
                        <span className="userName">{user.name}</span>
                    </div>
                    </div>
                    <div className="online">
                    <div className="userInfo">
                        <img class="userImg" src={user.img} alt="user"/>
                        <div className="onDot"></div>
                        <span className="userName">{user.name}</span>
                    </div>
                    </div>
                    <div className="online">
                    <div className="userInfo">
                        <img class="userImg" src={user.img} alt="user"/>
                        <div className="onDot"></div>
                        <span className="userName">{user.name}</span>
                    </div>
                    </div>
                    <div className="online">
                    <div className="userInfo">
                        <img class="userImg" src={user.img} alt="user"/>
                        <div className="onDot"></div>
                        <span className="userName">{user.name}</span>
                    </div>
                    </div>
                    <div className="online">
                    <div className="userInfo">
                        <img class="userImg" src={user.img} alt="user"/>
                        <div className="onDot"></div>
                        <span className="userName">{user.name}</span>
                    </div>
                    </div>
                    <div className="online">
                    <div className="userInfo">
                        <img class="userImg" src={user.img} alt="user"/>
                        <div className="onDot"></div>
                        <span className="userName">{user.name}</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Rightbar
