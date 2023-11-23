import React from "react";
import { aboutusContent } from "../assests/content/aboutus";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center py-[8vh]" id="aboutus">
            <div className="flex flex-col items-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw]">
                <div className="border-b-2 border-[black] px-[2vw] py-2 mb-5">
                    <p className="text-[24px] font-semibold">About Us</p>
                </div>
                <p className="text-[16px] text-center">{aboutusContent}</p>
            </div>
        </div>
    );
}

export default AboutUs;