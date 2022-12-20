import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProfileSection } from './modules/ProfileSection';
import PostSection from './modules/PostSection';
import GroupSection from './modules/GroupSection';
import FavoriteSection from './modules/FavoriteSection';
import { StreamsSection } from './modules/StreamsSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Pulse</h1>
      <div className='main'>
        <div className='left_col'>
          <ProfileSection/>
          <GroupSection/>
          <FavoriteSection/>
        </div>
        <div className='right_col'>
          <PostSection/>
          <StreamsSection/>
        </div>
      </div>
    </div>
  )
}

export default App
