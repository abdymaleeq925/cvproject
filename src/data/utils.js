import bannerimage1 from '../img/brand_landing_mobile.png';
import bannerimage2 from '../img/brand_landing_layout.png';
import bannerimage3 from '../img/brand_landing_layout_2.png';
import bannerimage4 from '../img/brand_landing_burger-menu.png';
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
import bannerimage21 from '../img/currency_bot_layout.png';
import bannerimage22 from '../img/currency_bot_mobile.png';
import bannerimage23 from '../img/qr_bot_layout.png';

import teammemberphoto1 from '../icons/html5-svgrepo-com.svg';
import teammemberphoto2 from '../icons/mongodb-svgrepo-com.svg';
import teammemberphoto3 from '../icons/redux-svgrepo-com.svg';
import teammemberphoto4 from '../icons/sanity-svgrepo-com.svg';
import servicesimage1 from '../icons/js-vgrepo-com.svg';
import servicesimage2 from '../icons/nodejs-svgrepo-com.svg';
import servicesimage3 from '../icons/react-16-svgrepo-com.svg';
import servicesimage4 from '../icons/api-svgrepo-com.svg';
import servicesimage5 from '../icons/ant-design.svg'
import authorprofile1 from '../img/Image3.png';
import authorprofile2 from '../icons/profilepic.png';
import edulogo from '../icons/books.svg';
import worklogo from '../icons/image969.svg';

export const projects = [
    {
      bannerTitle : "Brand Landing",
      bannerTags : ["HTML/CSS(SCSS)", "JavaScript"],
      bannerText : "A clean and responsive brand landing page built with pure HTML, CSS, and JavaScript. This project demonstrates a simple yet elegant design suitable for showcasing a product, service, or brand.",
      bannerImage1 : bannerimage1,
      bannerImage2 : bannerimage2,
      projectSlug : "brand-landing",
      bannerImage3 : bannerimage3,
      bannerImage4 : bannerimage4,
      projectSummaryText : "Optimized for all screen sizes, including desktops, tablets, and mobile devices. Includes JavaScript-powered interactions such as a swiper, accordeon and modal functions. Focus on clean and modern UI/UX design principles. Tested and functional on major browsers.",
      projectSummaryTags :  ["Swiper", "Landing Adoption", "JavaScript"],
      projectSummaryItemObj : [ 
        {scope : "Website", name : "Visit website", link : "https://github.com/abdymaleeq925/landing"},
       ],
       teamMembers : [
        {photo : teammemberphoto1,
        name : "HTML/CSS(SCSS)"},
        {photo : servicesimage1,
        name : "JavaScript"}
      ]
    },
    {
      bannerTitle : "The Blog",
      bannerTags : ["React", "NodeJS", "Redux"],
      bannerText : "Blog site with authorization, creating/deleting posts, comments, likes, dislikes, and replies.",
      bannerImage1 : bannerimage7,
      bannerImage2 : bannerimage6,
      projectSlug : "the-blog",
      bannerImage3 : bannerimage5,
      bannerImage4 : bannerimage8,
      projectSummaryText : "Welcome to Blog Website, a modern, full-stack blogging platform built with JavaScript, React, MongoDB, Redux, and HTML/CSS. This platform allows users to create, edit, and delete posts, comment on posts, like posts, and even reply to comments. Whether you're a blogger or a reader, this platform has something for everyone!",
      projectSummaryTags :  ["React", "MongoDB", "JavaScript", "NodeJS"],
      projectSummaryItemObj : [ 
        {scope : "Website", name : "Visit website", link : "https://blog-4wsh.onrender.com"},
        {scope : "GitHub", name : "Visit GitHub", link : "https://github.com/abdymaleeq925/blog"},
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
      bannerText : "This project is a cryptocurrency-focused webpage that provides up-to-date information on top cryptocurrencies, the latest crypto news, and cryptocurrency price trends.",
      bannerImage1 : bannerimage10,
      bannerImage2 : bannerimage9,
      projectSlug : "crypto",
      bannerImage3 : bannerimage11,
      bannerImage4 : bannerimage12,
      projectSummaryText : "This project is a cryptocurrency-focused webpage that provides up-to-date information on top cryptocurrencies, the latest crypto news, and cryptocurrency price trends. The data for news and cryptocurrency prices is fetched via a REST API using Express. The webpage also includes a news search function and a price chart with period selection.",
      projectSummaryTags :  ["Rest Api", "React", "ant-d"],
      projectSummaryItemObj : [ 
        {scope : "Website", name : "Visit website", link: "https://crypto-react-pi.vercel.app"},
        {scope : "GitHub", name : "Visit GitHub", link : "https://github.com/abdymaleeq925/crypto-react"}
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
      bannerText : "Album website full of pictures with Google authorization.",
      bannerImage1 : bannerimage14,
      bannerImage2 : bannerimage16,
      projectSlug : "binterest",
      bannerImage3 : bannerimage13,
      bannerImage4 : bannerimage15,
      projectSummaryText : "Album website full of pictures with Google authorization. You can save and download pictures. Seperated by categories.",
      projectSummaryTags :  ["React", "Sanity", "HTML/CSS(SCSS)"],
      projectSummaryItemObj : [ 
        {scope : "Duration", name : "4 weeks"},
        {scope : "Website", name : "Visit website", link : "https://github.com/abdymaleeq925/binterest"},
        {scope : "Tools", name : "React, JavaScript"}
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
      bannerTitle : "TechnoShop",
      bannerTags : ["React", "Sanity"],
      bannerText : "PC device shop with cart and backend.",
      bannerImage1 : bannerimage18,
      bannerImage2 : bannerimage17,
      projectSlug : "eshop",
      bannerImage3 : bannerimage19,
      bannerImage4 : bannerimage20,
      projectSummaryText : "Shop with adding/deleting products and payment",
      projectSummaryTags :  ["React", "Sanity", "HTML/CSS(SCSS)"],
      projectSummaryItemObj : [ 
        {scope : "Duration", name : "3 weeks"},
        {scope : "Website", name : "Visit website", link : "https://github.com/abdymaleeq925/eshop"},
        {scope : "Tools", name : "React, JavaScript"}
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
      bannerTitle : "TelegramBots",
      bannerTags : ["JavaScript", "REST API"],
      bannerText : "Pair of telegram bots that can work on currency and qr-code",
      bannerImage1 : bannerimage22,
      bannerImage2 : bannerimage21,
      projectSlug : "telegrambots",
      bannerImage3 : bannerimage21,
      bannerImage4 : bannerimage23,
      projectSummaryText : "Telegram bots with AI that takes information from outsource and exchange your money.",
      projectSummaryTags :  ["JavaScript", "REST API"],
      projectSummaryItemObj : [ 
        {scope : "Duration", name : "2 days"},
        {scope : "Website", name : "Visit website", link : "https://github.com/abdymaleeq925/currency_bot"},
        {scope : "Tools", name : "REST API, JavaScript"}
       ],
      teamMembers : [
        {photo : servicesimage4,
        name : "REST API"},
        {photo : servicesimage1,
          name : "JavaScript"},
      ]
    }
]

export const services = [
  {
    icon: servicesimage1,
    title : "Javascript",
    text : "Javascript native, combining with other frameworks",
    fieldText : ["REST API", "React"]
  },
  {
    icon: servicesimage2,
    title : "Node JS",
    text : "Connecting backend from Sanity, MongooDB.",
    fieldText : ["Sanity, MongoDB", "Javascript"]
  },
  {
    icon: servicesimage3,
    title : "React",
    text : "Constructing whole page by components and provided with each other.",
    fieldText : ["Javascript", "HTML/CSS(SCSS)"]
  },
  {
    icon: teammemberphoto3,
    title : "Redux",
    text : "Redux is a small library with a simple, limited API designed to be a predictable container for application state.",
    fieldText : ["React", "JavaScript"]
  },
  {
    icon: servicesimage4,
    title : "API",
    text : "REST APIs are an industry-standard way for web services to send and receive data.",
    fieldText : ["JavaScript"]
  }
]

export const testimonials = [
  {
    authorProfile : authorprofile1,
    authorName : "Rano Khassanova",
    authorPosition : "Curator at ITC Bootcamp",
    text : "I teached Malik during his Bootcamp program and I am delighted with his results. He has excellent communication skills and uses robust workflows that allowed me to teach and work with him efficiently."
  },
  {
    authorProfile : authorprofile2,
    authorName : "Adilet Zhanysbay",
    authorPosition : "Mentor at Dara Solutions",
    text : "I was glad to had him as an intern in our company and all I can say about him is that he showed outstanding performance during the internship program. We would like to offer him position but he wanted to conribute his efforts in Istanbul."
  }
]

export const eduwork = {
  eduwork : [
    {
      eduworkicon : worklogo,
      eduworktitle : "Work Experience",
      eduworklist : [
        {
          period : "July 2024 to Nov 2024",
          place : "Dara Solutions",
          degree : "Frontend Developer",
          info : "Supporting, maintaining, adding features and fixing bugs according to business analytics comments."
        },
        {
          period : "2022 to 2024",
          place : "Turan Industrial",
          degree : "Translator, Shift boss",
          info : "Supervising mining operations, organizing worker pools and accounting for mining equipment, ensuring operational safety and efficient workflow."
        },
        {
          period : "2020 to 2022",
          place : "AAEngineering Group",
          degree : "HSE Engineer",
          info : "Developing, installing, maintaining, configuring and upgrading OHS systems, assessing and reducing risks involved in the working systems, monitoring the performance of the OHS systems and implementing modifications"
        }
      ]
    },
    {
      eduworkicon : edulogo,
      eduworktitle : "Education",
      eduworklist : [
        {
          period : "Feb to Jun, 2024",
          place : "ITC BootCamp, Almaty",
          degree : "JavaScript Fullstack Program",
          info : "Program inculdes client and server software development using MERN bundle, mastering HTML/CSS on SASS/SCSS and Telegram Bot development."
        },
        {
          period : "2012 to 2019",
          place : "Istanbul Technical University",
          degree : "Mining Engineering",
          info : "Surface and underground mining that includes whole process starting with mining and ending with mineral processing."
        },
        {
          period : "2007 to 2012",
          place : "Ch. Aytmatov's Bishkek Kyrgyz Turkish High School",
          degree : "General",
          info : "Includes high-school program in English."
        }
      ]
    }
  ]
}

export const featledge = {
  features : ["Hard and patient worker", "Punctual", "Team worker"],
  knowledge : ["JavaScript", "Python, Django(elementary level)", "React", "NodeJS", "HTML/CSS", "Telegram BOT"]
}