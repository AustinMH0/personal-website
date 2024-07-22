import React from 'react'
import LavaImg from '../assets/lava_background_portrait.jpg'
import FullTurboImg from '../assets/BtB_cover_art.jpg'
import CleanHouseImg from '../assets/Clean_House.jpg'
import SpringMix24Img from '../assets/Spring24_Mix_Cover.png'
import Spring24SetlistImg from '../assets/Spring24_Mix_Setlist.png'
import TillDeathImg from '../assets/TDdUT.jpg'

const GraphicDesign = () => {
  return (
    <div id='graphicdesign' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <hr className="h-px my-8 bg-stone-200 border-1 rounded-lg dark:bg-stone-700"></hr>
        <h1 className='py-2 text-4xl font-bold text-center text-[#d269d4]'>
            Graphic Design
        </h1>
        <p className='text-center italic text-stone-300 pb-8 py-4'>
            Presented is a collection of cover art I have designed in Photoshop.
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


    </div>
  )
}

export default GraphicDesign