import { motion } from "motion/react";
import React from 'react';
import Project2 from '../assets/img/project1.gif';
import Project1 from '../assets/img/project2.gif';
import Project3 from '../assets/img/project3.gif';
import Project4 from '../assets/img/project4.gif';
import AOS from 'aos';

const Project = () => {
  AOS.init();
  return (
    <div data-aos="fade-right" className="animate__animated animate__zoomIn">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className='bg-white text-black'>
          <h1 className='text-center text-amber-500 text-3xl font-bold py-4'>My Projects</h1>
          <p className='p-4 text-xl'> 
            Developed and implemented full-stack web applications leveraging the MERN Stack (MongoDB, Express.js, React, Node.js), showcasing expertise in building responsive and dynamic user interfaces. Designed backend APIs, integrated databases, and ensured seamless data flow across systems. Projects involved utilizing Java and Python for backend services and algorithmic problem-solving. Demonstrated proficiency in Data Structures and Algorithms (DSA) to optimize application performance and scalability. Collaborated on end-to-end development, from conceptualization to deployment, focusing on clean, maintainable code and user-centric design. In every project, I focus on delivering seamless user experiences, robust functionality, and scalable solutions that align with modern technological demands.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4 space-y-8 max-md:flex flex-col bg-white p-4' id='projects'>
          <div className='hover-animation1 max-sm:flex justify-center items-center'>
            <img src={Project2} className='max-sm:w-4/5 items-center' />
          </div>
          <div className='hover-animation1 max-sm:px-4'>
            <h3 className='text text-3xl font-bold text-slate-950'>Food Ordering System</h3>
            <p className='text-xl text-slate-700 mt-3 max-md:text-md max-sm:text-md'>
              Online Food Ordering App is a web-based platform designed for users to browse restaurants, view menus, place food orders, and manage deliveries seamlessly.<br />
              <ul className='list-disc text-md px-4 text-mds max-sm:text-sm'>
                <li className='font-bold'>User-friendly interface with React and Tailwind CSS.</li>
                <li className='font-bold'>Backend (Node.js & Express.js): User authentication, API endpoints, order management.</li>
                <li className='font-bold'>Database (MongoDB): Storing user information, maintaining restaurant details, order records.</li>
                <li className='font-bold'>Additional Features: Payment integration and admin dashboard.</li>
              </ul>
            </p>
          </div>

          <div className='hover-animation1 max-sm:flex justify-center items-center'>
            <img src={Project4} className='max-sm:w-4/5 items-center' />
          </div>
          <div className='hover-animation1 max-sm:px-4'>
            <h3 className='text text-3xl font-bold text-slate-950'>Namma Museum Guide</h3>
            <p className='text-xl text-slate-700 mt-3 max-md:text-md max-sm:text-md'>
              Namma Museum Guide is a React-based web application that offers users an interactive platform to explore museum information and book tickets using a chatbot system.<br />
              <ul className='list-disc text-md px-4 text-mds max-sm:text-sm'>
                <li className='font-bold'>Built using React JS and Tailwind CSS for a responsive and interactive UI.</li>
                <li className='font-bold'>Integrated chatbot feature for seamless ticket booking and guided exploration.</li>
                <li className='font-bold'>Dynamic components and routing using React Router for smooth navigation.</li>
                <li className='font-bold'>Content-rich design showcasing exhibits, timings, and museum highlights.</li>
              </ul>
            </p>
          </div>

          <div className='max-sm:flex justify-center items-center'>
            <img src={Project1} className='max-sm:w-4/5 items-center bg-gray-400' />
          </div>
          <div className='max-sm:px-2 hover:text-6xl hover:animate-fadeInLeft'>
            <h3 className='text text-3xl font-bold text-slate-950'>E-book Store</h3>
            <p className='text-xl text-slate-700 mt-3 max-md:text-md max-sm:text-md'>
              A comprehensive platform for browsing, purchasing, and reading e-books online.<br />
              <ul className='list-disc text-md px-4 text-mds max-sm:text-sm'>
                <li className='font-bold'>Cloud-based storage for saving purchased books, accessible from any device.</li>
                <li className='font-bold'>Responsive design for smooth experiences across devices using React and Tailwind CSS.</li>
                <li className='font-bold'>Backend (Node.js & Express.js): User authentication, API endpoints, order management.</li>
                <li className='font-bold'>Database (MongoDB): Stores user info, book records, and purchase history.</li>
              </ul>
            </p>
          </div>

          <div className='max-sm:flex justify-center items-center'>
            <img src={Project3} className='max-sm:w-[70%] w-[550px] md:h-[350px] items-center animate__animated animate-fadeInLeft' />
          </div>
          <div className='text max-sm:px-4'>
            <h3 className='text text-3xl font-bold text-slate-950'>Other Projects</h3>
            <p className='text-xl text-slate-700 mt-3 py-6 px-6 rounded'>
              Developed a Live Scoreboard Application for real-time sports updates, a Blogging Application for creating and managing content, and a Live Chat Application for instant messaging, all leveraging the MERN stack. These projects feature dynamic user interfaces, seamless real-time communication using Socket.IO, and robust backend systems with secure user authentication. Focused on delivering scalable, responsive, and user-friendly solutions tailored to diverse use cases.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;