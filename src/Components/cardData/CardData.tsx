// import React from 'react';
// import cardsData from '@/app/Data/CardData';
// import RoundCornerWrapper from '@/Components/RoundCornerWrapper';

// function CardData() {
//     return (
//         <div className="p-4 sm:p-6 md:p-8">
//             {/* This container is now a grid on all screens,
//               with the number of columns changing based on screen size.
//             */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {cardsData.map((card, index) => (
//                     // The wrapper now has a min-w-0 to prevent it from forcing a scroll
//                     <div key={index} className='min-w-0'>
//                         <RoundCornerWrapper>
//                             <div className="p-6">
//                                 {/* Using the correct image path and alt text */}
//                                 <img src={card.image} alt={card.title} className="w-12 h-12 mb-4" />
//                                 <h3 className="text-xl mt-6">{card.title}</h3>
//                                 <p className="mt-2 text-sm">{card.description}</p>
//                             </div>
//                         </RoundCornerWrapper>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default CardData;

'use client';

import React, { useState, useEffect } from 'react';
import cardsData from '@/app/Data/CardData';
import RoundCornerWrapper from '@/Components/RoundCornerWrapper';

// Component for the mobile/small screen horizontal scroll layout
const MobileCards = () => (
    <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden p-1 m-[-5px]">
        {cardsData.map((card, index) => (
            <div key={index} className='min-w-[300px] max-w-[300px] shrink-0'>
                <RoundCornerWrapper>
                    <div className="p-6 min-h-[400px]">
                    <div className='my-2 mb-14 flex items-center'>
                            <div className='w-2 h-2 rounded-full bg-[#F8F8F880] mr-2'></div>
                        <p className='text-[#F8F8F880]'>0{index+1}</p>

                        </div>
                        <img src={card.image} alt={card.title} className="w-[70px] h-[70px] mb-12" />
                        <h3 className="text-xl mt-6 text-[#F8F8F8F2]">{card.title}</h3>
                        <p className="mt-2 text-[18px] text-[#F8F8F880]">{card.description}</p>
                    </div>
                </RoundCornerWrapper>
            </div>
        ))}
    </div>
);

// Component for the large screen grid layout
const LargeScreenCards = () => (
    <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 ">
        {cardsData.map((card, index) => (
            <div key={index}>
                <RoundCornerWrapper>
                    <div className="p-5 min-h-[400px]">
                        <div className='my-2 mb-14 flex items-center'>
                            <div className='w-2 h-2 rounded-full bg-[#F8F8F880] mr-2'></div>
                        <p className='text-[#F8F8F880]'>0{index+1}</p>

                        </div>
                        <img src={card.image} alt={card.title} className="w-[70px] h-[70px] mb-12" />
                        <h3 className="text-xl mt-6 text-[#F8F8F8F2]">{card.title}</h3>
                        <p className="mt-2 text-[18px] text-[#F8F8F880]">{card.description}</p>
                    </div>
                </RoundCornerWrapper>
            </div>
        ))}
    </div>
);

// Main component that switches between the two layouts
function CardData() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // This is a common way to check for a mobile breakpoint in JS.
            // Tailwind's 'lg' breakpoint is 1024px.
            setIsMobile(window.innerWidth < 700);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="">
            {isMobile ? <MobileCards /> : <LargeScreenCards />}
        </div>
    );
}

export default CardData;