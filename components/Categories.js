import React from 'react'

const Categories = () => {

const Items = ({title}) => {
    return (
        <span className='hover:outline hover:outline-1 hover:duration-300 px-2 py-1 text-sm text-white   font-semibold'>{title}</span>
    )
}

  return (
    <>
        <div className="bg-slate-800 flex gap-5 py-2 justify-center">
        <Items title={'All'}/>
        <Items title={'Best Sellers'}/>
        <Items title={'Mobiles'}/>
        <Items title={"Today's Deals"}/>
        <Items title={'Customer Service'}/>
        <Items title={'Electronics'}/>
        <Items title={'Home & Kitchen'}/>
        <Items title={'Prime'}/>
        <Items title={'Fashion'}/>
        <Items title={'Books'}/>
        <Items title={'New Releases'}/>
        <Items title={'Amazon Pay'}/>
        <Items title={'Computers'}/>
        <Items title={'Coupons'}/>
        <Items title={'Toys & Games'}/>
        <Items title={'Sell'}/>
        <Items title={'Sports, Fitness & Outdoors'}/>

        </div>
        
{/* All
Best Sellers
Mobiles
Today's Deals
Customer Service
Electronics
Home & Kitchen
Prime
Fashion
Books
New Releases
Amazon Pay
Computers
Coupons
Sports, Fitness & Outdoors
Beauty & Personal Care
Sell
Toys & Games
Car & Motorbike
Gift Cards
Gift Ideas
Grocery & Gourmet Foods
Video Games
Health, Household & Personal Care
Baby
Pet Supplies
Home Improvement
Audible
AmazonBasics
Subscribe & Save
Kindle eBooks
Previous slide */}

    </>
  )
}

export default Categories


