import React from 'react'
import LavaImg from '../assets/lava_background_portrait.jpg'
import FullTurboImg from '../assets/BtB_cover_art.jpg'
import CleanHouseImg from '../assets/Clean_House.jpg'
import SpringMix24Img from '../assets/Spring24_Mix_Cover.png'
import Spring24SetlistImg from '../assets/Spring24_Mix_Setlist.png'
import TillDeathImg from '../assets/TDdUT.jpg'

import ReactPlayer from 'react-player'

const GraphicDesign = () => {
  return (
    <div id='graphicdesign' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <hr className="h-px my-8 bg-stone-200 border-1 rounded-lg dark:bg-stone-700"></hr>
        <h1 className='py-2 text-4xl font-bold text-center text-[#d269d4]'>
            Graphic Design
        </h1>
        <p className='text-center italic text-stone-300 pb-8 py-4'>
            Presented is a collection of cover art I have designed for events and mixes in Photoshop.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <img className="max-h-screen w-full rounded-lg" src={LavaImg} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={CleanHouseImg} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={FullTurboImg} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={TillDeathImg} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={SpringMix24Img} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={Spring24SetlistImg} alt=""/>
            </div>
        </div>
        {/* <div className='bg-black'>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" style={{backgroundColor: "black"}}
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/render_loop&color=c531c8&show_playcount=false">
            </iframe>
        </div> */}

        <div className='pt-8 overflow-hidden'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" className='rounded-lg opacity-85'
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/render_loop&color=c531c8&show_playcount=false">
            </iframe>          
        </div>

    </div>
  )
}

export default GraphicDesign

{/* <div style={{fontSize: 10, color: '#cccccc', lineBreak: anywhere, wordBreak: normal, overflow: hidden, whiteSpace: 
    nowrap, textOverflow: ellipsis, fontFamily: Interstate,LucidaGrande,LucidaSansUnicode,LucidaSans,Garuda,Verdana,Tahoma, fontWeight: 100}}>
<a href="https://soundcloud.com/render_loop" title="renderLoop_" target="_blank" style={{color: '#cccccc'}}>
renderLoop_</a> · 
<a href="https://soundcloud.com/render_loop/spring-mix-24" title="Spring Mix &#x27;24" target="_blank" style="color: #cccccc; text-decoration: none;">
Spring Mix &#x27;24
</a>
</div> */}

        {/* <div className='relative flex items-center justify-center rounded-lg overflow-hidden pt-8  border-8'>
            <ReactPlayer
            url="https://soundcloud.com/render_loop/spring-mix-24"
            width="100%"
            height="100%"
            config={{
                soundcloud: {
                    options: {
                        color: "#C531C8",
                        sharing: false
                    }
                }
            }}
            />
        </div> */}