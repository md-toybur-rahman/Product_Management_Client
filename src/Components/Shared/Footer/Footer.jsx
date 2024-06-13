import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-20 px-5">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14">
                <div className="md:w-[280px]">
                    <h1 className="text-2xl font-black mb-4">Untitled Store</h1>
                    <p className="text-base text-[#898AA8]">
                        Themes that are made on top of WordPress & Elementor to give you the best experience on drag & drop website building
                    </p>
                </div>
                <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-14 md:justify-between">
                    <div>
                        <h1 className="text-base font-semibold">Untitled</h1>
                        <ul className="text-[#797A9C] text-base flex flex-col gap-4 mt-6">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Support Hub</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-base font-semibold">Our Products</h1>
                        <ul className="text-[#797A9C] text-base flex flex-col gap-4 mt-6">
                            <li><a href="#">Figma Template</a></li>
                            <li><a href="#">WordPress</a></li>
                            <li><a href="#">Html?Css</a></li>
                            <li><a href="#">React</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-base font-semibold mb-6">Follow Us</h1>
                        <div className="flex items-center gap-4">
                            <a href="#"><img src="https://i.ibb.co/jzXzRMX/Facebook-1.pn" alt="Facebook" /></a>
                            <a href="#"><img src="https://i.ibb.co/SJYTfkR/twitter.png" alt="Twitter" /></a>
                            <a href="#"><img src="https://i.ibb.co/yNJM7yX/instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="https://i.ibb.co/QvwGQxk/linkedin-1.png" alt="LinkedIn" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base text-[#8182A2] border-t mt-6 md:mt-[56px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 py-4">
                <div>
                    <h1>@2020 Untitled. All Rights Reserved.</h1>
                </div>
                <div className="flex gap-6">
                    <a href="#"><h1>Privacy Policy</h1></a>
                    <a href="#"><h1>Terms of Use</h1></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
