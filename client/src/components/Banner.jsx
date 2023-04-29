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
    {
        id: 4,
        title: 'Banner 4',
        image: 'https://media.istockphoto.com/id/1206743625/photo/coming-soon.jpg?s=1024x1024&w=is&k=20&c=zoqhJ57mdAVzV8Ijg6bT-NCR8Kz09lt4nTsSV7ollpw=',
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
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;