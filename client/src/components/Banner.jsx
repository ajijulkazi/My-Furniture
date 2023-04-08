import React from 'react';
import productImg from '../img/product1.jpg';
const Banner = () => {
    return (
        <section className=' bg-pink-200 h-full bg-hero'>
            <div className="container max-auto flex justify-around h-full">
                <div className="flex">
                    <div>
                        <div className=' mt-48 pl-10'>New Trend</div>
                    </div>
                </div>
                <div>
                    <img src={productImg} alt=''/>
                </div>
                <div>
                        <div className=' mt-48'>Coming Soon...</div>
                    </div>
            </div>
        </section>
    );
};

export default Banner;