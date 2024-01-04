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
