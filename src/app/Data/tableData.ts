type Design ={
    image:string,
    heading: string,
    sub1:string,
    description1:string,
    sub2:string,
    des1:string,
    des2:string,
    des3:string,
    des4?:string,
    des5?:string,
    des6?:string,
    img:string
}

const tableData:Design[] = [
    {
        image: "/services_img/branding.png",
        heading : "Branding",
        sub1:"Benefit",
        description1:"We help you discover your vibe, then bring it to life with a brand that's clear and totally you.",
        sub2:"Services",
        des1:"Brand book",
        des2:"Brand guidelines",
        des3:"Creative direction",
        des4:"Identity design",
        des5:"Logo design",
        des6:"Pitch decks" ,
        img:"/services_img/frame1.png"       
    },
    {
        image: "/services_img/webdesign.png",
        heading : "Website Design",
        sub1:"Benefit",
        description1:"We design engaging, effective websites that convert visitors into customers and drive results",
        sub2:"Services",
        des1:"CRO based design",
        des2:"Websites design",
        des3:"Responsive web design ",
        des4:"Web app design",
        des5:"Ecommerce design",
        des6:"SaaS website design",
        img:"/services_img/frame2.png"       
    },
    {
        image: "/services_img/mobileapp.png",
        heading : "Mobile App Design",
        sub1:"Benefit",
        description1:"We design apps that are easy to use.fun to explore. and built for real humans on the go.",
        sub2:"Services",
        des1:"Mobile app MVP",
        des2:"IOS & android app design",
        des3:"Hybrid app design  ",
        des4:"App prototyping",
        img:"/services_img/frame3.png"
               
    },
    {
        image: "/services_img/saas.png",
        heading : "SaaS Product Design",
        sub1:"Benefit",
        description1:"We turn complex tools into clean. simple interfaces your users will actullay enjoy using.",
        sub2:"Services",
        des1:"SaaS Product design",
        des2:"SaaS Audit",
        des3:"B2B SaaS ",
        des4:"Product Redesign",
        img:"/services_img/frame4.png"      
    },
    {
        image: "/services_img/webdev.png",
        heading : "Website Development",
        sub1:"Benefit",
        description1:"We build fast, reliable websites that just work-across all devices, without the headaches",
        sub2:"Services",
        des1:"Webflow Development",
        des2:"Framer Development",
        des3:"Shopify Development",
        des4:"Custome Code integrations",
        des5:"WordPress Development",
        img:"/services_img/frame5.png"       
    }
     
]

export default tableData;