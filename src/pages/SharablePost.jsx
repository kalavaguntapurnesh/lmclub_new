
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Events from './Events'
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";
import Conferencemeeting from "../assets/conferencemeeting.jpg";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import dayjs from 'dayjs';
import { IoIosClose } from 'react-icons/io';
import eye from "../assets/Eye.svg";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
import { useContext } from 'react';
import { AppContext } from "./../context/AppContext";

const SharablePost = () => {
  const { userData, token, backendUrl } = useContext(AppContext);
    const postId = useParams();
    console.log(postId.postId);
    const navigate = useNavigate();
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
        const response = await axios.get(backendUrl + `/api/beehive/fetch-post-details/${postId.postId}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    // Function to get the specific post
    console.log(posts);
    
    // const [specificPost, setSpecificPost] = useState(null);

    // useEffect(() => {
    //     if (posts.length > 0) {
    //         const foundPost = posts.find((post) => post._id ===  postId.postId);
    //         setSpecificPost(foundPost || null);
    //     }
    // }, [posts, postId.postId]);

    // if (!specificPost) {
    //     return <div>Loading...</div>;
    // }


    const handleMoreEventsClick = async()=>{
        navigate('/events')
    }
 
    // console.log("specificPost : ", specificPost);

    // Filter posts based on search, category, and date
  // const filteredPosts = posts.filter((post) => {
  //   const postName = post.postName ? post.postName.toLowerCase() : '';
  //   const eventName = post.eventName ? post.eventName.toLowerCase() : '';
  //   const category = post.category ? post.category.toLowerCase() : '';
  //   const query = search.toLowerCase();  
  
  //   // Date filtering (if selectedDate is provided)
  //   const postDate = post.createdAt ? dayjs(post.eventStartDate).format('YYYY-MM-DD') : '';
  //   const isDateMatch = selectedDate ? postDate === selectedDate : true;
  
  //   return (
  //     (postName.includes(query) || eventName.includes(query) || category.includes(query)) &&
  //     (category.includes(selectedCategory.toLowerCase()) || !selectedCategory) &&
  //     isDateMatch
  //   );
  // });
  
  
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
        });
    }

  return (
    <div>
        <NavBar/>
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
                     {posts && posts.data ? (
                           <tr className="hover:bg-gray-100">
                             <td className="border text-center border-gray-300 px-4 py-2 text-neutral-800 text-sm">
                               {posts?.data.category || N/A}
                             </td>
                             <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                               {posts?.data.postName || posts?.data.eventName || N/A}
                             </td>
                             <td className="border text-center border-gray-300 px-4 py-2">
                               {posts?.data.image ? (
                                 <img src={posts?.data.image} alt="Post" className="w-16 h-16 object-cover mx-auto" />
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
                <div className='text-center mt-4 hover:text-blue-600 hover:underline cursor-pointer'>
                <button className='hover:underline' onClick={handleMoreEventsClick}>
                    Explore More Events ...
                </button>

                </div>
               </div>
             </div>
           </div>
         </div>
      </div>
      
     
  
        <Footer/>
    </div>
  )
}

export default SharablePost