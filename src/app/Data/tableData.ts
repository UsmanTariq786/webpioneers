type Design ={
    image:string,
    heading: string,
    sub1:string,
    description1:string,
    sub2:string,
    des1:string,
    des2:string,
    des3:string,
    des4:string,
    des5?:string,
    des6?:string,
}

const tableData:Design[] = [
    {
        image: "Branding image",
        heading : "Branding",
        sub1:"Benefit",
        description1:"We help you discover your vibe. then bring it to life with a brand that's clear adn totally you.",
        sub2:"Services",
        des1:"01 Brand book",
        des2:"02 Brand guidelines",
        des3:"03 Creative direction",
        des4:"04 Identity design",
        des5:"05 Logo design",
        des6:"06 Pitch decks"        
    },
    {
        image: "Branding image",
        heading : "Website Design",
        sub1:"Benefit",
        description1:"We design engaging, effective websites that convert visitors into customers and drive results",
        sub2:"Services",
        des1:"01 CRO based design",
        des2:"02 Websites design",
        des3:"03 Responsive web design ",
        des4:"04 Web app design",
        des5:"05 Ecommerce design",
        des6:"06 SaaS website design"        
    },
    {
        image: "Branding image",
        heading : "Mobiel App Design",
        sub1:"Benefit",
        description1:"We design apps that are easy to use.fun to explore. and built for real humans on the go.",
        sub2:"Services",
        des1:"01 Mobile app MVP",
        des2:"02 IOS & android app design",
        des3:"03 Hybrid app design  ",
        des4:"04 App prototyping",
               
    },
    {
        image: "Branding image",
        heading : "SaaS Product Design",
        sub1:"Benefit",
        description1:"We turn complex tools into clean. simple interfaces your users will actullay enjoy using.",
        sub2:"Services",
        des1:"01 SaaS Product design",
        des2:"02 SaaS Audit",
        des3:"03 B2B SaaS ",
        des4:"04 Product Redesign",        
    },
    {
        image: "Branding image",
        heading : "Website Development",
        sub1:"Benefit",
        description1:"We build fast, reliable websites that just work-across all devices, without the headaches",
        sub2:"Services",
        des1:"01 Webflow Development",
        des2:"02 Framer Development",
        des3:"03 Shopify Development",
        des4:"04 Custome Code integrations",
        des5:"05 WordPress Development"        
    }
     
]

export default tableData;