import React, {useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import eye from "../assets/Eye.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/LMDarkLogo.webp";
import { AppContext } from "./../context/AppContext";
import dayjs from 'dayjs';
import { FaHeart, FaSave, FaUserAlt } from 'react-icons/fa'; 
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
import { CiMenuBurger } from "react-icons/ci";
import beehive from "../assets/beehive.webp";
import load from "../assets/loading.png"

const BeehiveMyPosts = () => {

  const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const { userData, token, backendUrl } = useContext(AppContext);
    const navigate = useNavigate();
    const categories = ['Coupons/Discount', 'Events', 'Dining', 'Emergency Information', 'Product'];
  
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    // Fetch data from API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(backendUrl + `/api/beehive/fetching-each-user-posts/${userData._id}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    useEffect(() => {
      fetchPosts();
    }, [userData._id]);
  
    // Filter posts based on search, category, and date
    const filteredPosts = posts.filter((post) => {
      const postName = post.postName ? post.postName.toLowerCase() : '';
      const eventName = post.eventName ? post.eventName.toLowerCase() : '';
      const category = post.category ? post.category.toLowerCase() : '';
      const query = search.toLowerCase();
    
      const postDate = post.eventStartDate ? post.eventStartDate.slice(0, 10) : ''; 
      
      console.log('Post Date:', postDate); // For debugging
    
      // Normalize the frontend selected dates (strip time to only date)
      const selectedStart = selectedStartDate ? selectedStartDate.slice(0, 10) : null;
      const selectedEnd = selectedEndDate ? selectedEndDate.slice(0, 10) : null;
    
      // Check if postDate is within the selected date range
      const isDateMatch = (selectedStart && selectedEnd)
        ? (postDate >= selectedStart && postDate <= selectedEnd) 
        : true; 
    
      return (
        (postName.includes(query) || eventName.includes(query) || category.includes(query)) &&
        (category.includes(selectedCategory.toLowerCase()) || !selectedCategory) &&
        isDateMatch
      );
    });
    
    // Pagination logic: slice the filteredPosts array
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Handle modal open and close
    const openModal = (post) => {
      setSelectedPost(post);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setSelectedPost(null);
    };
  
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(filteredPosts.length / rowsPerPage);
  
    // Fetch likes and views for each post when component mounts or when currentPosts change
 
    const [likes, setLikes] = useState({});
    const [views, setViews] = useState({});
    const [totalLikes, setTotalLikes] = useState(0);
    const [totalViews, setTotalViews] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const fetchedPosts = useRef(new Set()); // Store already fetched posts
    
    useEffect(() => {
      const fetchCounts = async () => {
        setLoading(true);
        try {
          const newPosts = currentPosts.filter(post => !fetchedPosts.current.has(post._id));
    
          if (newPosts.length === 0) {
            setLoading(false);
            return; // Avoid fetching already fetched posts
          }
    
          const likesData = await Promise.all(
            newPosts.map(async (post) => {
              const response = await axios.get(`${backendUrl}/api/beehive/fetching-likes-count/${post._id}`);
              return { postId: post._id, likes: response.data.likes };
            })
          );
    
          const viewsData = await Promise.all(
            newPosts.map(async (post) => {
              const response = await axios.get(`${backendUrl}/api/beehive/fetching-views-count/${post._id}`);
              return { postId: post._id, views: response.data.views };
            })
          );
    
          let totalLikesCount = totalLikes;
          let totalViewsCount = totalViews;
    
          const updatedLikes = { ...likes };
          const updatedViews = { ...views };
    
          likesData.forEach(({ postId, likes }) => {
            updatedLikes[postId] = likes;
            totalLikesCount += likes;
          });
    
          viewsData.forEach(({ postId, views }) => {
            updatedViews[postId] = views;
            totalViewsCount += views;
          });
    
          setLikes(updatedLikes);
          setViews(updatedViews);
          setTotalLikes(totalLikesCount);
          setTotalViews(totalViewsCount);
    
          // Mark posts as fetched
          newPosts.forEach(post => fetchedPosts.current.add(post._id));
    
        } catch (error) {
          console.error("Error fetching likes or views count:", error);
        } finally {
          setLoading(false);
        }
      };
    
      if (currentPosts.length > 0) {
        fetchCounts();
      }
    }, [currentPosts]); // Only fetch on `currentPosts` change
    

  //   const [totalLikes, setTotalLikes] = useState(0); 
  //   const [loading, setLoading] = useState(true); 
  //   const [error, setError] = useState(null); 

  //   useEffect(() => {
  //     const fetchTotalLikes = async () => {
  //     try {
  //       setLoading(true); 
  //       const response = await axios.get(backendUrl + `/api/beehive/total-likes-per-user/${userData._id}`);
  //       setTotalLikes(response.data.totalLikes); 
  //     } catch (error) {
  //       console.error('Error fetching total likes:', error);
  //       setError('Error fetching total likes'); 
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (userData._id) {
  //     fetchTotalLikes(); 
  //   }
  // }, [userData._id]);
 
  console.log(currentPosts)

    // media opening as a pop-up
  
      const [isMediaOpen, setIsMediaOpen] = useState(false);
      const [mediaType, setMediaType] = useState(null);
    
      const openMediaModal = (media) => {
        setMediaType(media);
        setIsMediaOpen(true);
      };
    
      const closeMediaModal = () => {
        setIsMediaOpen(false);
        setMediaType(null);
      };

  return (

 <div className="pt-2">
      <div className="relative">
        <div className="w-full">
          <div className="max-w-[1200px] w-full mx-auto h-auto lg:px-35 px-4">
            <div className="p-4">
              {/* <div className="space-y-2 w-full px-4 flex items-center">
                    <div className="flex justify-center gap-3 text-center mt-4 items-center w-full ">
                      <p className="lg:text-3xl text-2xl font-bold  text-center">
                        <span className="text-green-500">My</span> Posts
                      </p>
                    </div>
                </div> */}

                <div className="flex justify-between gap-3 text-center mt-4 items-center w-full shadow-lg p-4 bg-white flex-col lg:flex-row">
                  {/* Image Section
                  <div className="flex justify-center items-center mb-4 lg:mb-0">
                    <img
                      src={beehive}
                      alt="about_one"
                      className="w-[72px] h-[72px]"
                    />
                  </div> */}

                  {/* left arrow */}
                    <p className="lg:text-3xl text-2xl font-bold lg:text-start text-center">
                      <span onClick={()=>{navigate('/beehive-workflow/view-posts')}} className="text-green-500 cursor-pointer "> < FaArrowLeftLong/> </span> 
                    </p>

                  {/* Text Section */}
                  <p className="lg:text-3xl text-2xl font-bold lg:text-start text-center">
                    <span className="text-green-500">My</span> Posts
                  </p>

                  {/* Icons and Stats Section */}
                  <div className="flex flex-col gap-1 lg:left-5 text-center lg:text-left">
                    <p className="text-lg">
                      Total Likes : <span>{totalLikes}</span>
                    </p>
                    <p className="text-lg">
                      Total Views : <span>{totalViews}</span>
                    </p>
                  </div>
                </div>
               </div>
                
              

              <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 gap-3">
                {/* 1st Row - Search Bar */}
                <div className="w-full md:w-[500px]">
                  <div className="relative">
                    <input
                      type="text"
                      name="search bar"
                      placeholder="Post Name/Event Name"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setCurrentPage(1) }}
                      className="flex px-4 pl-12 w-full py-3 rounded border border-green-500 overflow-hidden max-w-md focus:outline-[#1a1a1a]"
                    />
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>

                {/* 2nd Row - Page Box and Category Filter */}
                <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-3">
                  {/* Rows per page */}
                  <div className="flex w-full md:w-auto">
                    <select
                      className="border px-4 py-3 rounded"
                      value={rowsPerPage}
                      onChange={(e) => {
                        setRowsPerPage(parseInt(e.target.value));
                        setCurrentPage(1);
                      }}
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={40}>40</option>
                    </select>
                  </div>

                  {/* Category Filter */}
                  <div className="flex w-full md:w-auto">
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
                  </div>
                </div>

                {/* 3rd Row - Date Filters */}
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-3">
                  {/* Start Date */}
                  <div className="w-full md:w-auto">
                    <label className="text-gray-700 text-sm font-medium">Start Date</label>
                    <input
                      type="date"
                      className="px-4 py-1 border border-gray-500 rounded mt-0.5 w-full"
                      value={selectedStartDate}
                      onChange={(e) => setSelectedStartDate(e.target.value)}
                    />
                  </div>

                  {/* End Date */}
                  <div className="w-full md:w-auto">
                    <label className="text-gray-700 text-sm font-medium">End Date</label>
                    <input
                      type="date"
                      className="px-4 py-1 border border-gray-500 rounded mt-0.5 w-full"
                      value={selectedEndDate}
                      onChange={(e) => setSelectedEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Table to display posts */}
              <div className="overflow-x-auto mt-5 lg:px-20 px-1">
                <table className="w-full border border-gray-100">
                  <thead>
                    <tr className="bg-green-400">
                      <th className="border border-gray-300 px-4 py-2">Category</th>
                      <th className="border border-gray-300 px-4 py-2">Post Name/Event Name</th>
                      <th className="border border-gray-300 px-4 py-2">Picture/Videos</th>
                      <th className="border border-gray-300 px-4 py-2">View More Details</th>
                      <th className="border border-gray-300 px-4 py-2">Likes</th>
                      <th className="border border-gray-300 px-4 py-2">Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPosts.length > 0 ? (
                      currentPosts.map((post, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="border text-center border-gray-300 px-4 py-2 text-neutral-800 text-sm">
                            {post.category}
                          </td>
                          <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                          <span onClick={()=>openModal(post)} className='cursor-pointer hover:underline hover:text-blue-600'> {post.postName || post.eventName} </span>
                          </td>
                          <td className="border text-center border-gray-300 px-4 py-2">
                            {/* {post.image ? (
                              <img src={post.image} alt="Post" className="w-16 h-16 object-cover mx-auto" />
                            ) : (
                              'No Image'
                            )} */}

{post.image ? (
                              post.image.includes("video") ? (  // ✅ Check if it's a video
                                <video 
                                  controls 
                                  muted 
                                  preload="metadata"
                                  className="w-[150px] mx-auto h-[75px] object-cover"
                                  onClick={() => openMediaModal({ type: "video", src: post.image })}
                                >
                                  <source src={post.image} type="video/mp4" />
                                  <source src={post.image.replace('.mp4', '.webm')} type="video/webm" />
                                  <source src={post.image.replace('.mp4', '.ogg')} type="video/ogg" />
                                  Your browser does not support the video tag.
                                </video>
                              ) : (
                                <img 
                                src={post.image} 
                                alt="Post" 
                                className="w-[150px] mx-auto h-[75px] object-cover cursor-pointer" 
                                onClick={() => openMediaModal({ type: "image", src: post.image })}
                                />
                              )
                            ) : (
                              <p>No Media</p>
                            )}

                          </td>
                          <td className="border text-center border-gray-300 px-4 py-2">
                            <button
                              onClick={() => openModal(post)}
                              className="text-green-500 hover:text-green-700"
                            >
                              <img src={eye} alt="edit" className="w-10 h-10" />
                            </button>
                          </td>
                          <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                            {/* {likes[post._id] || 0}  */}
                            {loading ? <img src={load} alt="Loading..." className="w-10 h-10 mx-auto" /> : likes[post._id] || 0}

                          </td>
                          <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                          {/* {views[post._id] || 0}  */}
                          {loading ? <img src={load} alt="Loading..." className="w-10 h-10 mx-auto" />  : views[post._id] || 0}

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

              {/* Pagination */}
              <div className="flex justify-center mt-6 gap-1.5">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-white text-gray-500'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      

    {/* Modal to show full details of selected post */}
    {showModal && selectedPost && selectedPost.category === 'Events' && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow w-[90%] sm:w-[600px] z-20">
            <div className="flex flex-row justify-between items-center">
              <img src={Logo} alt="logo" className="w-[52px] h-auto" />
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
              {/* <p>Images/Videos:</p>
              <p className="font-light "> {selectedPost.image ? (
                 <img src={selectedPost.image} alt="Post" className="w-[75px] h-[75px] object-cover" />
               ) : (
                 'No Image'
               )} </p> */}
               <p>Images/Videos:</p>
                {selectedPost.image ? (
                  selectedPost.image.includes("video") ? (  
                    <video 
                    controls 
                    className="w-[150px] h-[150px] object-cover cursor-pointer"
                    onClick={() => openMediaModal({ type: "video", src: selectedPost.image })}
                    >
                      <source src={selectedPost.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                    src={selectedPost.image} 
                    alt="Post" 
                    className="w-[75px] h-[75px] object-cover cursor-pointer" 
                    onClick={() => openMediaModal({ type: "image", src: selectedPost.image })}
                    />
                  )
                ) : (
                  <p>No Media</p>
                )}

              <p>Event Start Date:</p>
              <p className="font-light">{selectedPost.eventStartDate.slice(0, 10) || 'N/A'}</p>
              <p>Event End Date:</p>
              <p className="font-light">{selectedPost.eventEndDate.slice(0, 10) || 'N/A'}</p>
              <p>Event Start Time:</p>
              <p className="font-light">{selectedPost.eventStartTime || 'N/A'}</p>
              <p>Event End Time:</p>
              <p className="font-light">{selectedPost.eventEndTime || 'N/A'}</p>
              <p>Company Name:</p>
              <p className="font-light">{selectedPost.companyName}</p>
              
              <p>Description:</p>
              <p className="font-light">{selectedPost.description}</p>
              <p>Location:</p>
              <p className="font-light">{selectedPost.location}</p>
              
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-green-400 text-white px-12 py-2 rounded hover:bg-green-600"
              >
                Close
              </button>
            </div>
            <div className="text-center text-xs mt-6 mb-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}

    {showModal && selectedPost && selectedPost.category === 'Coupons/Discount' && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow w-[90%] sm:w-[600px] z-20">
            <div className="flex flex-row justify-between items-center">
              <img src={Logo} alt="logo" className="w-[52px] h-auto" />
              <h2 className="text-lg font-semibold">Post Details</h2>
              <IoIosClose onClick={closeModal} className="w-8 h-8 cursor-pointer" />
            </div>
            <div className="border-b border-gray-200 pt-2"></div>

            <div className="grid grid-cols-2 gap-6 pt-8 text-gray-600">
              <p>Post Name:</p>
              <p className="font-light">{selectedPost.postName}</p>
              <p>Category:</p>
              <p className="font-light">{selectedPost.category}</p>
              {/* <p>Images/Videos:</p>
              <p className="font-light "> {selectedPost.image ? (
                 <img src={selectedPost.image} alt="Post" className="w-[75px] h-[75px] object-cover" />
               ) : (
                 'No Image'
               )} </p> */}
               <p>Images/Videos:</p>
                {selectedPost.image ? (
                  selectedPost.image.includes("video") ? (  
                    <video 
                    controls 
                    className="w-[150px] h-[150px] object-cover cursor-pointer"
                    onClick={() => openMediaModal({ type: "video", src: selectedPost.image })}
                    >
                      <source src={selectedPost.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                    src={selectedPost.image} 
                    alt="Post" 
                    className="w-[75px] h-[75px] object-cover cursor-pointer" 
                    onClick={() => openMediaModal({ type: "image", src: selectedPost.image })}
                    />
                  )
                ) : (
                  <p>No Media</p>
                )}

              <p>Description:</p>
              <p className="font-light">{selectedPost.description}</p>
              <p>Coupon Code:</p>
              <p className="font-light">{selectedPost.couponCode || 'N/A'}</p>
              <p>Valid Upto:</p>
              <p className="font-light">{selectedPost.validUpto.slice(0, 10) || 'N/A'}</p>
              <p>Location:</p>
              <p className="font-light">{selectedPost.location}</p>
              
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-green-400 text-white px-12 py-2 rounded hover:bg-green-600"
              >
                Close
              </button>
            </div>
            <div className="text-center text-xs mt-6 mb-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}

      {showModal && selectedPost && (selectedPost.category === 'Dining' || selectedPost.category === 'Emergency Information' || selectedPost.category === 'Product' ) && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow w-[90%] sm:w-[600px] z-20">
            <div className="flex flex-row justify-between items-center">
              <img src={Logo} alt="logo" className="w-[52px] h-auto" />
              <h2 className="text-lg font-semibold">Post Details</h2>
              <IoIosClose onClick={closeModal} className="w-8 h-8 cursor-pointer" />
            </div>
            <div className="border-b border-gray-200 pt-2"></div>

            <div className="grid grid-cols-2 gap-6 pt-8 text-gray-600">
              <p>Post Name:</p>
              <p className="font-light">{selectedPost.postName}</p>
              <p>Category:</p>
              <p className="font-light">{selectedPost.category}</p>
              {/* <p>Images/Videos:</p>
              <p className="font-light "> {selectedPost.image ? (
                 <img src={selectedPost.image} alt="Post" className="w-[75px] h-[75px] object-cover" />
               ) : (
                 'No Image'
               )} </p> */}
               <p>Images/Videos:</p>
                {selectedPost.image ? (
                  selectedPost.image.includes("video") ? (  
                    <video 
                    controls 
                    className="w-[150px] h-[150px] object-cover cursor-pointer"
                    onClick={() => openMediaModal({ type: "video", src: selectedPost.image })}
                    >
                      <source src={selectedPost.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                    src={selectedPost.image} 
                    alt="Post" 
                    className="w-[75px] h-[75px] object-cover cursor-pointer" 
                    onClick={() => openMediaModal({ type: "image", src: selectedPost.image })}
                    />
                  )
                ) : (
                  <p>No Media</p>
                )}
              <p>Description:</p>
              <p className="font-light">{selectedPost.description}</p>
              <p>Location:</p>
              <p className="font-light">{selectedPost.location}</p>
              
             </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-green-400 text-white px-12 py-2 rounded hover:bg-green-600"
              >
                Close
              </button>
            </div>
            <div className="text-center text-xs mt-6 mb-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}

                  {/* Modal for Fullscreen Image/Video */}
                     {isMediaOpen && (
                     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                       <div className="flex flex-col gap-3 w-[95%] sm:w-[750px] h-[750px] bg-white rounded-lg shadow-lg p-6">
                         
                         {/* Header Section */}
                         <div className="flex flex-row justify-between items-center">
                           <img src={Logo} alt="logo" className="w-[60px] h-auto" />
                           <h2 className="text-xl font-semibold"> View Image / Video</h2>
                           <IoIosClose onClick={closeMediaModal} className="w-10 h-10 cursor-pointer" />
                         </div>
                         
                         <div className="border-b border-gray-300"></div>
               
                         {/* Media Section */}
                         <div className="flex justify-center items-center flex-1">
                           {mediaType.type === "video" ? (
               
                             <video controls autoPlay className="max-w-full max-h-[600px] rounded-lg">
                               <source src={mediaType.src} type="video/mp4" />
                               Your browser does not support the video tag.
                             </video>
                           ) : (
                             <img src={mediaType.src} alt="Fullscreen Media" className="max-w-full max-h-[600px] rounded-lg" />
                           )}
                         </div>
               
                         {/* Button Section */}
                         <div className="flex justify-center">
                           <button
                             onClick={closeMediaModal}
                             className="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-600 transition duration-200"
                           >
                             Close
                           </button>
                         </div>
               
                         {/* Footer Section */}
                         <div className="text-center text-xs text-gray-500 mt-2">
                           <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                         </div>
                       </div>
                     </div>
                   )}
               


    <div className="text-center text-xs mt-6 mb-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
    </div>
  );
};

export default BeehiveMyPosts