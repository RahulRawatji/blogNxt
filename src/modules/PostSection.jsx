import React from 'react';
import Button from '../components/Button';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { IoLinkOutline } from "react-icons/io5";
import { BiCloudUpload, BiTask } from 'react-icons/bi';

import InputField from '../components/InputField';

import './postSection.css';

const PostSection = () => {
    return (
        <div className='post_section'>
            <form className='post_form'>
                <InputField title="Link URL" placeholder="Enter Url" />
                <InputField title="Link Name" placeholder="Enter Display Name" />
                <textarea id="description" placeholder="Description" rows={10} />
                <div className='radio_btn'>
                    <div className='flex font-sm'>
                        <input type="radio" id="all" name="public" value="pubkic" />
                        <label for="all">Visible to all</label>
                    </div>
                    <div className='flex font-sm'>
                        <input type="radio" id="private" name="private" value="private" />
                        <label for="private">Private</label>
                    </div>
                </div>
                <div className='post_buttons'>
                    <ul className='post_options'>
                        <li className='flex-align-center'><MdOutlineAddCircleOutline size={25} color="#76b3e7" /><span className='options_title'>Post</span></li>
                        <li className='flex-align-center'><IoLinkOutline size={25} color="#76b3e7" /><span className='options_title'>Links</span></li>
                        <li className='flex-align-center'><BiCloudUpload size={25} color="#76b3e7" /><span className='options_title'>Image/File Upload</span></li>
                        <li className='flex-align-center'><BiTask size={25} color="#76b3e7" /><span className='options_title'>Task</span></li>
                    </ul>
                    <div>
                        <Button className="post_btn" title='Post' bgColor="#373737" color="#fff" fontSize='17px' padding="8px 25px" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostSection;