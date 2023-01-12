import React from 'react'
import Link from 'next/link'

export const Fourgridview = ({ title, img_url_1, img_url_2, img_url_3, img_url_4, caption_1, caption_2, caption_3, caption_4, link_title, link_src }) => {
    return (
        <>
            <div className="bg-white px-4 py-5 w-1/4">
                <h5 className='text-2xl font-semibold pb-3'>{title}</h5>
                <div className="grid grid-cols-2 gap-4 py-2 h-[22rem]">
                    <div className="div">
                        <img className='w-60' src={img_url_1} alt="" />
                        <p className='font-semibold p-1 text-sm'>{caption_1}</p>
                    </div>
                    <div className="div">
                        <img src={img_url_2} alt="" />
                        <p className='font-semibold p-1 text-sm'>{caption_2}</p>
                    </div>
                    <div className="div">
                        <img src={img_url_3} alt="" />
                        <p className='font-semibold p-1 text-sm'>{caption_3}</p>
                    </div>
                    <div className="div">
                        <img src={img_url_4} alt="" />
                        <p className='font-semibold p-1 text-sm'>{caption_4}</p>
                    </div>
                </div>
                <Link href={link_src} className='w-fit text-teal-600 font-semibold hover:underline hover:text-red-600'>{link_title}</Link>
            </div>

            {/* useit 
            <Fourgridview 
            img_url_1="url111" caption_1={'Air Conditioner'} img_url_2='url222' caption_2={"Refrigerators"} img_url_3='url333' caption_3={'Microwaves'} img_url_4='url444' caption_4={'Washing machines'}
            title="Redefine your living room" link_title={'Visit our furniture store'} link_src="/"
            /> */}
        </>
    )
}

export const Dealproductof70percentoffView = () => {
    return (
       
            
                <div className="flex flex-col gap-4 pt-6">
                    <img className='w-60' src="https://m.media-amazon.com/images/I/31jqgWre8uL._AC_SY200_.jpg" alt="" />
                    <p className='font-semibold text-xs text-center py-2'><span className='bg-red-500 px-4 py-1 text-white'>upto 70% off</span> Deal of the Day</p>
                </div>
           

    )
}
