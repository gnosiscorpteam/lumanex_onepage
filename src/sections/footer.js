import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (
        <div className="flex flex-col items-center pt-[6vh] pb-[4vh] bg-[#002B3D]">
            <div className="flex flex-col items-center max-w-[60vw]">
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <img className="h-[50px] cursor-pointer" src="./assests/bug.png" />
                </Link>
                <div className="flex justify-center py-8">
                    <div className="w-[70vw] lg:w-[50vw] grid grid-cols-2 sm:grid-cols-4 gap-[2vw] text-white font-semibold">
                        <Link
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <p className="text-center cursor-pointer">Home</p>
                        </Link>
                        <Link
                            activeClass="active"
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <p className="text-center cursor-pointer">About Us</p>
                        </Link>
                        <Link
                            activeClass="active"
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <p className="text-center cursor-pointer">Gallery</p>
                        </Link>
                        <Link
                            activeClass="active"
                            to="contactus"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <p className="text-center cursor-pointer">Contact US</p>
                        </Link>
                    </div>
                </div>
                <p className="text-center text-white text-[12px]">COPYRIGHT © 2023 LUMANEX GROUP - SUPPORT@LUMANEXGROUP.COM</p>
            </div>
        </div>
    );
}

export default Footer;