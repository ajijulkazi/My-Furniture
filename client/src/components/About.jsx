import productImg1 from '../img/product1.jpg';
import productImg2 from '../img/product2.jpg';
import productImg3 from '../img/product3.jpg';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Discover the perfect furniture for your home
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget elit eu eros blandit accumsan. Proin vel mi vitae lorem
              sagittis pellentesque a ac tellus. Sed sed enim at nulla
              condimentum gravida. Donec varius placerat metus, ac auctor lorem
              venenatis in. Etiam convallis magna sit amet velit laoreet, ut
              bibendum felis convallis.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              
                <img
                    className="h-48 w-full object-cover"
                    src={productImg1}
                    alt="Product 1"
              />
             
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Product 1</h3>
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eget elit eu eros blandit accumsan.
                </p>
                <p className="text-gray-700 font-bold">$1000</p>
                <Link to="/">
                  <button  className="bg-gray-900 text-white py-2 px-4 mt-4 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={productImg2}
                alt="Product 2"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Product 2</h3>
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eget elit eu eros blandit accumsan.
                </p>
                <p className="text-gray-700 font-bold">$1000</p>
                <Link to="/">
                  <button  className="bg-gray-900 text-white py-2 px-4 mt-4 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={productImg3}
                alt="Product 3"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Product 3</h3>
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eget elit eu eros blandit accumsan.
                </p>
                <p className="text-gray-700 font-bold">$1000</p>
                <Link to="/">
                  <button  className="bg-gray-900 text-white py-2 px-4 mt-4 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
}

export default About;
