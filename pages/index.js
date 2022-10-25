import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData }) => {
  return (
   <>
   <div className='about-heading'>
  <h2>We deliver a personal gift.</h2>
  <p>Sometimes you need a little you time. But how do you get the rest you so much deserve. We are here to help you get the rest or entertainment you deserve.</p>
    </div>
   <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
   <div className='products-heading'>
    <h2>Best received products</h2>
    <p>We are the shop with stuff you want, but never buy.</p>
   </div>
   
   
   <div className='products-container'>
    {products?.map((product) => <Product key={product.id} product={product}/>)
    }
    </div>

    <FooterBanner FooterBanner={bannerData && bannerData[0]}/>
   </>
  ) 
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch
  (bannerQuery);

  return {
    props: { products, bannerData}
  } 
}

export default Home 