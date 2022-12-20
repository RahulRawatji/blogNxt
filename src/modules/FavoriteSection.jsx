import React from 'react';

import Button from '../components/Button';

import './favoriteSection.css';

const FavoriteSection = () => {

  const favLinksData = [
    {author:'Mr. Athur Christopher', linkName:'Testing Link Name', context:'Figma is leading design Software, helping everyone in designing UI', link:'https://gag.businessHappened.com', time:'11/12/22'},
    {author:'Mr. Josh Christ', linkName:'Testing Link Name', context:'Figma is leading design Software, helping everyone in designing UI', link:'https://gag.businessHappened.com', time:'11/12/22'},
    {author:'Mr. Shawn Luther', linkName:'Testing Link Name', context:'Figma is leading design Software, helping everyone in designing UI', link:'https://gag.businessHappened.com', time:'11/12/22'},
    
  ];

  const favFilesData = [];

  return (
    <div className='favorite_section'>
        <div className='favorite_header'>
            <div className='header_title'>
                <Button className='fav_btn' fontSize="16px" title="Favorite Links"/>
            </div>
            <div className='header_title'>
                <Button className='fav_btn' fontSize="16px" title='Favorite Files' />
            </div>
        </div>
        <div className='favorite_content'>
          {favLinksData.map(item=>{
            return(
              <div className='fav_content_item'>
                <div className='flex space-between'>
                <h3 className='font-black font-md'>{item.author}</h3>
                <p className='font-sm '>{item.time}</p>
                </div>
                <p className='font-sm font-black bold'>{item.linkName}</p>
                <p className='font-sm'>{item.context}</p>
                <a href={item.link} className='font-sm'>{item.link}</a>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default FavoriteSection