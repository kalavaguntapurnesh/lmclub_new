
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";
import NewYear from "../assets/newyear.jpg";
import Musicfest from "../assets/musicfest.jpg";
import Meetup from "../assets/meetup.jpg";
import Conferencemeeting from "../assets/conferencemeeting.jpg";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import dayjs from 'dayjs';
import { IoIosClose } from 'react-icons/io';
import eye from "../assets/Eye.svg";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";


const Events = () => {
 
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const categories = ['Coupons/Discount', 'Events', 'Dining', 'Emergency Information', 'Product'];
  
    // Fetch data from API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/beehive/fetching-post');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    // Filter posts based on search, category, and date
  const filteredPosts = posts.filter((post) => {
    const postName = post.postName ? post.postName.toLowerCase() : '';
    const eventName = post.eventName ? post.eventName.toLowerCase() : '';
    const category = post.category ? post.category.toLowerCase() : '';
    const query = search.toLowerCase();  
  
    // Date filtering (if selectedDate is provided)
    const postDate = post.createdAt ? dayjs(post.eventStartDate).format('YYYY-MM-DD') : '';
    const isDateMatch = selectedDate ? postDate === selectedDate : true;
  
    return (
      (postName.includes(query) || eventName.includes(query) || category.includes(query)) &&
      (category.includes(selectedCategory.toLowerCase()) || !selectedCategory) &&
      isDateMatch
    );
  });
  
  
    const openModal = (post) => {
      setSelectedPost(post);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setSelectedPost(null);
    };
  
    const style = document.createElement("style");
    style.innerHTML = `
      .swal-custom-ok-button {
        background-color:rgb(27, 202, 103); /* Custom color */
        color:white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
      }
  
      .swal-custom-ok-button:hover {
        background-color:rgb(18, 91, 25); /* Hover color */
      }
    `;
    document.head.appendChild(style);

    const handleViewDetailsClick = ()=>{
          Swal.fire({
                          html: `
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                     <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                         <img src="${Logo}" alt="Logo" 
                                              style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                                            
                                               <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                                   <span style="color: black;">LM</span>
                                                   <span style="color: rgb(37, 218, 73);">Club</span>
                                               </h4>
                                     </div>
                              
                                    <div style="text-align: center; font-size: 22px;  color: #333; margin-bottom: 20px;">
                                     <p>You haven't logged in. </p>
                                   </div> 
                                   <div style=" ;">
                                      <a href="https://www.lmclub.club/login" style="display: inline-block; padding: 14px 20px; background-color: green; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; text-align: center;">Please Login</a>
                                    </div>
                                </div>
                               `,
                               showConfirmButton: false,
                               
                                footer: `
                                <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
                              `,
                          // customClass: {
                          //   confirmButton: "swal-custom-ok-button",
                            
                          // },
                        });
    }

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-center">
                <div className="h-4 w-1 bg-green-500"></div>
                <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                  Upcoming Events
                </h1>
              </div>
              <h1 className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                Join us for exciting networking opportunities
              </h1>
              <p className="text-gray-600 text-center">
                Stay informed, upcoming occasions, major announcements, key
                happenings, upcoming conferences, networking opportunities,
                don’t miss out!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2">
           <div className="relative">
             <div className="w-full">
               <div className="max-w-[1400px] w-full mx-auto h-auto lg:px-40 px-4">
                 <div className="p-4">
                   {/* <div className="space-y-2 w-full px-4 flex items-center justify-center">
                     <p className="lg:text-3xl text-2xl font-bold lg:text-start text-center">
                       <span className="text-green-500">Beehive</span> Posts
                     </p>
                   </div> */}
     
                   <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 gap-3">
                     {/* Search Bar */}
                     <div className="relative">
                       <input
                         type="text"
                         name="search bar"
                         placeholder="Search by post name or event name"
                         value={search}
                         onChange={(e) => setSearch(e.target.value)}
                         className="flex px-4 pl-12 w-full md:w-[500px] py-3 rounded border border-green-500 overflow-hidden max-w-md focus:outline-[#1a1a1a]"
                       />
                         <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                     </div>
     
     
                     {/* Category Filter */}
                     <select
                       className="border px-5 py-3.5 rounded mt-4 md:mt-0 w-full md:w-auto"
                       value={selectedCategory}
                       onChange={(e) => setSelectedCategory(e.target.value)}
                     >
                       <option value="">Select Category</option>
                       {categories.map((category) => (
                         <option key={category} value={category}>
                           {category}
                         </option>
                       ))}
                     </select>
     
                     {/* Date Filter */}
                     <input
                       type="date"
                       className="px-4 py-2.5 border border-gray-500 rounded mt-4 md:mt-0 w-full md:w-auto"
                       value={selectedDate}
                       onChange={(e) => setSelectedDate(e.target.value)}
                     />
                   </div>
     
                   <div className="overflow-x-auto mt-5">
                     <table className="w-full border border-gray-100">
                       <thead>
                         <tr className="bg-green-400">
                           <th className="border border-gray-300 px-4 py-2">Category</th>
                           <th className="border border-gray-300 px-4 py-2">Post Name/Event Name</th>
                           <th className="border border-gray-300 px-4 py-2">Picture/Videos</th>
                           <th className="border border-gray-300 px-4 py-2">View More Details</th>
                         </tr>
                       </thead>
                       <tbody>
                         {filteredPosts.length > 0 ? (
                           filteredPosts.map((post, index) => (
                             <tr key={index} className="hover:bg-gray-100">
                               <td className="border text-center border-gray-300 px-4 py-2 text-neutral-800 text-sm">
                                 {post.category}
                               </td>
                               <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                                 {post.postName || post.eventName}
                               </td>
                               <td className="border text-center border-gray-300 px-4 py-2">
                                 {post.image ? (
                                   <img src={post.image} alt="Post" className="w-16 h-16 object-cover mx-auto" />
                                 ) : (
                                   'No Image'
                                 )}
                               </td>
                               <td className="border text-center border-gray-300 px-4 py-2">
                                 <button
                                  //  onClick={() => openModal(post)}
                                  onClick={handleViewDetailsClick}
                                   className="text-green-500 hover:text-green-700"
                                 >
                                   <img src={eye} alt="edit" className="w-10 h-10" />
                                 </button>
                               </td>
                             </tr>
                           ))
                         ) : (
                           <tr>
                             <td colSpan="4" className="text-center py-4">
                               No posts found
                             </td>
                           </tr>
                         )}
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
             </div>
           </div>
     
           {/* Modal to show full details of selected post */}
           {showModal && selectedPost && selectedPost.category === 'Events' && (
             <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
               <div className="bg-white p-6 rounded shadow w-[90%] sm:w-[600px] z-20">
                 <div className="flex flex-row justify-between items-center">
                   <h2 className="text-lg font-semibold">Post Details</h2>
                   <IoIosClose onClick={closeModal} className="w-8 h-8 cursor-pointer" />
                 </div>
                 <div className="border-b border-gray-200 pt-2"></div>
     
                 <div className="grid grid-cols-2 gap-6 pt-8 text-gray-600">
                   {/* <p>Post Name:</p>
                   <p className="font-light">{selectedPost.postName}</p> */}
                   <p>Event Name:</p>
                   <p className="font-light">{selectedPost.eventName}</p>
                   <p>Category:</p>
                   <p className="font-light">{selectedPost.category}</p>
                   <p>Event Start Date:</p>
                   <p className="font-light">{selectedPost.eventStartDate || 'N/A'}</p>
                   <p>Event End Date:</p>
                   <p className="font-light">{selectedPost.eventEndDate || 'N/A'}</p>
                   <p>Event Start Time:</p>
                   <p className="font-light">{selectedPost.eventStartTime || 'N/A'}</p>
                   <p>Event End Time:</p>
                   <p className="font-light">{selectedPost.eventEndTime || 'N/A'}</p>
                   <p>Company Name:</p>
                   <p className="font-light">{selectedPost.companyName}</p>
                   
                   <p>Description:</p>
                   <p className="font-light">{selectedPost.description}</p>
                   
                 </div>
     
                 <div className="flex justify-center mt-6">
                   <button
                     onClick={closeModal}
                     className="bg-green-400 text-white px-12 py-2 rounded hover:bg-green-600"
                   >
                     Close
                   </button>
                 </div>
               </div>
             </div>
           )}
     
         {showModal && selectedPost && selectedPost.category === 'Coupons/Discount' && (
             <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
               <div className="bg-white p-6 rounded shadow w-[90%] sm:w-[600px] z-20">
                 <div className="flex flex-row justify-between items-center">
                   <h2 className="text-lg font-semibold">Post Details</h2>
                   <IoIosClose onClick={closeModal} className="w-8 h-8 cursor-pointer" />
                 </div>
                 <div className="border-b border-gray-200 pt-2"></div>
     
                 <div className="grid grid-cols-2 gap-6 pt-8 text-gray-600">
                   <p>Post Name:</p>
                   <p className="font-light">{selectedPost.postName}</p>
                   <p>Category:</p>
                   <p className="font-light">{selectedPost.category}</p>
                   <p>Description:</p>
                   <p className="font-light">{selectedPost.description}</p>
                   <p>Coupon Code:</p>
                   <p className="font-light">{selectedPost.couponCode || 'N/A'}</p>
                   <p>Valid Upto:</p>
                   <p className="font-light">{selectedPost.validUpto || 'N/A'}</p>
                 </div>
     
                 <div className="flex justify-center mt-6">
                   <button
                     onClick={closeModal}
                     className="bg-green-400 text-white px-12 py-2 rounded hover:bg-green-600"
                   >
                     Close
                   </button>
                 </div>
               </div>
             </div>
           )}
     
     {showModal && selectedPost && (selectedPost.category === 'Dining' || selectedPost.category === 'Emergency Information' || selectedPost.category === 'Product' ) && (
             <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
               <div className="bg-white p-6 rounded shadow w-[90%] sm:w-[600px] z-20">
                 <div className="flex flex-row justify-between items-center">
                   <h2 className="text-lg font-semibold">Post Details</h2>
                   <IoIosClose onClick={closeModal} className="w-8 h-8 cursor-pointer" />
                 </div>
                 <div className="border-b border-gray-200 pt-2"></div>
     
                 <div className="grid grid-cols-2 gap-6 pt-8 text-gray-600">
                   <p>Post Name:</p>
                   <p className="font-light">{selectedPost.postName}</p>
                   <p>Category:</p>
                   <p className="font-light">{selectedPost.category}</p>
                   <p>Description:</p>
                   <p className="font-light">{selectedPost.description}</p>
                  </div>
     
                 <div className="flex justify-center mt-6">
                   <button
                     onClick={closeModal}
                     className="bg-green-400 text-white px-12 py-2 rounded hover:bg-green-600"
                   >
                     Close
                   </button>
                 </div>
               </div>
             </div>
           )}
     
           
         </div>

      <Footer />
    </>
  );
};

export default Events;