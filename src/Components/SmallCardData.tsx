// import React from 'react';
// import RoundCornerWrapper from '@/Components/RoundCornerWrapper';

// const SmallCardData = () => {
//     // Custom colors and border styles
//     const firstCardBg = 'bg-[#D4541DF2]';
//     const otherCardBg = 'bg-[#F8F8F805]';
//     const textColor = 'text-[#F8F8F8]';

//     // The border-image style, formatted for inline CSS in React
//     const borderStyle = {
//         border: '1px solid',
//         borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
//         borderImageSlice: 1
//     };
    
//     // Card data array to use for rendering
//     const cards = [
//         {
//             id: '• 01',
//             heading: 'You first',
//             description: "We're here for your vision. With teamwork, we'll make it real.",
//             isTall: true,
//             isOrange: true,
//             topBorder: true,
//             bottomBorder: true,
//         },
//         {
//             id: '• 02',
//             heading: 'Cutting edge',
//             description: "We use the latest tech to create solutions that grow and evolve.",
//             isTall: false,
//             isOrange: false,
//             topBorder: true,
//             bottomBorder: true,
//         },
//         {
//             id: '• 03',
//             heading: 'Hide nothing',
//             description: "To us, transparency means you're part of our team's journey",
//             isTall: false,
//             isOrange: false,
//             topBorder: true,
//             bottomBorder: true,
//         },
//         {
//             id: '• 04',
//             heading: 'Fresh angles',
//             description: "We inspire through exploration, adaptation and curiosity",
//             isTall: true,
//             isOrange: false,
//             topBorder: true,
//             bottomBorder: true,
//         },
//     ];

//     // Define the props interface for the NewRoundCornerWrapper
//     interface NewRoundCornerWrapperProps {
//         children: React.ReactNode;
//         topBorder?: boolean;
//         bottomBorder?: boolean;
//     }

//     // This is a new, simplified RoundCornerWrapper that uses a different approach.
//     const NewRoundCornerWrapper: React.FC<NewRoundCornerWrapperProps> = ({ children, topBorder = true, bottomBorder = true }) => {
//         // A helper function to create the correct rounded border style
//         const getCardStyle = () => {
//             const style = {
//                 // The border-image property is what creates the gradient effect
//                 borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
//                 borderImageSlice: 1,
//             };
//             return style;
//         }

//         // The key to fixing the border-radius issue is using a wrapper with the gradient
//         // and an inner div with a solid background and padding to create the border effect.
//         return (
//             <div className="relative p-[1px] rounded-[32px] overflow-hidden" style={{ ...getCardStyle(), border: '1px solid transparent' }}>
//                 <div className="relative z-10 w-full h-full rounded-[32px] p-5">
//                     {children}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="w-[100%] ">
//             {/* Horizontal scroll on small screens */}
//             <div className='flex flex-nowrap overflow-x-auto lg:hidden p-1 m-[-5px]'>
//                 {cards.map((card, index) => (
//                     <div key={index} className='shrink-0'>
//                       <RoundCornerWrapper>
//                         <NewRoundCornerWrapper>
//                             <div
//                                 className={`
//                                     p-5 rounded-[32px]
//                                     h-[286px] w-[247px]
//                                     ${card.isOrange ? firstCardBg : otherCardBg}
//                                 `}
//                             >
//                                 <span className={`${textColor}`}>{card.id}</span>
//                                 <h2 className={`pt-5 text-2xl mb-2 mt-10 ${textColor}`}>{card.heading}</h2>
//                                 <p className={`${"w-[180px]"} ${textColor}`}>{card.description}</p>
//                             </div>
//                         </NewRoundCornerWrapper>
//                         </RoundCornerWrapper>
//                     </div>
//                 ))}
//             </div>

//             {/* Two-column layout on large screens */}
//             <div className='hidden lg:flex lg:justify-center'>
//                 {/* Column 1: Card 1 and Card 3 */}
//                 <div className='flex flex-col'>
//                     <div key='0'>
//                     <RoundCornerWrapper>
//                         <NewRoundCornerWrapper topBorder={true} bottomBorder={false}>
//                             <div
//                                 className={`
//                                     p-5 rounded-[32px]
//                                     h-[386px] w-[347px]
//                                     ${firstCardBg}
//                                 `}
//                             >
//                                 <span className={`${textColor}`}>• 01</span>
//                                 <h2 className={`pt-15 text-2xl mb-2 mt-22 ${textColor}`}>You first</h2>
//                                 <p className={`${"w-[180px]"} ${textColor}`}>We're here for your vision. With teamwork, we'll make it real.</p>
//                             </div>
//                         </NewRoundCornerWrapper>
//                         </RoundCornerWrapper>
//                     </div>
//                     <div key='2'>
//                     <RoundCornerWrapper top={false}>
//                         <NewRoundCornerWrapper topBorder={false} bottomBorder={true}>
//                             <div
//                                 className={`
//                                     p-5 rounded-[32px]
//                                     h-[285px] w-[347px]
//                                     ${otherCardBg}
//                                 `}
//                             >
//                                 <span className={`${textColor}`}>• 03</span>
//                                 <h2 className={`pt-15 text-2xl mb-2 mt-10 ${textColor}`}>Hide nothing</h2>
//                                 <p className={`${"w-[180px]"} ${textColor}`}>To us, transparency means you're part of our team's journey</p>
//                             </div>
//                         </NewRoundCornerWrapper>
//                         </RoundCornerWrapper>
//                     </div>
//                 </div>

//                 {/* Column 2: Card 2 and Card 4 */}
//                 <div className='flex flex-col'>
//                     <div key='1'>
//                     <RoundCornerWrapper>
//                         <NewRoundCornerWrapper topBorder={true} bottomBorder={false}>
//                             <div
//                                 className={`
//                                     p-5 rounded-[32px]
//                                     h-[285px] w-[347px]
//                                     ${otherCardBg}
//                                 `}
//                             >
//                                 <span className={`${textColor}`}>• 02</span>
//                                 <h2 className={`pt-15 text-2xl mb-2 mt-10 ${textColor}`}>Cutting edge</h2>
//                                 <p className={`${"w-[170px]"} ${textColor}`}>We use the latest tech to create solutions that grow and evolve.</p>
//                             </div>
//                         </NewRoundCornerWrapper>
//                         </RoundCornerWrapper>
//                     </div>
//                     <div key='3'>
//                     <RoundCornerWrapper top={false}>
//                         <NewRoundCornerWrapper topBorder={false} bottomBorder={true}>
//                             <div
//                                 className={`
//                                     p-5 rounded-[32px]
//                                     h-[386px] w-[347px]
//                                     ${otherCardBg}
//                                 `}
//                             >
//                                 <span className={`${textColor}`}>• 04</span>
//                                 <h2 className={`pt-15 text-2xl mb-2 mt-10 ${textColor}`}>Fresh angles</h2>
//                                 <p className={`${"w-[180px]"} ${textColor}`}>We inspire through exploration, adaptation and curiosity</p>
//                             </div>
//                         </NewRoundCornerWrapper>
//                         </RoundCornerWrapper>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SmallCardData;




















import React from 'react';
import RoundCornerWrapper from '@/Components/RoundCornerWrapper';

const SmallCardData = () => {
    // Custom colors and border styles
    const firstCardBg = 'bg-[#D4541DF2]';
    const otherCardBg = 'bg-[#F8F8F805]';
    const textColor = 'text-[#F8F8F8]';

    // The border-image style, formatted for inline CSS in React
    const borderStyle = {
        border: '1px solid',
        borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
        borderImageSlice: 1
    };
    
    // Card data array to use for rendering
    const cards = [
        {
            id: '• 01',
            heading: 'You first',
            description: "We're here for your vision. With teamwork, we'll make it real.",
            isTall: true,
            isOrange: true,
            topBorder: true,
            bottomBorder: true,
        },
        {
            id: '• 02',
            heading: 'Cutting edge',
            description: "We use the latest tech to create solutions that grow and evolve.",
            isTall: false,
            isOrange: false,
            topBorder: true,
            bottomBorder: true,
        },
        {
            id: '• 03',
            heading: 'Hide nothing',
            description: "To us, transparency means you're part of our team's journey",
            isTall: false,
            isOrange: false,
            topBorder: true,
            bottomBorder: true,
        },
        {
            id: '• 04',
            heading: 'Fresh angles',
            description: "We inspire through exploration, adaptation and curiosity",
            isTall: true,
            isOrange: false,
            topBorder: true,
            bottomBorder: true,
        },
    ];

    // Define the props interface for the NewRoundCornerWrapper
    interface NewRoundCornerWrapperProps {
        children: React.ReactNode;
        topBorder?: boolean;
        bottomBorder?: boolean;
    }

    // This is a new, simplified RoundCornerWrapper that uses a different approach.
    const NewRoundCornerWrapper: React.FC<NewRoundCornerWrapperProps> = ({ children, topBorder = true, bottomBorder = true }) => {
        // A helper function to create the correct rounded border style
        const getCardStyle = () => {
            const style = {
                // The border-image property is what creates the gradient effect
                borderImageSource: 'linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)',
                borderImageSlice: 1,
            };
            return style;
        }

        // The key to fixing the border-radius issue is using a wrapper with the gradient
        // and an inner div with a solid background and padding to create the border effect.
        return (
            <div className="relative p-[1px] rounded-[32px] overflow-hidden" style={{ ...getCardStyle(), border: '1px solid transparent' }}>
                <div className="relative z-10 w-full h-full rounded-[32px] p-5">
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full">
            {/* Horizontal scroll on small screens */}
            <div className='flex flex-nowrap overflow-x-auto lg:hidden p-1 m-[-5px]'>
                {cards.map((card, index) => (
                    <div key={index} className='shrink-0'>
                      <RoundCornerWrapper>
                        <NewRoundCornerWrapper>
                            <div
                                className={`
                                    p-5 rounded-[32px]
                                    h-[286px] w-[247px]
                                    ${card.isOrange ? firstCardBg : otherCardBg}
                                `}
                            >
                                <span className={`${textColor}`}>{card.id}</span>
                                <h2 className={`pt-5 text-2xl mb-2 mt-10 ${textColor}`}>{card.heading}</h2>
                                <p className={`${"w-[180px]"} ${textColor}`}>{card.description}</p>
                            </div>
                        </NewRoundCornerWrapper>
                        </RoundCornerWrapper>
                    </div>
                ))}
            </div>

            {/* Two-column layout on large screens */}
            <div className='hidden lg:flex lg:justify-center'>
                {/* Column 1: Card 1 and Card 3 */}
                <div className='flex flex-col w-full'>
                    <div key='0'>
                    <RoundCornerWrapper>
                        <NewRoundCornerWrapper topBorder={true} bottomBorder={false}>
                            <div
                                className={`
                                    p-5 rounded-[32px]
                                    h-[386px] max-w-[347px]
                                    ${firstCardBg}
                                `}
                            >
                                <span className={`${textColor}`}>• 01</span>
                                <h2 className={`pt-15 text-2xl mb-2 mt-22 ${textColor}`}>You first</h2>
                                <p className={`${"w-[180px]"} ${textColor}`}>We're here for your vision. With teamwork, we'll make it real.</p>
                            </div>
                        </NewRoundCornerWrapper>
                        </RoundCornerWrapper>
                    </div>
                    <div key='2'>
                    <RoundCornerWrapper top={false}>
                        <NewRoundCornerWrapper topBorder={false} bottomBorder={true}>
                            <div
                                className={`
                                    p-5 rounded-[32px]
                                    h-[285px] max-w-[347px]
                                    ${otherCardBg}
                                `}
                            >
                                <span className={`${textColor}`}>• 03</span>
                                <h2 className={`pt-15 text-2xl mb-2 mt-10 ${textColor}`}>Hide nothing</h2>
                                <p className={`${"w-[180px]"} ${textColor}`}>To us, transparency means you're part of our team's journey</p>
                            </div>
                        </NewRoundCornerWrapper>
                        </RoundCornerWrapper>
                    </div>
                </div>

                {/* Column 2: Card 2 and Card 4 */}
                <div className='flex flex-col'>
                    <div key='1'>
                    <RoundCornerWrapper>
                        <NewRoundCornerWrapper topBorder={true} bottomBorder={false}>
                            <div
                                className={`
                                    p-5 rounded-[32px]
                                    h-[285px] max-w-[347px]
                                    ${otherCardBg}
                                `}
                            >
                                <span className={`${textColor}`}>• 02</span>
                                <h2 className={`pt-15 text-2xl mb-2 mt-10 ${textColor}`}>Cutting edge</h2>
                                <p className={`${"w-[170px]"} ${textColor}`}>We use the latest tech to create solutions that grow and evolve.</p>
                            </div>
                        </NewRoundCornerWrapper>
                        </RoundCornerWrapper>
                    </div>
                    <div key='3'>
                    <RoundCornerWrapper top={false}>
                        <NewRoundCornerWrapper topBorder={false} bottomBorder={true}>
                            <div
                                className={`
                                    p-5 rounded-[32px]
                                    h-[386px] max-w-[347px]
                                    ${otherCardBg}
                                `}
                            >
                                <span className={`${textColor}`}>• 04</span>
                                <h2 className={`pt-15 text-2xl mb-2 mt-10 ${textColor}`}>Fresh angles</h2>
                                <p className={`${"w-[180px]"} ${textColor}`}>We inspire through exploration, adaptation and curiosity</p>
                            </div>
                        </NewRoundCornerWrapper>
                        </RoundCornerWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallCardData;