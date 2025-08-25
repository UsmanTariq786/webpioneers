interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string,
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    image:"/service1.png",
    title: "Send us a message",
    description: "Have an idea or project? Just drop us a line and we'll take it from there."
  },
  {
    id: 2,
    title: "Meet us online",
     image:"/service2.png",
    description: "Hop on a quick call so we can hear your goals and figure out next steps."
  },
  {
    id: 3,
    title: "Free estimation",
     image:"/service3.png",
    description: "Tell us what you need and we'll send a simple, no-strings quote."
  },
  {
    id: 4,
    title: "Work together",
    image:"/service4.png",
    description: "We help founders turn ideas into polished, launch-ready products."
  }
];

export default serviceCards;


interface buttonType {
  id: number;
  text: string;
}
export const buttonData: buttonType[] = [
  {
    id: 1,
    text: "Mobile Design",
  },
  {
    id: 2,
    text: "Web Design",
  },
  {
    id: 3,
    text: "Branding",
  },
  {
    id: 4,
    text: "SaaS Product",
  },
  {
    id: 5,
    text: "Curiosity",
  },
  {
    id: 6,
    text: "Kindness",
  },
  {
    id: 7,
    text: "Culture",
  },
  {
    id: 8,
    text: "Transparency",
  },
  {
    id: 9,
    text: "Originality",
  },
  {
    id: 10,
    text: "Code",
  },
  {
    id: 11,
    text: "Commitment",
  },
  {
    id: 12,
    text: "Quality",
  },
  {
    id: 13,
    text: "People",
  },
  {
    id: 14,
    text: "CRD",
  },
  {
    id: 15,
    text: "Design",
  },
  {
    id: 16,
    text: "Transformation",
  },
];

