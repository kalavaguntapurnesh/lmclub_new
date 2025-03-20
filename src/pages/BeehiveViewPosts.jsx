import React, { useState, useEffect, useContext } from 'react';
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
import like from "../assets/like.png"
import save from "../assets/save.jpg"
import share from "../assets/share.png"
import liked from "../assets/like_red.png"
import saved from "../assets/saved.png"

const BeehiveViewPosts = () => {
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
      const response = await axios.get(backendUrl + '/api/beehive/fetching-post');
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


 const [viewedPosts, setViewedPosts] = useState(new Set());
  
  // Handle modal open and close
  const openModal = (post) => {
      
      incrementView(post._id);

    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredPosts.length / rowsPerPage);


  const [hovered, setHovered] = useState(null); // State to track which icon is being hovered

  const handleIconClick = (type) => {
    // Navigate based on the clicked icon type
    switch (type) {
      case 'liked':
        navigate('/beehive-workflow/view-posts/liked-posts');
        break;
      case 'saved':
        navigate('/beehive-workflow/view-posts/saved-posts');
        break;
      case 'myPosts':
        navigate('/beehive-workflow/view-posts/my-posts');
        break;
      default:
        break;
    }
  };


  const [likedPosts, setLikedPosts] = useState({}); 

  // Fetch the like status when the modal is opened
  useEffect(() => {
    if (showModal && selectedPost) {
      const fetchLikeStatus = async () => {
        try {
          const response = await axios.get(
            backendUrl + `/api/beehive/fetching-liked-posts/${selectedPost._id}/${userData._id}`
          );
          
          // Update the likedPosts state with the fetched like status
          setLikedPosts((prev) => ({
            ...prev,
            [selectedPost._id]: response.data.liked,
          }));
        } catch (error) {
          console.error("Error fetching like status:", error);
        }
      };
  
      fetchLikeStatus();
    }
  }, [showModal, selectedPost, userData, backendUrl]);
  
  
  // Increment like for a specific post

  const incrementLike = async (postId) => {
    if (likedPosts[postId]) {
      alert("You've already liked this post!");
      return; 
    }
    try {
      const response = await axios.post(backendUrl + `/api/beehive/increment-like`, {
        postId,
        userId: userData._id,
      });
  
      if (response.data.message === 'Like incremented successfully') {
        setLikedPosts((prev) => ({
          ...prev,
          [postId]: true, 
        }));
  
      }
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };
  


  const incrementView = async (postId) => {
    try {
        const response = await axios.post(backendUrl + `/api/beehive/increment-view`, {
            postId,
            userId: userData._id
        });
        console.log("views increment :", response);
        setViewedPosts(prev => new Set(prev).add(postId)); // Mark this post as viewed
    } catch (error) {
        console.log('Error incrementing view count: ', error);
    }
};

  const incrementShare = async()=>{
    try{
      await axios.post(backendUrl + `/api/beehive/increment-share`, {
        postId: selectedPost._id,
        userId: userData._id
      } 
      );
    }catch(error){
      console.log('Error incrementing like share: ', error)
    }
  }

  // const incrementSave = async()=>{
  //   try{
  //     await axios.post(backendUrl + `/api/beehive/increment-save`, {
  //       postId: selectedPost._id,
  //       userId: userData._id
  //     } 
  //     );
  //   }catch(error){
  //     console.log('Error incrementing like save: ', error)
  //   }
  // }

  const [savedPosts, setSavedPosts] = useState({});

  const toggleSave = async (postId) => {
    try {
      const response = await axios.post( backendUrl + '/api/beehive/adding-post-to-saved', {
        postId: postId,
        userId: userData._id, 
      });
  
      console.log(response.data.message);
      setSavedPosts(prevState => ({
        ...prevState,
        [postId]: !prevState[postId],
      }));
  
    } catch (error) {
      console.error("Error saving/unsaving post:", error);
    }
  };

    // Fetch the like status when the modal is opened
    useEffect(() => {
      if (showModal && selectedPost) {
        const fetchSavedStatus = async () => {
          try {
            const response = await axios.get(
              backendUrl + `/api/beehive/fetching-saved-posts/${selectedPost._id}/${userData._id}`
            );
            
            // Update the likedPosts state with the fetched like status
            setSavedPosts((prev) => ({
              ...prev,
              [selectedPost._id]: response.data.saved,
            }));
          } catch (error) {
            console.error("Error fetching like status:", error);
          }
        };
    
        fetchSavedStatus();
      }
    }, [showModal, selectedPost, userData, backendUrl]);
  
  return (
    <div className="pt-2">
      <div className="relative">
        <div className="w-full">
          <div className="max-w-[1200px] w-full mx-auto h-auto lg:px-35 px-4">
            <div className="p-4">
              <div className="space-y-2 w-full px-4 flex items-center">

                <div className="flex justify-between gap-3 text-center mt-4 items-center w-full  shadow-lg p-6 bg-white">

                    <p className="lg:text-3xl text-2xl font-bold lg:text-start text-center">
                        <span onClick={()=>{navigate('/beehive-workflow')}} className="text-green-500 cursor-pointer "> < FaArrowLeftLong/> </span> 
                    </p>
                    {/* <div className="flex justify-center items-center">
                        <img
                          src={beehive}
                          alt="about_one"
                          className="w-[72px] h-[72px]"
                        />
                     </div> */}

                      <p className="lg:text-3xl text-2xl font-bold lg:text-start text-center">
                        <span className="text-green-500">Beehive</span> Posts
                      </p>
                    
                    {/* Icons Section */}
                    <div className="flex gap-4">
                      <p
                        className="text-2xl cursor-pointer"
                        onClick={() => handleIconClick('myPosts')}
                        onMouseEnter={() => setHovered('myPosts')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {hovered === 'myPosts' ? (
                          <h1 className="text-green-500"> My Posts </h1>
                        ) : (
                          <h1> My Posts </h1>
                        )}
                      </p>

                      <p
                        className="text-2xl cursor-pointer"
                        onClick={() => handleIconClick('liked')}
                        onMouseEnter={() => setHovered('liked')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {hovered === 'liked' ? (
                          <h1 className="text-green-500"> Liked Posts </h1>
                        ) : (
                          <h1> Liked Posts  </h1>
                        )}
                      </p>

                      <p
                        className="text-2xl cursor-pointer"
                        onClick={() => handleIconClick('saved')}
                        onMouseEnter={() => setHovered('saved')}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {hovered === 'saved' ? (
                          <h1 className="text-green-500"> Saved Posts </h1>
                        ) : (
                          <h1> Saved Posts  </h1>
                        )}
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
                            {post.image ? (
                              <img src={post.image} alt="Post" className="w-16 h-16 object-cover mx-auto" />
                            ) : (
                              'No Image'
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
              <p>Event Start Date:</p>
              <p className="font-light">{selectedPost.eventStartDate.slice(0, 10) || 'N/A'} & {selectedPost.eventStartTime || 'N/A'} </p>
              {/* <p>Event Start Time:</p>
              <p className="font-light">{selectedPost.eventStartTime || 'N/A'}</p> */}
              <p>Event End Date:</p>
              <p className="font-light">{selectedPost.eventEndDate.slice(0, 10) || 'N/A'} & {selectedPost.eventEndTime || 'N/A'}</p>
              {/* <p>Event End Time:</p>
              <p className="font-light">{selectedPost.eventEndTime || 'N/A'}</p> */}
              <p>Company Name:</p>
              <p className="font-light">{selectedPost.companyName}</p>
              <p>Description:</p>
              <p className="font-light">{selectedPost.description}</p>
              <p>Location:</p>
              <p className="font-light">{selectedPost.location}</p>
              
            </div>

            <div className='flex items-center gap-[50px] p-6 '>
                <div className="flex justify-center items-center">
                  <img
                    src={likedPosts[selectedPost?._id] ? liked : like} 
                    alt="like"
                    className={`w-[35px] h-[35px] cursor-pointer ${likedPosts[selectedPost?._id] ? 'bg-red-700' : ''}`}
                    onClick={() => incrementLike(selectedPost?._id)} 
                  />
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={share}
                    alt="share"
                    className="w-[35px] h-[35px]"
                    onClick={incrementShare}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={savedPosts[selectedPost?._id] ? saved : save}
                    alt="save"
                    className="w-[35px] h-[35px] cursor-pointer"
                    onClick={() => toggleSave(selectedPost?._id)}  
                  />
                </div>
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
              <p>Description:</p>
              <p className="font-light">{selectedPost.description}</p>
              <p>Coupon Code:</p>
              <p className="font-light">{selectedPost.couponCode || 'N/A'}</p>
              <p>Valid Upto:</p>
              <p className="font-light">{selectedPost.validUpto.slice(0, 10) || 'N/A'}</p>
              <p>Location:</p>
              <p className="font-light">{selectedPost.location}</p>
              
            </div>

            <div className='flex items-center gap-[50px] p-6 '>
                <div className="flex justify-center items-center">
                  <img
                    src={likedPosts[selectedPost._id] ? liked : like} 
                    alt="like"
                    className={`w-[35px] h-[35px] cursor-pointer ${likedPosts[selectedPost._id] ? 'bg-red-700' : ''}`}
                    onClick={() => incrementLike(selectedPost._id)}t
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={share}
                    alt="share"
                    className="w-[35px] h-[35px]"
                    onClick={incrementShare}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={savedPosts[selectedPost?._id] ? saved : save}
                    alt="save"
                    className="w-[35px] h-[35px] cursor-pointer"
                    onClick={() => toggleSave(selectedPost?._id)}  
                  />
                </div>
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
              <p>Description:</p>
              <p className="font-light">{selectedPost.description}</p>
              <p>Location:</p>
              <p className="font-light">{selectedPost.location}</p>
              
             </div>

             <div className='flex items-center gap-[50px] p-6 '>
                <div className="flex justify-center items-center">
                  <img
                    src={likedPosts[selectedPost._id] ? liked : like} 
                    alt="like"
                    className={`w-[35px] h-[35px] cursor-pointer ${likedPosts[selectedPost._id] ? 'bg-red-700' : ''}`}
                    onClick={() => incrementLike(selectedPost._id)}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={share}
                    alt="share"
                    className="w-[35px] h-[35px]"
                    onClick={incrementShare}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={savedPosts[selectedPost?._id] ? saved : save}
                    alt="save"
                    className="w-[35px] h-[35px] cursor-pointer"
                    onClick={() => toggleSave(selectedPost?._id)}  
                  />
                </div>
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
    <div className="text-center text-xs mt-6 mb-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
    </div>
  );
};

export default BeehiveViewPosts;
