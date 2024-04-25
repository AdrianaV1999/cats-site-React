import React, { useEffect, useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    { text1: "Cats are", text2: "so cutee!" },
    { text1: "About", text2: "them" },
    { text1: "They are", text2: " soo funny!" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
setInterval(()=> {
setHeroCount((count)=>{return count===2?0:count+1})
},3500)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
}

export default App;