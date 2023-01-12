
import Link from 'next/link'
import Layout from '../components/Layout'
import { Fourgridview, Dealproductof70percentoffView } from '../components/Productview'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'


const Home = () => {
  return (
    <>
      <Layout title={'Home'} >
        <div className="px-40">
          <div className="bg-[url('https://m.media-amazon.com/images/I/91sDld9H7PL._SX3000_.jpg')] px-2 bg-cover flex justify-between h-[60vh] bg-no-repeat ">
            <button className='text-gray-300 h-56 outline-1 hover:outline focus:outline  px-2'><MdArrowBackIos className='w-10 h-10' /></button>
            <button className='text-gray-300 h-56 outline-1 hover:outline focus:outline  px-2'><MdArrowForwardIos className='w-10 h-10' /></button>
          </div>
          <div className="flex gap-5 py-5 px-4 -mt-[17rem]">
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" caption_1={'Air Conditioner'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg' caption_2={"Refrigerators"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' caption_3={'Microwaves'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' caption_4={'Washing machines'}
              title="Top picks for your home" link_title={'See more'} link_src="/"
            />
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg" caption_1={'Sofa cum beds'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg' caption_2={"Office chairs & study tables"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg' caption_3={'Bean bags'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg' caption_4={'Explore all'}
              title="Redefine your living room" link_title={'Visit our furniture store'} link_src="/"
            />
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/flight-1_186x116._SY116_CB606987228_.jpg" caption_1={'Get up to ₹2000 off on flights'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Train-2_186x116._SY116_CB606987228_.jpg' caption_2={"Zero convenience fees on train tickets"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Bus-3_186x116._SY116_CB606987228_.jpg' caption_3={'Guaranteed rewards on bus tickets'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/travel_acces-4_186x116._SY116_CB606987228_.jpg' caption_4={'Products for your travel needs'}
              title="Exclusive offers on travel tickets" link_title={'See all offers'} link_src="/"
            />


            <div className="bg-white px-4 py-2 h-fit">
              <h5 className='text-2xl font-semibold py-3'>Sign in for your best experience</h5>
              <div className="py-5">

                <button className='bg-yellow-500 text-white font-semibold w-full rounded-lg py-2  hover:bg-yellow-600'>Sign in securely</button>
              </div>
            </div>


          </div>
          <div className="flex gap-5 py-5 px-4 ">
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/flight-1_186x116._SY116_CB606987228_.jpg" caption_1={'Get up to ₹2000 off on flights'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Train-2_186x116._SY116_CB606987228_.jpg' caption_2={"Zero convenience fees on train tickets"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Bus-3_186x116._SY116_CB606987228_.jpg' caption_3={'Guaranteed rewards on bus tickets'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/travel_acces-4_186x116._SY116_CB606987228_.jpg' caption_4={'Products for your travel needs'}
              title="Exclusive offers on travel tickets" link_title={'See all offers'} link_src="/"
            />
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/flight-1_186x116._SY116_CB606987228_.jpg" caption_1={'Get up to ₹2000 off on flights'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Train-2_186x116._SY116_CB606987228_.jpg' caption_2={"Zero convenience fees on train tickets"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Bus-3_186x116._SY116_CB606987228_.jpg' caption_3={'Guaranteed rewards on bus tickets'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/travel_acces-4_186x116._SY116_CB606987228_.jpg' caption_4={'Products for your travel needs'}
              title="Exclusive offers on travel tickets" link_title={'See all offers'} link_src="/"
            />
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/flight-1_186x116._SY116_CB606987228_.jpg" caption_1={'Get up to ₹2000 off on flights'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Train-2_186x116._SY116_CB606987228_.jpg' caption_2={"Zero convenience fees on train tickets"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Bus-3_186x116._SY116_CB606987228_.jpg' caption_3={'Guaranteed rewards on bus tickets'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/travel_acces-4_186x116._SY116_CB606987228_.jpg' caption_4={'Products for your travel needs'}
              title="Exclusive offers on travel tickets" link_title={'See all offers'} link_src="/"
            />
            <Fourgridview
              img_url_1="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/flight-1_186x116._SY116_CB606987228_.jpg" caption_1={'Get up to ₹2000 off on flights'} img_url_2='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Train-2_186x116._SY116_CB606987228_.jpg' caption_2={"Zero convenience fees on train tickets"} img_url_3='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Bus-3_186x116._SY116_CB606987228_.jpg' caption_3={'Guaranteed rewards on bus tickets'} img_url_4='https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/travel_acces-4_186x116._SY116_CB606987228_.jpg' caption_4={'Products for your travel needs'}
              title="Exclusive offers on travel tickets" link_title={'See all offers'} link_src="/"
            />
          </div>
          <div className="bg-white mx-4 px-4 pb-10">
            <div className="flex gap-2 py-5 items-end">
              <h5 className='text-2xl font-semibold'>{'Today’s Deals'}</h5>
              <Link href={''} className='w-fit text-teal-600 font-semibold hover:underline hover:text-red-600'>{'See all deals'}</Link>
            </div>
            <div className="flex gap-5">
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
            </div>
          </div>
          <div className="bg-white mx-4 my-8 px-4 pb-10">
            <div className="flex gap-2 py-5 items-end">
              <h5 className='text-2xl font-semibold'>{'Exiciting Deals'}</h5>
              <Link href={''} className='w-fit text-teal-600 font-semibold hover:underline hover:text-red-600'>{'See all deals'}</Link>
            </div>
            <div className="flex gap-5">
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
              <Dealproductof70percentoffView />
            </div>
          </div>
        </div>

    </Layout>
    </>
  )
}

export default Home
