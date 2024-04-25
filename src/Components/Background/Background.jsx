import React from 'react'
import './Background.css'
import cici from '../../assets/cici.mp4'
import cat1 from '../../assets/cat1.jpg'
import cat2 from '../../assets/cat2.jpg'
import cat3 from '../../assets/cat3.jpg'

const Background = ({playStatus,heroCount}) => {
  
    if (playStatus) {
        return (
            <video className='backgrund' autoPlay loop muted style={{ width: '100vw', height: 'auto' }}>
            <source src={cici} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount==0){
        return <img src={cat3} className='backgrund fade-in' style={{ width: '100vw', height: 'auto' }} alt="" />;

    }
    else if(heroCount==1){
        return <img src={cat2} className='backgrund fade-in' style={{ width: '100vw', height: 'auto' }} alt="" />;
        
    }
    else if(heroCount==2){
        return <img src={cat1} className='backgrund fade-in' style={{ width: '100vw', height: 'auto' }} alt="" />;
        
    }
}

export default Background
