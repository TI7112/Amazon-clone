import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({title , children}) => {
  return (
    <>
    <Head>
        <title>{title ? title + ' | Amazon' : 'Amazon'}</title>
    </Head>
    <Header />
    <div className="bg-gray-300">{children}</div>
    </>
  )
}

export default Layout