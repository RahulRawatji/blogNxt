import React from 'react';
import Button from '../components/Button';
import { BiGroup, BiUser } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import './profileSection.css';

export const ProfileSection = () => {
  return (
    <div className='profile_section'>
        <div className='profile_header'>
          <img src="./avatars/avatar1.svg"/>
          <div className='header_content'>
              <h2 className='font-black'>Mr. Arther Christopher</h2>
              <p className='font-sm'>Acides Solutions PVT LTD <AiOutlineInfoCircle color='black' title='info'/></p>
              <div className='header_btn'>
                <Button title='34 Following' fontSize=".65rem"/>
                <Button title='84 Followers' fontSize=".65rem"/>
                <Button title='0 Groups' fontSize=".65rem"/>
              </div>
          </div>
        </div>
        <div className='profile_footer'>
        <Button
            title='Groups'
            icon={<BiGroup size={'21'}/>}
            color="#e71a73"
            className ="profile_btn"
            />
             <Button
             title='Manage Users'
            icon={<BiUser size={'21'}/>}
            className ="profile_btn"
            />
        </div>
    </div>
  )
}
