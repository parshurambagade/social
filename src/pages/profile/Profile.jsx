import "./profile.scss";
import {GrFacebook, GrInstagram, GrLinkedin, GrGithub} from 'react-icons/gr';              
import {MdLocationOn, MdLanguage} from 'react-icons/md';              
import {HiOutlineMail} from 'react-icons/hi';              
import {FiMoreVertical} from 'react-icons/fi';     
import Posts from "../../components/posts/Posts";         

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src='https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="cover" className="coverImg" />
                <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt="profile" className="profileImg" />
            </div>
            <div className="userContainer">
                <div className="userInformation">
                    <div className="left">
                        <a href="https://www.facebook.com/parshuram.bagade.1/" target="_blank">
                            <GrFacebook />
                        </a>
                        <a href="https://github.com/parshurambagade/" target="_blank">
                            <GrGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/parshuram-bagade/" target="_blank">
                            <GrLinkedin />
                        </a>
                        <a href="https://www.instagram.com/musical_parshh/" target="_blank">
                            <GrInstagram />
                        </a>   
                    </div>
                    <div className="center">
                        <span>Tom Jerry</span>
                        <div className="info">
                            <div className="item">
                                <MdLocationOn />
                                <span>India</span>
                            </div>
                            <div className="item">
                                <MdLanguage />
                                <span>tomjerry.com</span>
                            </div>
                        </div>
                        <button className="btn">Follow</button>
                    </div>
                    <div className="right">
                        <HiOutlineMail />
                        <FiMoreVertical />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile
