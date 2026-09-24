import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpeg";
import gallery10 from "../assets/gallery10.jpeg";
import gallery11 from "../assets/gallery11.jpeg";
import gallery12 from "../assets/gallery12.jpeg";
import gallery13 from "../assets/gallery13.jpeg";
import gallery14 from "../assets/gallery14.jpeg";
import gallery15 from "../assets/gallery15.jpeg";
import gallery16 from "../assets/galllery16.jpeg";
import gallery17 from "../assets/gallery17.jpeg";
import gallery18 from "../assets/gallery18.jpeg";
import gallery19 from "../assets/gallery19.jpeg";
import gallery20 from "../assets/gallery20.jpeg";
import gallery21 from "../assets/gallery21.jpeg";
import gallery22 from "../assets/gallery22.jpeg";
import gallery23 from "../assets/gallery23.jpeg";
import gallery24 from "../assets/gallery24.jpeg";
import gallery25 from "../assets/gallery25.jpeg";
import gallery26 from "../assets/gallery26.jpeg";
import gallery27 from "../assets/gallery27.jpeg";
import gallery28 from "../assets/gallery28.jpeg";
import gallery29 from "../assets/gallery29.jpeg";
import gallery30 from "../assets/gallery30.jpeg";
import gallery31 from "../assets/gallery31.jpeg";
import gallery32 from "../assets/gallery32.jpeg";
import gallery33 from "../assets/gallery33.jpeg";
import gallery34 from "../assets/gallery34.jpeg";
import gallery35 from "../assets/gallery35.jpeg";
import gallery36 from "../assets/gallery36.jpeg";
import gallery37 from "../assets/gallery37.jpeg";
import gallery38 from "../assets/gallery38.jpeg";
import gallery39 from "../assets/gallery39.jpeg";
import gallery40 from "../assets/gallery40.jpeg";
import gallery41 from "../assets/gallery41.jpeg";
import gallery42 from "../assets/gallery42.jpeg";
import gallery43 from "../assets/gallery43.jpeg";
import gallery44 from "../assets/gallery44.jpeg";
import gallery45 from "../assets/gallery45.jpeg";
import gallery46 from "../assets/gallery46.jpeg";

// impact
import impact1 from "../assets/impact1.jpeg";
import impact2 from "../assets/impact2.jpeg";
import impact3 from "../assets/impact3.jpeg";
import impact4 from "../assets/impact4.jpeg";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  size: "tall" | "wide" | "featured" | "standard";
}
export interface ImpactImage {
  id: number;
  src: string;
  desc: string;
  alt: string;
  size: "tall" | "wide" | "featured" | "standard";
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: gallery1,
    alt: "Gallery Image 1",
    size: "featured",
  },
  {
    id: 2,
    src: gallery2,
    alt: "Gallery Image 2",
    size: "tall",
  },
  {
    id: 3,
    src: gallery3,
    alt: "Gallery Image 3",
    size: "tall",
  },
  {
    id: 4,
    src: gallery4,
    alt: "Gallery Image 4",
    size: "wide",
  },
  {
    id: 5,
    src: gallery5,
    alt: "Gallery Image 5",
    size: "standard",
  },
  {
    id: 6,
    src: gallery6,
    alt: "Gallery Image 6",
    size: "tall",
  },
  {
    id: 7,
    src: gallery7,
    alt: "Gallery Image 7",
    size: "wide",
  },
  {
    id: 8,
    src: gallery8,
    alt: "Gallery Image 8",
    size: "standard",
  },
  {
    id: 9,
    src: gallery9,
    alt: "Gallery Image 9",
    size: "featured",
  },
  {
    id: 10,
    src: gallery10,
    alt: "Gallery Image 10",
    size: "tall",
  },
  {
    id: 11,
    src: gallery11,
    alt: "Gallery Image 11",
    size: "tall",
  },
  {
    id: 12,
    src: gallery12,
    alt: "Gallery Image 12",
    size: "wide",
  },
  {
    id: 13,
    src: gallery13,
    alt: "Gallery Image 13",
    size: "standard",
  },
  {
    id: 14,
    src: gallery14,
    alt: "Gallery Image 14",
    size: "tall",
  },
  {
    id: 15,
    src: gallery15,
    alt: "Gallery Image 15",
    size: "wide",
  },
  {
    id: 16,
    src: gallery16,
    alt: "Gallery Image 16",
    size: "standard",
  },
  {
    id: 17,
    src: gallery17,
    alt: "Gallery Image 17",
    size: "featured",
  },
  {
    id: 18,
    src: gallery18,
    alt: "Gallery Image 18",
    size: "tall",
  },
  {
    id: 19,
    src: gallery19,
    alt: "Gallery Image 19",
    size: "tall",
  },
  {
    id: 20,
    src: gallery20,
    alt: "Gallery Image 20",
    size: "tall",
  },
  {
    id: 21,
    src: gallery21,
    alt: "Gallery Image 21",
    size: "wide",
  },
  {
    id: 22,
    src: gallery22,
    alt: "Gallery Image 22",
    size: "standard",
  },
  {
    id: 23,
    src: gallery23,
    alt: "Gallery Image 23",
    size: "tall",
  },
  {
    id: 24,
    src: gallery24,
    alt: "Gallery Image 24",
    size: "wide",
  },
  {
    id: 25,
    src: gallery25,
    alt: "Gallery Image 25",
    size: "standard",
  },
  {
    id: 26,
    src: gallery26,
    alt: "Gallery Image 26",
    size: "featured",
  },
  {
    id: 27,
    src: gallery27,
    alt: "Gallery Image 27",
    size: "tall",
  },
  {
    id: 28,
    src: gallery28,
    alt: "Gallery Image 28",
    size: "tall",
  },
  {
    id: 29,
    src: gallery29,
    alt: "Gallery Image 229",
    size: "wide",
  },
  {
    id: 30,
    src: gallery30,
    alt: "Gallery Image 30",
    size: "standard",
  },
  {
    id: 31,
    src: gallery31,
    alt: "Gallery Image 31",
    size: "tall",
  },
  {
    id: 32,
    src: gallery32,
    alt: "Gallery Image 32",
    size: "wide",
  },
  {
    id: 33,
    src: gallery33,
    alt: "Gallery Image 33",
    size: "standard",
  },
  {
    id: 34,
    src: gallery34,
    alt: "Gallery Image 34",
    size: "featured",
  },
  {
    id: 35,
    src: gallery35,
    alt: "Gallery Image 35",
    size: "tall",
  },
  {
    id: 36,
    src: gallery36,
    alt: "Gallery Image 36",
    size: "tall",
  },
  {
    id: 37,
    src: gallery37,
    alt: "Gallery Image 37",
    size: "wide",
  },
  {
    id: 38,
    src: gallery38,
    alt: "Gallery Image 38",
    size: "standard",
  },
  {
    id: 39,
    src: gallery39,
    alt: "Gallery Image 39",
    size: "tall",
  },
  {
    id: 40,
    src: gallery40,
    alt: "Gallery Image 40",
    size: "wide",
  },
  {
    id: 41,
    src: gallery41,
    alt: "Gallery Image 41",
    size: "standard",
  },
  {
    id: 42,
    src: gallery42,
    alt: "Gallery Image 42",
    size: "featured",
  },
  {
    id: 43,
    src: gallery43,
    alt: "Gallery Image 43",
    size: "tall",
  },
  {
    id: 44,
    src: gallery44,
    alt: "Gallery Image 44",
    size: "tall",
  },
  {
    id: 45,
    src: gallery45,
    alt: "Gallery Image 45",
    size: "wide",
  },
  {
    id: 46,
    src: gallery46,
    alt: "Gallery Image 46",
    size: "standard",
  },
];


export const IMPACT_IMAGES: ImpactImage[] = [
  {
    id: 1,
    src: impact1,
    alt: "Community outreach and engagement",
    desc: "Donation of two Football yengema town Fc at the UMC School Field",
    size: "featured",
  },

  {
    id: 2,
    src: impact2,
    alt: "Community development program",
    desc: "",
    size: "tall",
  },

  {
    id: 3,
    src: impact3,
    alt: "Community members at an event",
    desc: "Donation of school supplies and bags of cement to pentecostal school Ngaiyan Nimikor 2018",
    size: "tall",
  },

  {
    id: 4,
    src: impact4,
    alt: "Donation of school supplies and bags of cement to pentecostal school Ngaiyan Nimikor 2018",
    desc: "Donation",
    size: "wide",
  },

  {
    id: 5,
    src: impact4,
    alt: "Community support initiative",
    desc: "Providing support and resources to communities and families in need.",
    size: "standard",
  },

  {
    id: 6,
    src: gallery6,
    alt: "Women empowerment program",
    desc: "Empowering women through community programs, connection, and opportunities.",
    size: "tall",
  },

  {
    id: 7,
    src: gallery7,
    alt: "Community gathering",
    desc: "A community gathering celebrating collaboration and shared progress.",
    size: "wide",
  },

  {
    id: 8,
    src: gallery8,
    alt: "Community outreach",
    desc: "Our team engaging directly with communities and listening to their needs.",
    size: "standard",
  },

  {
    id: 9,
    src: gallery9,
    alt: "Community impact event",
    desc: "A major community impact event bringing partners and beneficiaries together.",
    size: "featured",
  },

  {
    id: 10,
    src: gallery10,
    alt: "Community partnership",
    desc: "Building partnerships that strengthen communities and create lasting opportunities.",
    size: "tall",
  },

  {
    id: 11,
    src: gallery11,
    alt: "Community engagement",
    desc: "Working alongside community members to support sustainable development.",
    size: "tall",
  },

  {
    id: 12,
    src: gallery12,
    alt: "Community development initiative",
    desc: "Creating opportunities for communities through strategic development initiatives.",
    size: "wide",
  },

  {
    id: 13,
    src: gallery13,
    alt: "Community members",
    desc: "Celebrating the people and communities at the heart of our work.",
    size: "standard",
  },

  {
    id: 14,
    src: gallery14,
    alt: "Women and community leaders",
    desc: "Connecting community leaders and women to create stronger local networks.",
    size: "tall",
  },

  {
    id: 15,
    src: gallery15,
    alt: "Community program",
    desc: "Supporting grassroots programs designed to improve lives and strengthen communities.",
    size: "wide",
  },

  {
    id: 16,
    src: gallery16,
    alt: "Community outreach",
    desc: "Extending our reach through community engagement and grassroots partnerships.",
    size: "standard",
  },

  {
    id: 17,
    src: gallery17,
    alt: "Community celebration",
    desc: "Celebrating milestones and the collective impact of our community initiatives.",
    size: "featured",
  },

  {
    id: 18,
    src: gallery18,
    alt: "Community partnership event",
    desc: "Bringing partners and community stakeholders together to drive meaningful change.",
    size: "tall",
  },

  {
    id: 19,
    src: gallery19,
    alt: "Community support",
    desc: "Supporting individuals and families through practical community-focused initiatives.",
    size: "tall",
  },

  {
    id: 20,
    src: gallery20,
    alt: "Community development",
    desc: "Working with local communities to build sustainable pathways for growth.",
    size: "tall",
  },

  {
    id: 21,
    src: gallery21,
    alt: "Community event",
    desc: "A collaborative community event focused on connection, participation, and impact.",
    size: "wide",
  },

  {
    id: 22,
    src: gallery22,
    alt: "Community engagement",
    desc: "Engaging with local communities to understand their priorities and support their goals.",
    size: "standard",
  },

  {
    id: 23,
    src: gallery23,
    alt: "Community initiative",
    desc: "Grassroots initiatives helping communities access opportunities and essential resources.",
    size: "tall",
  },

  {
    id: 24,
    src: gallery24,
    alt: "Community gathering",
    desc: "A gathering of community members and partners working toward a shared vision.",
    size: "wide",
  },

  {
    id: 25,
    src: gallery25,
    alt: "Community support program",
    desc: "Delivering community support through partnerships and locally driven programs.",
    size: "standard",
  },

  {
    id: 26,
    src: gallery26,
    alt: "Community impact",
    desc: "Capturing the people and moments that represent the impact of our work.",
    size: "featured",
  },

  {
    id: 27,
    src: gallery27,
    alt: "Community outreach",
    desc: "Connecting directly with communities through outreach and engagement activities.",
    size: "tall",
  },

  {
    id: 28,
    src: gallery28,
    alt: "Community partnership",
    desc: "Strengthening partnerships with organizations and community leaders.",
    size: "tall",
  },

  {
    id: 29,
    src: gallery29,
    alt: "Community development program",
    desc: "Supporting initiatives that contribute to long-term community development.",
    size: "wide",
  },

  {
    id: 30,
    src: gallery30,
    alt: "Community gathering",
    desc: "Creating spaces where community members can connect, collaborate, and grow.",
    size: "standard",
  },

  {
    id: 31,
    src: gallery31,
    alt: "Community engagement",
    desc: "Engaging people and organizations in initiatives designed to create lasting impact.",
    size: "tall",
  },

  {
    id: 32,
    src: gallery32,
    alt: "Community event",
    desc: "A community event focused on collaboration, empowerment, and social development.",
    size: "wide",
  },

  {
    id: 33,
    src: gallery33,
    alt: "Community outreach",
    desc: "Connecting with beneficiaries and community members through grassroots outreach.",
    size: "standard",
  },

  {
    id: 34,
    src: gallery34,
    alt: "Community impact event",
    desc: "A significant impact event bringing together communities, partners, and supporters.",
    size: "featured",
  },

  {
    id: 35,
    src: gallery35,
    alt: "Community development",
    desc: "Supporting sustainable development through community-led initiatives.",
    size: "tall",
  },

  {
    id: 36,
    src: gallery36,
    alt: "Community engagement",
    desc: "Working closely with communities to turn shared goals into meaningful action.",
    size: "tall",
  },

  {
    id: 37,
    src: gallery37,
    alt: "Community initiative",
    desc: "Investing in initiatives that strengthen communities and create opportunities.",
    size: "wide",
  },

  {
    id: 38,
    src: gallery38,
    alt: "Community support",
    desc: "Providing support that responds to the needs and aspirations of local communities.",
    size: "standard",
  },

  {
    id: 39,
    src: gallery39,
    alt: "Community partnership",
    desc: "Working with strategic partners to expand the reach and impact of our programs.",
    size: "tall",
  },

  {
    id: 40,
    src: gallery40,
    alt: "Community event",
    desc: "Bringing people together through events that promote connection and collaboration.",
    size: "wide",
  },

  {
    id: 41,
    src: gallery41,
    alt: "Community members",
    desc: "Recognizing the people whose participation makes our community programs possible.",
    size: "standard",
  },

  {
    id: 42,
    src: gallery42,
    alt: "Community impact",
    desc: "A collection of moments showing the progress and impact of our initiatives.",
    size: "featured",
  },

  {
    id: 43,
    src: gallery43,
    alt: "Community outreach",
    desc: "Reaching communities with programs designed to create practical and lasting change.",
    size: "tall",
  },

  {
    id: 44,
    src: gallery44,
    alt: "Community engagement",
    desc: "Building relationships with communities and stakeholders through meaningful engagement.",
    size: "tall",
  },

  {
    id: 45,
    src: gallery45,
    alt: "Community development event",
    desc: "Collaborating with community stakeholders to advance sustainable development.",
    size: "wide",
  },

  {
    id: 46,
    src: gallery46,
    alt: "Community celebration",
    desc: "Celebrating the people, partnerships, and progress behind our community impact.",
    size: "standard",
  },
];