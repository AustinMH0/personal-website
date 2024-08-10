import React from 'react'
import LavaImg from '../assets/lava_background_portrait.jpg'
import FullTurboImg from '../assets/BtB_cover_art.jpg'
import CleanHouseImg from '../assets/Clean_House.jpg'
import SpringMix24Img from '../assets/Spring24_Mix_Cover.png'
import Spring24SetlistImg from '../assets/Spring24_Mix_Setlist.png'
import TillDeathImg from '../assets/TDdUT.jpg'
import SummerMix24Img from '../assets/Summer_Mix_2024_Cover.jpg'
import Summer24SetlistImg from '../assets/Summer_Mix_2024_Setlist.jpg'


const GraphicDesign = () => {
  return (
    <div id='graphicdesign' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-2 text-4xl font-bold text-center text-[#d269d4]'>
            Graphic Design
        </h1>
        <p className='text-center italic text-stone-300 pb-8 py-4'>
            Presented is a collection of cover art I have designed for events and mixes in Photoshop.
        </p>
        <div className="relative flex-col overflow-hidden items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <img className="flex-1 w-full max-h-screen object-cover rounded-lg shadow-md shadow-[#211721]" src={LavaImg} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={CleanHouseImg} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={FullTurboImg} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={TillDeathImg} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={SpringMix24Img} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={Spring24SetlistImg} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={SummerMix24Img} alt=""/>
            </div>
            <div>
                <img className="flex-1 w-full h-full object-cover rounded-lg shadow-md shadow-[#211721]" src={Summer24SetlistImg} alt=""/>
            </div>
        </div>

        <div className='pt-8 overflow-hidden'>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" className='rounded-lg opacity-85'
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