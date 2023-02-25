import React from 'react';
import "./leftbar.scss";
import {FcCollaboration,FcConferenceCall, FcShop, FcClapperboard, FcClock, FcCalendar, FcCamcorderPro, FcSms, FcCustomerSupport, FcGallery, FcSelfServiceKiosk, FcReading, FcDebt} from "react-icons/fc"
import user from '../../constants';

const Leftbar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img className="userImg" src={user.img} alt="user" height="30px"/>
                        <span>{user.name}</span>
                    </div>
                    <div className="item">
                        <FcCollaboration className="itemIcon" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <FcConferenceCall className="itemIcon" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <FcShop className="itemIcon" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <FcClapperboard className="itemIcon" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <FcClock className="itemIcon" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span className="menuTitle">Your shortcuts</span>
                    <div className="item">
                        <FcCalendar className="itemIcon" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <FcCustomerSupport className="itemIcon" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <FcGallery className="itemIcon" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <FcCamcorderPro className="itemIcon" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <FcSms className="itemIcon" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>

                <div className="menu">
                    <span className="menuTitle">Others</span>
                    <div className="item">
                        <FcDebt className="itemIcon" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <FcSelfServiceKiosk className="itemIcon" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <FcReading className="itemIcon" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Leftbar
