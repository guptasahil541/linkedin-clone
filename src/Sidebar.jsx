import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './Sidebar.css';

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>  
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1646538230367-ad94dbb809a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="profile_background_img" />
        <Avatar className="sidebar__avatar"/>
        <h2>Sahil Gupta</h2>
        <h4>guptasahil541@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2313</p>    
        </div>    
        <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2552</p>    
        </div>    
      </div>
      <div className="sidebar__bottom">
            <p>Recent</p>  
            {recentItem('programming')}  
            {recentItem('developer')}  
            {recentItem('engineering')}  
            {recentItem('optimisation')}  
            {recentItem('ui/ux')}  
      </div>
    </div>
  );
}

export default Sidebar;
