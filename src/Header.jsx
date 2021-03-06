import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header(){
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linked-in-logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>    
            </div>
            <div className="header__right">
                <HeaderOptions Icon = {HomeIcon} title='Home' />
                <HeaderOptions Icon = {SupervisorAccountIcon} title='My Network' />   
                <HeaderOptions Icon = {BusinessCenterIcon} title='Jobs' /> 
                <HeaderOptions Icon = {ChatIcon} title='Messaging' />
                <HeaderOptions Icon = {NotificationsIcon} title='Notifications' />
                <HeaderOptions avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNH4yV8JgBa6G2XMCXzDJB6zP2edr2_VYPEp3QIkGLaUbswx_K5agwBAGP-zAowzoerw&usqp=CAU" title='Me' />
            </div>    
        </div>
    );
}

export default Header;