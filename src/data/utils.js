import bannerimage1 from '../img/movease_layout.png';
import bannerimage2 from '../img/movease_modal.png';
import bannerimage3 from '../img/movease_layout_2.png';
import bannerimage4 from '../img/movease_main.png';
import bannerimage5 from '../img/blog_posts.png';
import bannerimage6 from '../img/blog_layout.png';
import bannerimage7 from '../img/blog_profile.png';
import bannerimage8 from '../img/blog_post-detail.png';
import bannerimage9 from '../img/crypto_layout.png';
import bannerimage10 from '../img/crypto_menu.png';
import bannerimage11 from '../img/crypto_chart.png';
import bannerimage12 from '../img/crypto_news.png';
import bannerimage13 from '../img/binterest_layout.png';
import bannerimage14 from '../img/binterest_mob.png';
import bannerimage15 from '../img/binterest_profile.png';
import bannerimage16 from '../img/binterest_search.png';
import bannerimage17 from '../img/eshop_layout.png';
import bannerimage18 from '../img/eshop_mobile.png';
import bannerimage19 from '../img/eshop_product_detail.png';
import bannerimage20 from '../img/eshop_cart.png';
import bannerimage21 from '../img/drive_layout.png';
import bannerimage22 from '../img/drive_layout_2.png';
import bannerimage23 from '../img/drive_mobile.png';
import bannerimage24 from '../img/drive_ipad.png';
import bannerimage25 from '../img/fortouristic_main.png';
import bannerimage26 from '../img/fortouristic_detail.png';
import bannerimage27 from '../img/fortouristic_layout.png';
import bannerimage28 from '../img/fortouristic_detail2.png';

import teammemberphoto1 from '../icons/html5-svgrepo-com.svg';
import teammemberphoto2 from '../icons/mongodb-svgrepo-com.svg';
import teammemberphoto3 from '../icons/redux-svgrepo-com.svg';
import teammemberphoto4 from '../icons/sanity-svgrepo-com.svg';
import servicesimage1 from '../icons/js-vgrepo-com.svg';
import servicesimage2 from '../icons/nodejs-svgrepo-com.svg';
import servicesimage3 from '../icons/react-16-svgrepo-com.svg';
import servicesimage4 from '../icons/api-svgrepo-com.svg';
import servicesimage5 from '../icons/ant-design.svg'
import servicesimage6 from '../icons/appwrite_logo.svg';
import servicesimage7 from '../icons/tailwind-svgrepo-com.svg';
import servicesimage8 from '../icons/vite-svgrepo-com.svg';
import servicesimage9 from '../icons/next-js-svgrepo-com.svg';
import servicesimage10 from '../icons/typescript-official-svgrepo-com.svg';
import servicesimage11 from '../icons/shadcn-ui-seeklogo.svg';
import servicesimage12 from '../icons/react-router-svgrepo-com.svg';
import authorprofile1 from '../img/Image3.png';
import authorprofile2 from '../icons/profilepic.png';
import edulogo from '../icons/books.svg';
import worklogo from '../icons/image969.svg';

export const projects = (t) => 
{
  return [
    {
      bannerTitle : "Movease",
      bannerTags : ["React + Vite", "Tailwind CSS", "Appwrite"],
      bannerText : t('bannerText1'),
      bannerImage1 : bannerimage1,
      bannerImage2 : bannerimage2,
      projectSlug : "movease",
      bannerImage3 : bannerimage3,
      bannerImage4 : bannerimage4,
      projectSummaryText : t('projectSummaryText1'),
      projectSummaryTags :  ["React + Vite", "Tailwind CSS", "Appwrite"],
      projectSummaryItemObj : [ 
        {scope : "Github", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/movease"},
        {scope : "Vercel", name : t('scopeLink'), link : "https://movease-eight.vercel.app"},
       ],
       teamMembers : [
        {photo : servicesimage8,
        name : "React + Vite"},
        {photo : servicesimage7,
        name : "Tailwind CSS"},
        {photo : servicesimage6,
          name : "Appwrite"}
      ]
    },
    {
      bannerTitle : t('bannerTitle'),
      bannerTags : ["React", "NodeJS", "Redux"],
      bannerText : t('bannerText2'),
      bannerImage1 : bannerimage7,
      bannerImage2 : bannerimage6,
      projectSlug : "the-blog",
      bannerImage3 : bannerimage5,
      bannerImage4 : bannerimage8,
      projectSummaryText : t('projectSummaryText1'),
      projectSummaryTags :  ["React", "MongoDB", "JavaScript", "NodeJS"],
      projectSummaryItemObj : [ 
        {scope : t('scopeName'), name : t('scopeLink'), link : "https://blog-4wsh.onrender.com"},
        {scope : "GitHub", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/blog"},
       ],
       teamMembers : [
        {photo : servicesimage3,
        name : "React"},
        {photo : servicesimage2,
        name : "NodeJS"},
        {photo : teammemberphoto2,
          name : "MongoDB"},
        {photo : teammemberphoto3,
          name : "Redux"},
      ]
    },
    {
      bannerTitle : "Cryptotnt",
      bannerTags : ["React", "REST API", "ant-d"],
      bannerText : t('bannerText3'),
      bannerImage1 : bannerimage10,
      bannerImage2 : bannerimage9,
      projectSlug : "crypto",
      bannerImage3 : bannerimage11,
      bannerImage4 : bannerimage12,
      projectSummaryText : t('projectSummaryText3'),
      projectSummaryTags :  ["Rest Api", "React", "ant-d"],
      projectSummaryItemObj : [ 
        {scope : t('scopeName'), name : t('scopeLink'), link: "https://cryptnt.vercel.app"},
        {scope : "GitHub", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/crypto-react"}
       ],
      teamMembers : [
        {photo : servicesimage3,
        name : "React"},
        {photo : servicesimage4,
        name : "REST API"},
        {photo : servicesimage5,
          name : "ant-d"},

      ]
    },
    {
      bannerTitle : "Binterest",
      bannerTags : ["React", "Sanity"],
      bannerText : t('bannerText4'),
      bannerImage1 : bannerimage14,
      bannerImage2 : bannerimage15,
      projectSlug : "binterest",
      bannerImage3 : bannerimage13,
      bannerImage4 : bannerimage16,
      projectSummaryText : t('projectSummaryText4'),
      projectSummaryTags :  ["React", "Sanity", "HTML/CSS(SCSS)"],
      projectSummaryItemObj : [ 
        {scope : "GitHub", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/binterest"},
       ],
      teamMembers : [
        {photo : servicesimage3,
        name : "React"},
        {photo : teammemberphoto4,
        name : "Sanity"},
        {photo : teammemberphoto3,
          name : "Redux"},
      ]
    },
    {
      bannerTitle : "E-Shop",
      bannerTags : ["React", "Sanity"],
      bannerText : t('bannerText5'),
      bannerImage1 : bannerimage18,
      bannerImage2 : bannerimage17,
      projectSlug : "eshop",
      bannerImage3 : bannerimage19,
      bannerImage4 : bannerimage20,
      projectSummaryText : t('projectSummaryText5'),
      projectSummaryTags :  ["React", "Sanity", "HTML/CSS(SCSS)"],
      projectSummaryItemObj : [ 
        {scope : "GitHub", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/eshop"},
       ],
      teamMembers : [
        {photo : servicesimage3,
        name : "React"},
        {photo : teammemberphoto4,
        name : "Sanity"},
        {photo : servicesimage1,
          name : "JavaScript"},
      ]
    },
    {
      bannerTitle : "Dr.Ive - Storage management website",
      bannerTags : ["Next.js", "Typescript", "Appwrite", "ShadCN"],
      bannerText : t('bannerText6'),
      bannerImage1 : bannerimage22,
      bannerImage2 : bannerimage21,
      projectSlug : "drive",
      bannerImage3 : bannerimage24,
      bannerImage4 : bannerimage23,
      projectSummaryText : t('projectSummaryText6'),
      projectSummaryTags :  ["Next.js", "TypeScript", "Appwrite", "ShadCN"],
      projectSummaryItemObj : [ 
        {scope : "GitHub", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/drive"},
        {scope : "Vercel", name : t('scopeLink'), link : "https://drive-wheat.vercel.app"},
       ],
      teamMembers : [
        {photo : servicesimage9,
        name : "Next.js"},
        {photo : servicesimage10,
          name : "TypeScript"},
        {photo : servicesimage6,
          name : "Appwrite"},
        {photo : servicesimage11,
          name : "ShadCN"},
      ]
    },
    {
      bannerTitle : "Fortouristic - Plan your travel with us",
      bannerTags : ["React + Vite", "React Router v7", "Appwrite", "TailwindCSS"],
      bannerText : t('bannerText7'),
      bannerImage1 : bannerimage26,
      bannerImage2 : bannerimage25,
      projectSlug : "fortouristic",
      bannerImage3 : bannerimage27,
      bannerImage4 : bannerimage28,
      projectSummaryText : t('projectSummaryText7'),
      projectSummaryTags :  ["React + Vite", "React Router v7", "Appwrite", "TailwindCSS"],
      projectSummaryItemObj : [ 
        {scope : "GitHub", name : t('scopeLink2'), link : "https://github.com/abdymaleeq925/fortouristic"},
        {scope : "Vercel", name : t('scopeLink'), link : "https://fortouristic.vercel.app"},
       ],
      teamMembers : [
        {photo : servicesimage8,
        name : "React + Vite"},
        {photo : servicesimage12,
          name : "React Router v7"},
        {photo : servicesimage6,
          name : "Appwrite"},
        {photo : servicesimage7,
          name : "TailwindCSS"},
      ]
    }
  ]
}

export const services = (t) => [
  {
    icon: servicesimage1,
    title : "Javascript",
    text : t('serviceText1'),
    fieldText : ["REST API", "React"]
  },
  {
    icon: servicesimage2,
    title : "Node.js",
    text : t('serviceText2'),
    fieldText : ["Sanity, MongoDB", "Javascript"]
  },
  {
    icon: servicesimage3,
    title : "React",
    text : t('serviceText3'),
    fieldText : ["Javascript", "HTML/CSS(SCSS)"]
  },
  {
    icon: teammemberphoto3,
    title : "Redux",
    text : t('serviceText4'),
    fieldText : ["React", "JavaScript"]
  },
  {
    icon: servicesimage4,
    title : "API",
    text : t('serviceText5'),
    fieldText : ["JavaScript"]
  },
  {
    icon: servicesimage9,
    title : "Next.js",
    text : t('serviceText6'),
    fieldText : ["JavaScript"]
  },
]

export const testimonials = (t) => [
  {
    authorProfile : authorprofile1,
    authorName : t('testimonialName1'),
    authorPosition : t('testimonialPosition1'),
    text : t('tesitmonialText1'),
  },
  {
    authorProfile : authorprofile2,
    authorName : t('testimonialName2'),
    authorPosition : t('testimonialPosition2'),
    text : t('tesitmonialText2'),
  }
]

export const eduwork = (t) => [
    {
      eduworkicon : worklogo,
      eduworktitle : t('xp'),
      eduworklist : [
        {
          period : t('period1'),
          place : "Dara Solutions",
          degree : "Frontend Developer",
          info : t('info1')
        },
        {
          period : t('period2'),
          place : "Mining",
          degree : t('degree2'),
          info : t('info2')
        },
      ]
    },
    {
      eduworkicon : edulogo,
      eduworktitle : t('edu'),
      eduworklist : [
        {
          period : t('period3'),
          place : "ITC BootCamp",
          degree : t('degree3'),
          info : t('info3'),
        },
        {
          period : t('period4'),
          place : t('place2'),
          degree : t('degree4'),
          info : t('info4')
        }
      ]
    }
]