import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer class="bg-gray-800 py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-gray-400">
                <h3 class="text-lg font-medium mb-4">Company</h3>
                <ul class="list-disc pl-4">
                <li><a href="#">About us</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div class="text-gray-400">
                <h3 class="text-lg font-medium mb-4">Products</h3>
                <ul class="list-disc pl-4">
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <li><a href="#">Product 3</a></li>
                <li><a href="#">Product 4</a></li>
                </ul>
            </div>
            <div class="text-gray-400">
                <h3 class="text-lg font-medium mb-4">Resources</h3>
                <ul class="list-disc pl-4">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Whitepapers</a></li>
                <li><a href="#">Case studies</a></li>
                <li><a href="#">Webinars</a></li>
                </ul>
            </div>
            <div class="text-gray-400">
                <h3 class="text-lg font-medium mb-4">Follow us</h3>
                <div className=''>
                <a href="https://www.facebook.com/">
                <BsFacebook className='text-2xl mb-2 text-amber-100 items-center justify-center' />
                </a>
                <a href='https://github.com/ajijulkazi'>
                <BsGithub className='text-2xl mb-2 text-amber-100 items-center justify-center' />
                </a>
                <a href='https://www.instagram.com/'>
                <BsInstagram className='text-2xl mb-2 text-amber-100 items-center justify-center' />
                </a>
                <a href='https://twitter.com/'>
                <BsTwitter className='text-2xl mb-2 text-amber-100 items-center justify-center' />
                </a>
                
                </div>
            </div>
            </div>
            <p class="mt-8 text-gray-400 text-sm text-center">
            © 2023 by Ajijul Kazi. All rights reserved.
            </p>
        </div>
    </footer>

    );
};

export default Footer;