import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineLike } from 'react-icons/ai';
import { VscComment, VscFilter } from 'react-icons/vsc';
import {SlOptionsVertical} from 'react-icons/sl';

import './streamsSection.css';

export const StreamsSection = () => {
    const myStreamData = [
        {
            author: 'Mr. Arther Christopher', time: '13', content: 'Figma is a leading design Software, helping teams and individuas create design fast.Content Reel lets you create custom content and share it with other Figma users. Collaboration has never been easier! Content: Browse or search content to find published collections of text strings, images, and icons.',
            imgUrl: "./avatars/avatar2.svg"
        },
        { author: 'BIN Group- Mr. Cloud Admin', time: '2', content: 'Figma is a leading design Software, helping teams and individuas create design fast', imgUrl: "./avatars/avatar4.svg", like:true },
        { author: 'Mr. Arther Christopher', time: '13', content: 'Figma is a leading design Software, helping teams and individuas create design fast', imgUrl: "./avatars/avatar3.svg" },
        { author: 'Mr. Arther Christopher', time: '13', content: 'Figma is a leading design Software, helping teams and individuas create design fast', imgUrl: "./avatars/avatar1.svg" },
    ]

    return (
        <div className='streamsSection'>
            <div className='stream_header'>
                <h2>My Streams</h2>
                <VscFilter size={25}/>
            </div>
            <div className='stream_content'>
                {myStreamData.map(item => {
                    return (<div className='stream_content_items'>
                        <img src={item.imgUrl} />
                        <div className='stream_item'>
                            <div className='stream_context'>
                                <div className='flex space-between'>
                                <h2>{item.author}</h2>
                                    <SlOptionsVertical/>
                                </div>
                                <p style={{ fontSize: '12px' }}>{item.time} min ago</p>
                                <p style={{ fontSize: '15px' }}>{item.content}</p>
                            </div>
                            <div className='stream_reaction'>
                                <div className='reaction'>
                                    <div className='reaction_btn flex-align-center'>
                                        <AiOutlineHeart size={20} title="Like" style={{color:item.like?'#e71a73':''}}/><span className='options_title'>{item.like? 'UnLike' : 'Like'}</span>
                                    </div>
                                    <div className='reaction_btn flex-align-center'>
                                        <VscComment size={20} title="Comment" /><span className='options_title'>Comment</span>
                                    </div>
                                    <div className='reaction_btn flex-align-center'>
                                        <AiOutlineShareAlt size={20} title="Share" />
                                    </div>
                                </div >
                                <div className='reaction_counts'>
                                    <div className='reaction_btn flex-align-center'>
                                            <AiOutlineLike size={20} title="Like" style={{backgroundColor:'#e71a73', color:'#fff', borderRadius:50, padding:2}}/><span className='options_title'>24</span>
                                        </div>
                                        <div className='reaction_btn flex-align-center'>
                                            <VscComment size={20} title="Comment" /><span className='options_title'>21 Comments</span>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}
