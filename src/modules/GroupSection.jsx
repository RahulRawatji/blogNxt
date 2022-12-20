import React from 'react';
import Button from '../components/Button';

import {MdAddBox} from 'react-icons/md';

import './groupSection.css';

const GroupSection = () => {
    const groupData = [
        {title:'Sales & Marketing', numberOfPeople:21, imgUrl:"./avatars/avatar2.svg"},
        {title:'Product Development Group', numberOfPeople:24, imgUrl:"./avatars/avatar3.svg"},
        {title:'People & Culture', numberOfPeople:11, imgUrl:"./avatars/avatar4.svg"},
        {title:'Angry Birds', numberOfPeople:51, imgUrl:"./avatars/avatar5.svg"},
        {title:'Sales & Marketing', numberOfPeople:21, imgUrl:"./avatars/avatar2.svg"},
        {title:'Product Development Group', numberOfPeople:24, imgUrl:"./avatars/avatar3.svg"},
        {title:'People & Culture', numberOfPeople:11, imgUrl:"./avatars/avatar4.svg"},
    ]
  return (
    <div className='group_section'>
        <div className='group_header'>
        <h2>Group & Follower Details</h2>
        <div className='flex mt-3 wrap'>
            <Button className="grp_btn" title='Groups' bgColor="#e71a73" color="#fff"/>
            <Button className="grp_btn" title='Following' bgColor="#fff" color="#6e6e70" border="1px solid"/>
            <Button className="grp_btn"title='Followers' bgColor="#fff" color="#6e6e70" border="1px solid"/>
        </div>
        </div>
        <div className='group_search_box'>
                <input placeholder='Search' style={{width:'90%'}}/><MdAddBox size={35}/>
        </div>
        <div className='list_container'>
            {groupData.map(data=>{
                return (<div className='group_list'>
                    <img className="group_list_avatar" src={data.imgUrl}/>
                    <div className='group_list_content'>
                        <h4>{data.title}</h4>
                        <p>{data.numberOfPeople} people in group</p>
                    </div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default GroupSection