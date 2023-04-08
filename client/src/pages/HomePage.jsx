import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import About from '../components/About';
import Banner from '../components/Banner';
import ContactForm from './ContactFormPage';
const Homepage = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get only men's women's category
  const filteredProducts =products.filter( item => {
    return (item);
    // return  ( item.category === "men's clothing" || item.category === "women's clothing");
  });
  return (
    <div>
      <Banner/>
      <section className='py-20'>
        <div ><h1 className=' text-center pl-100 mb-4 font-semibold text-2xl'>Find Your Products</h1></div>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
              return (
                <Product product={product} key={ product.id }/>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h2 className=' text-center pl-100 mb-4 font-semibold text-2xl'>Popular Product</h2>
          </div>
          <About></About>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h2 className=' text-center pl-100 mb-4 font-semibold text-2xl'>Send Your Query</h2>
          </div>
          <ContactForm></ContactForm>
        </div>
      </section>
    </div>
  );
  }
  
  export default Homepage;
