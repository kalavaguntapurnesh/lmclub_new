import React, { useState, useContext } from 'react'; 
import Grow from "../assets/enroll.webp";
import { AppContext } from "./../context/AppContext";

const GrowRewardCard = () => {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { userData, backendUrl } = useContext(AppContext);
  
  const [posts, setPosts] = useState([
    // Your 20 sample rewards data here...
    { _id: "1", reward_id: { reward_type: "Gift Card", description: "Amazon Gift Card", value: "$50" }, redeemed: false, earned_on: "2025-03-15T00:00:00Z" },
  { _id: "2", reward_id: { reward_type: "Cashback", description: "5% cashback", value: "$10" }, redeemed: true, earned_on: "2025-02-20T00:00:00Z" },
  { _id: "3", reward_id: { reward_type: "Discount", description: "15% off next purchase", value: "15%" }, redeemed: false, earned_on: "2025-03-10T00:00:00Z" },
  { _id: "4", reward_id: { reward_type: "Points", description: "Earned 200 points", value: "200 Points" }, redeemed: true, earned_on: "2025-03-05T00:00:00Z" },
  { _id: "5", reward_id: { reward_type: "Gift Card", description: "Starbucks Gift Card", value: "$25" }, redeemed: false, earned_on: "2025-03-01T00:00:00Z" },
  { _id: "6", reward_id: { reward_type: "Cashback", description: "10% cashback", value: "$15" }, redeemed: false, earned_on: "2025-02-28T00:00:00Z" },
  { _id: "7", reward_id: { reward_type: "Discount", description: "25% off electronics", value: "25%" }, redeemed: true, earned_on: "2025-03-12T00:00:00Z" },
  { _id: "8", reward_id: { reward_type: "Gift Card", description: "Walmart Gift Card", value: "$30" }, redeemed: true, earned_on: "2025-03-09T00:00:00Z" },
  { _id: "9", reward_id: { reward_type: "Cashback", description: "2% cashback on fuel", value: "$5" }, redeemed: false, earned_on: "2025-03-14T00:00:00Z" },
  { _id: "10", reward_id: { reward_type: "Points", description: "Earned 500 travel points", value: "500 Points" }, redeemed: false, earned_on: "2025-03-07T00:00:00Z" },
  { _id: "11", reward_id: { reward_type: "Gift Card", description: "Apple Gift Card", value: "$100" }, redeemed: true, earned_on: "2025-02-25T00:00:00Z" },
  { _id: "12", reward_id: { reward_type: "Discount", description: "10% off online order", value: "10%" }, redeemed: false, earned_on: "2025-03-03T00:00:00Z" },
  { _id: "13", reward_id: { reward_type: "Cashback", description: "7% cashback on dining", value: "$8" }, redeemed: true, earned_on: "2025-03-02T00:00:00Z" },
  { _id: "14", reward_id: { reward_type: "Gift Card", description: "Google Play Gift Card", value: "$20" }, redeemed: false, earned_on: "2025-02-27T00:00:00Z" },
  { _id: "15", reward_id: { reward_type: "Points", description: "Earned 1000 shopping points", value: "1000 Points" }, redeemed: false, earned_on: "2025-03-06T00:00:00Z" },
  { _id: "16", reward_id: { reward_type: "Discount", description: "20% off next ride", value: "20%" }, redeemed: true, earned_on: "2025-03-11T00:00:00Z" },
  { _id: "17", reward_id: { reward_type: "Gift Card", description: "Uber Eats Gift Card", value: "$40" }, redeemed: false, earned_on: "2025-03-16T00:00:00Z" },
  { _id: "18", reward_id: { reward_type: "Cashback", description: "4% cashback on travel", value: "$12" }, redeemed: false, earned_on: "2025-03-04T00:00:00Z" },
  { _id: "19", reward_id: { reward_type: "Points", description: "Earned 300 fitness points", value: "300 Points" }, redeemed: true, earned_on: "2025-03-08T00:00:00Z" },
  { _id: "20", reward_id: { reward_type: "Gift Card", description: "Netflix Gift Card", value: "$15" }, redeemed: false, earned_on: "2025-02-26T00:00:00Z" }
  ]);

  // Filter posts based on search and status
  const filteredPosts = posts.filter((post) => {
    const query = search.toLowerCase();
    const isStatusMatch = selectedStatus ? post.redeemed.toString() === selectedStatus : true;
    return post.reward_id.reward_type.toLowerCase().includes(query) && isStatusMatch;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pt-2">
      <div className="relative w-full max-w-[1200px] mx-auto p-4">
        <div className="flex items-center gap-3 shadow-lg p-4 bg-white">
          <img src={Grow} alt="about_one" className="w-[72px] h-[72px]" />
          <div className="flex-1 text-center">
            <p className="lg:text-3xl text-2xl font-bold">
              <span className="text-green-500">My</span> RewardCard
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 gap-3">
          <input
            type="text"
            placeholder="Reward Type"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="px-4 pl-12 w-full md:w-[500px] py-3 rounded border border-green-500"
          />
          <select
            className="border px-4 py-3 rounded"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="true">Redeemed</option>
            <option value="false">Not Redeemed</option>
          </select>
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

        <div className="overflow-x-auto mt-5 lg:px-20 px-1">
          <table className="w-full border border-gray-100">
            <thead>
              <tr className="bg-green-400">
                <th className="border px-4 py-2">Reward Type</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Value</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Earned On</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.length > 0 ? (
                currentPosts.map((post, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2 text-center">{post.reward_id.reward_type}</td>
                    <td className="border px-4 py-2 text-center">{post.reward_id.description}</td>
                    <td className="border px-4 py-2 text-center">{post.reward_id.value}</td>
                    <td className={`border px-4 py-2 text-center ${post.redeemed ? "text-green-500" : "text-yellow-500"}`}>
                      {post.redeemed ? "Redeemed" : "Not Redeemed"}
                    </td>
                    <td className="border px-4 py-2 text-center">{new Date(post.earned_on).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">No rewards found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Component */}
        <div className="flex justify-center mt-6 gap-1.5">
          <button 
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
          >Prev</button>
          {Array.from({ length: Math.ceil(filteredPosts.length / rowsPerPage) }, (_, index) => (
            <button 
              key={index + 1} 
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-white text-gray-500'}`}
            >{index + 1}</button>
          ))}
          <button 
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredPosts.length / rowsPerPage)}
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
          >Next</button>
        </div>
      </div>
    </div>
  );
};

export default GrowRewardCard;
