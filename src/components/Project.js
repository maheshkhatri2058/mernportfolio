import { motion } from "motion/react";
import React from 'react';
import Project2 from '../assets/img/project1.gif';
import Project1 from '../assets/img/project2.gif';
import Project3 from '../assets/img/project3.gif';

const Project = () => {
  return (
    <div className="animate__animated animate__zoomIn">
        <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
              
              <div className='bg-white text-black'>
      <h1 className='text-center text-amber-500 text-3xl font-bold py-4'>My Projects</h1>
      <p className='p-4 text-xl'> 
      Developed and implemented full-stack web applications leveraging the MERN Stack (MongoDB, Express.js, React, Node.js), showcasing expertise in building responsive and dynamic user interfaces. Designed backend APIs, integrated databases, and ensured seamless data flow across systems. Projects involved utilizing Java and Python for backend services and algorithmic problem-solving. Demonstrated proficiency in Data Structures and Algorithms (DSA) to optimize application performance and scalability. Collaborated on end-to-end development, from conceptualization to deployment, focusing on clean, maintainable code and user-centric design.In every project, I focus on delivering seamless user experiences, robust functionality, and scalable solutions that align with modern technological demands.


      </p>
    </div>
      <div className='grid grid-cols-2 gap-4 space-y-8 max-md:flex flex-col bg-white p-4' id='projects'>
         <div className='hover-animation1 max-sm:flex justify-center items-center'>
          <img src={Project2} className='max-sm:w-4/5 items-center'></img>
         </div>
         <div className='hover-animation1 max-sm:px-4'>
          <h3 className='text text-3xl font-bold text-slate-950'>Food Ordering System</h3>
          <p className='text-xl text-slate-700 mt-3 max-md:text-md max-sm:text-md' >Online Food Ordering App is a web-based platform designed for users to browse restaurants, view menus, place food orders, and manage deliveries seamlessly.<br></br>
          <ul className='list-disc text-md px-4 text-mds max-sm:text-sm'>
          <li className='font-bold'>User-friendly interface with React and tailwind CSS.</li>
          <li className='font-bold'>Backend (Node.js & Express.js): User authentication,Api End point,Order Management.</li>
          <li className='font-bold'>Database (MongoDB):Storing User information, maintain resturant details,order records.</li>
          <li className='font-bold'>Additional Features:Payment Integration and Admin Dashboard.</li>


          </ul>
        </p>
         </div>
         <div className='max-sm:flex justify-center items-center'>
         <img src={Project1}  className='max-sm:w-4/5 items-center bg-gray-400'></img>
         </div>
         <div className='max-sm:px-2 hover:text-6xl hover:animate-fadeInLeft'>
          <h3 className="text text-3xl font-bold text-slate-950">E-book Store</h3>
          <p className='text-xl text-slate-700 mt-3 max-md:text-md max-sm:text-md' >
          A comprehensive platform for browsing, purchasing, and reading e-books online. Features include user authentication, a searchable library of e-books, personalized recommendations, and a responsive design for seamless reading across devices. Built with the MERN stack, it supports cloud-based storage for user libraries, ensuring an engaging and user-friendly experience.
           <br></br>
          <ul className='list-disc text-md px-4 text-mds max-sm:text-sm'>
          <li className='font-bold'>Cloud Storage: Cloud-based storage for saving purchased books, enabling users to access their library from any device..</li>
          <li className='font-bold'>Responsive Design: A mobile-friendly interface, ensuring smooth and optimized reading experiences across different devices (desktop, tablet, mobile) bu susing react and tailwind CSS
          .</li>
          <li className='font-bold'>Backend (Node.js & Express.js): User authentication,Api End point,Order Management.</li>
          <li className='font-bold'>Database (MongoDB):Storing User information, maintain resturant details,order records.</li>
         
      </ul>
        </p>
         </div>
         <div className='max-sm:flex justify-center items-center'>
         <img src={Project3}  className='max-sm:w-[70%]  w-[550px] md:h-[350px] items-center  animate__animated animate-fadeInLeft'></img>
         </div>
         <div className='text max-sm:px-4'>
          <h3 className='text text-3xl font-bold text-slate-950'>Other Projects</h3>
          <p className='text-xl text-slate-700 mt-3  py-6 px-6 rounded'>
          Developed a Live Scoreboard Application for real-time sports updates, a Blogging Application for creating and managing content, and a Live Chat Application for instant messaging, all leveraging the MERN stack. These projects feature dynamic user interfaces, seamless real-time communication using Socket.IO, and robust backend systems with secure user authentication. Focused on delivering scalable, responsive, and user-friendly solutions tailored to diverse use cases.
           </p>
         </div>
          </div>
      </motion.div>

      </div>
  )
}
export default Project;
