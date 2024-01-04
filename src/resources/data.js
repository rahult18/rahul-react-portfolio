import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export const experienceData = [
    {
        title: "Solutions Engineer at Swym Corporation",
        location: "Bangalore, Karnataka, India",
        description: " • Collaborated within Swym's Product Development team, providing vital front-end support to 30,000+ e-commerce merchants on various platforms such as Shopify, BigCommerce and Magento.\n • Engineered internal tools, amplifying operational efficiency and enhanced processes. \n • Resolved 6+ issues with parallel processing, software glitches on Azure backend system servers and was also responsible for finding permanent bug fixes by performing root cause analysis, and code changes.",
        icon: React.createElement(ShoppingCartCheckoutIcon),
        date: "September 2022 - August 2023"
    },
    {
        title: "Research & Development Intern at Samsung PRISM",
        location: "Bangalore, Karnataka, India",
        description: " • Conceptualized an IMS signaling gateway between PC and mobile devices to provide simple end-to-end video communication.\n • Formulated and constructed a pipeline for the gateway to convert TCP/IP packets into SIP Packets and vice-versa to make them both interoperate.\n • Incorporated the use of WebRTC stack present in modern web browsers for enabling audio/video real-time communication.",
        icon: React.createElement(PhonelinkIcon),
        date: "November 2021 - September 2022"
    },
    {
        title: "Technology Intern at Head Digital Works Pvt Ltd",
        location: "Hyderabad, Telangana, India",
        description: "• Developed an application that helps to automate the data flow between several Cassandra nodes and application endpoints with minimal data loss and higher data transfer rate. \n • Structured and Implemented GraphQL queries on top of existing REST API to avoid under-fetching and over-fetching of data.\n • Coordinated with server-side by utilizing Cassandra on AWS, coupled with Node.js, and Express.js for client-side development",
        icon: React.createElement(SportsEsportsIcon),
        date: "July 2021 - August 2021"
    }
]

export const projectData = [
    {
        title: "Chicago Crime Analysis",
        stack: "Python, Streamlit & Machine Learning",
        img: "https://trainingexpress.org.uk/wp-content/uploads/2021/09/Crime-Analysis.jpg",
        description: "By leveraging extensive exploratory data analysis, the platform provides valuable insights and examines the occurrence crime patterns. Additionally, the platform classifies data, aiding law enforcement in quick decision-making.",
        link: "https://github.com/rahult18/Chicago-Crime-Analysis"
    },
    {   
        title: "Parallelisation of DES Algorithm",
        stack: "C++ & OpenMP",
        img: "https://static.vecteezy.com/system/resources/previews/005/973/012/original/cryptography-and-encryption-icon-line-design-vector.jpg",
        description: "This project focuses on enhancing the efficiency of the DES cryptographic algorithm by parallelizing its implementation using OpenMP. By dividing the plain text into substrings of length '8' and leveraging block cipher properties, the algorithm achieves parallel processing on multiple processors.",
        link: "https://github.com/rahult18/Parallelisation-of-DES-Algorithm"
    },
    {   
        title: "Stock Market Prediction & Forecasting",
        stack: "Python, Streamlit & Deep Learning",
        description: "An intuitive application with the capability to predict the stock prices and forecast them which is achieved by using RandomForests for predicting the stock trend and LSTM models for forecasting the stocks.",
        img: "https://img.freepik.com/free-vector/stock-market-analysis_23-2148582512.jpg",
        link: "https://github.com/rahult18/"
    },
    {
        title: "Employee Research Management System",
        stack: "PHP & JS",
        img: "https://www.worktribe.com/wp-content/uploads/2019/08/Worktribe-ethics2.png",
        description: "Employee research management system is a website built using CSS, Bootstrap, JS and PHP where the students can view the research details of the particular faculty and choose them as the guide for their final year project.",
        link: "https://github.com/rahult18/Employee-Research-Progress-Management-System"
    }
]
