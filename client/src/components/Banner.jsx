import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const banners = [
    {
      id: 1,
      title: 'Banner 1',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80',
    },
    {
      id: 2,
      title: 'Banner 2',
      image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 3,
      title: 'Banner 3',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <Slider {...settings}>
      {banners.map((banner) => (
        <div key={banner.id}>
          <div
            className="bg-center bg-cover h-80 sm:h-96"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            {/* <h1 className="text-4xl text-white font-bold py-8">{banner.title}</h1> */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;




// import React from 'react';
// import productImg from '../img/product1.jpg';
// const Banner = () => {
//     return (
//         <section className=' bg-pink-200 h-full bg-hero'>
//             <div className="container max-auto flex justify-around h-full">
//                 <div className="flex">
//                     <div>
//                         <div className=' mt-48 pl-10'>New Trend</div>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={productImg} alt=''/>
//                 </div>
//                 <div>
//                         <div className=' mt-48'>Coming Soon...</div>
//                     </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;