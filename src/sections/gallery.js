import React from "react";
import { networkContent, peaceContent, performanceContent, remodelingContent, roofingContent, solarContent } from "../assests/content/gallery";

const Gallery = () => {
    return (
        <div className="flex justify-center py-[8vh] bg-[#EFEFEF]" id="gallery">
            <div className=" max-w-[90vw] xl:max-w-[80vw] 2xl:max-w-[60vw]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1vw]">
                    <div>
                        <div className="min-h-[40vh]">
                            <img src="./assests/5.png" className="h-[25vh] w-full object-cover" />
                            <p className="text-[14px] py-4">{roofingContent}</p>
                        </div>
                        <div className="h-[65vh]">
                            <div className="relative">
                                <img src="./assests/4.png" className="h-[45vh] w-full object-cover" />
                                <img src="./assests/trusti.png" className="absolute top-[3vh] left-[2vh] w-[100px]" />
                            </div>
                            <p className="pt-4">
                                <span className="text-[14px]">{peaceContent}<span> Visit Trusti at </span><a href="https://www.gotrusti.com" className="text-[blue]" target="_blank">www.gotrusti.com</a><span> to learn more!</span></span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="h-[65vh]">
                            <img src="./assests/3.png" className="h-[45vh] w-full object-cover" />
                            <p className="text-[14px] py-4">{solarContent}</p>
                        </div>
                        <div className="min-h-[40vh]">
                            <img src="./assests/2.png" className="h-[25vh] w-full object-cover" />
                            <p className="text-[14px] py-4">{remodelingContent}</p>
                        </div>
                    </div>
                    <div className="block sm:hidden lg:block">
                        <div className="min-h-[40vh]">
                            <img src="./assests/performance.png" className="h-[25vh] w-full object-cover" />
                            <p className="text-[14px] py-4">{performanceContent}</p>
                        </div>
                        <div className="h-[65vh]">
                            <img src="./assests/services.png" className="h-[45vh] w-full object-cover" />
                            <p className="text-[14px] py-4">{networkContent}</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:flex lg:hidden gap-[1vw] pt-[1vw]">
                    <div className="min-h-[40vh]">
                        <img src="./assests/performance.png" className="h-[25vh] w-full object-cover" />
                        <p className="text-[14px] py-4">{performanceContent}</p>
                    </div>
                    <div className="h-[40vh]">
                        <img src="./assests/services.png" className="h-[25vh] w-full object-cover" />
                        <p className="text-[14px] py-4">{networkContent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;