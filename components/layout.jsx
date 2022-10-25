import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
   
      <title>
     No Gift For You
      </title>
      </Head>
    <header>
    <Navbar />
    </header>
    <main className='main-container'>
   {children}
    </main>
   <footer> 
    <Footer />
   </footer>
    </div>
  )
}

export default layout