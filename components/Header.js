import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import Categories from './Categories'

const Header = () => {
    const Menu = ({ top, bottom }) => {
        return (
            <div className="">
                <p className='text-xs text-gray-300 font-medium '>{top}</p>
                <p className='text-base font-semibold -mt-1'>{bottom}</p>
            </div>
        )
    }

    const Searcharea = () => {
        return (
            <div className="flex bg-white rounded-lg">
                <select className='rounded-l-lg w-16 px-2 border-r-2 border-gray-200 bg-gray-200 outline-none text-slate-700 font-semibold' name="" id="">
                    <option selected="selected" value="all">All</option>
                    <option value="alexa-skills">Alexa Skills</option>
                    <option value="amazon-devices">Amazon Devices</option>
                    <option value="fashion">Amazon Fashion</option>
                    <option value="amazon-pharmacy">Amazon Pharmacy</option>
                    <option value="appliances">Appliances</option>
                    <option value="mobile-apps">Apps &amp; Games</option>
                    <option value="baby">Baby</option>
                    <option value="beauty">Beauty</option>
                    <option value="stripbooks">Books</option>
                    <option value="automotive">Car &amp; Motorbike</option>
                    <option value="apparel">Clothing &amp; Accessories</option>
                    <option value="collectibles">Collectibles</option>
                    <option value="computers">Computers &amp; Accessories</option>
                    <option value="todays-deals">Deals</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="lawngarden">Garden &amp; Outdoors</option>
                    <option value="gift-cards">Gift Cards</option>
                    <option value="grocery">Grocery &amp; Gourmet Foods</option>
                    <option value="hpc">Health &amp; Personal Care</option>
                    <option value="kitchen">Home &amp; Kitchen</option>
                    <option value="industrial">Industrial &amp; Scientific</option>
                    <option value="jewelry">Jewellery</option>
                    <option value="digital-text">Kindle Store</option>
                    <option value="luggage">Luggage &amp; Bags</option>
                    <option value="luxury-beauty">Luxury Beauty</option>
                    <option value="dvd">Movies &amp; TV Shows</option>
                    <option value="popular">Music</option>
                    <option value="mi">Musical Instruments</option>
                    <option value="office-products">Office Products</option>
                    <option value="pets">Pet Supplies</option>
                    <option value="instant-video">Prime Video</option>
                    <option value="speed-store">Same-Day Delivery</option>
                    <option value="shoes">Shoes &amp; Handbags</option>
                    <option value="software">Software</option>
                    <option value="sporting">Sports, Fitness &amp; Outdoors</option>
                    <option value="specialty-aps-sns">Subscribe &amp; Save</option>
                    <option value="home-improvement">Tools &amp; Home Improvement</option>
                    <option value="toys">Toys &amp; Games</option>
                    <option value="under-ten-dollars">Under ₹500</option>
                    <option value="videogames">Video Games</option>
                    <option value="watches">Watches</option>
                </select>
                <input  className='h-10 w-[20rem] lg:w-[40rem] px-2 outline-none text-slate-800 font-medium text-lg' type="search" name="" id="" placeholder='Search...' />
                <button className='bg-yellow-500 px-4 py-2 rounded-r-lg hover:bg-yellow-600 hover:duration-500 hover:text-white text-slate-600'><GoSearch className=' w-6 h-6' /></button>
            </div>
        )
    }
    return (
        <>
            <div className="bg-slate-900 p-2 flex justify-center items-center gap-5 text-white">
                <div className="logo hover:duration-500 hover:outline hover:outline-1 p-2 flex w-fit items-end">
                    <h1 className='text-4xl font-semibold'>Amazon</h1>
                    <span className='font-semibold'>.in</span>
                </div>
                <div className="hover:duration-500 hover:outline hover:outline-1 flex gap-2 items-center p-2">
                    <HiOutlineLocationMarker />
                    <Menu top={'Hello'} bottom={'Select your Address'} />
                </div>
                <Searcharea />
                <div className="hover:duration-500 hover:outline hover:outline-1 flex items-end p-2">
                    <Menu top={'Hello, Sign in'} bottom={'Accounts & Lists'} />
                    <IoMdArrowDropdown />
                </div>
                <div className="flex items-end">
                <p className='text-base font-semibold '>EN</p>
                    <IoMdArrowDropdown />

                </div>
                <div className="hover:duration-500 hover:outline hover:outline-1 flex items-end p-2">
                    <Menu top={'Returns'} bottom={'& Orders'} />
                </div>
                <div className="hover:duration-500 hover:outline hover:outline-1 flex items-end p-2">
                    <AiOutlineShoppingCart className='w-8 h-8' />
                </div>
            </div>
            <Categories />
        </>
    )
}

export default Header