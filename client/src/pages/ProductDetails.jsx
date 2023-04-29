import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
    const {id} = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const product = products.find((item) => {
        return item.id ===parseInt(id);
    });

    // if product is not found
    if(!product) {
        return <section className='h-screen flex justify-center items-center'>Loading...</section>
    }
    // destructure product
    const { image, description, title, price} = product;
    return (
        <section className='pt-38 pb-18 lg:py-28 h-screen flex items-center'>
        <div className='container mx-auto'>
            {/* image  & text wrapper */}
            <div className='flex flex-col lg:flex-row items-center '>
                {/* image */}
                <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                    <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
                </div>
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-[26px] font-medium mb-2 max-w-[450px] max-auto'>{title}</h1>
                    <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ProductDetails;