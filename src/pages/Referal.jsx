import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/LMDarkLogo.webp";
import { AppContext } from "./../context/AppContext";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
import Grow from "../assets/enroll.webp";

const GrowReferral = () => {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [posts, setPosts] = useState([
    { _id: "1", referral_code: "XYZ789", status: "failed", created_at: "2025-03-13T00:00:00Z" },
    { _id: "2", referral_code: "ABC123", status: "successful", created_at: "2025-03-18T00:00:00Z" },
    { _id: "3", referral_code: "LMN456", status: "pending", created_at: "2025-03-11T00:00:00Z" },
    { _id: "4", referral_code: "DEF321", status: "failed", created_at: "2025-03-04T00:00:00Z" },
    { _id: "5", referral_code: "GHI654", status: "successful", created_at: "2025-03-03T00:00:00Z" },
    { _id: "6", referral_code: "XYZ789", status: "successful", created_at: "2025-03-15T00:00:00Z" },
    { _id: "7", referral_code: "PQR789", status: "pending", created_at: "2025-03-08T00:00:00Z" },
    { _id: "8", referral_code: "ABC123", status: "pending", created_at: "2025-03-17T00:00:00Z" },
    { _id: "9", referral_code: "JKL987", status: "failed", created_at: "2025-02-27T00:00:00Z" },
    { _id: "10", referral_code: "LMN456", status: "successful", created_at: "2025-03-12T00:00:00Z" },
    { _id: "11", referral_code: "DEF321", status: "successful", created_at: "2025-03-06T00:00:00Z" },
    { _id: "12", referral_code: "PQR789", status: "failed", created_at: "2025-03-07T00:00:00Z" },
    { _id: "13", referral_code: "JKL987", status: "successful", created_at: "2025-02-28T00:00:00Z" },
    { _id: "14", referral_code: "ABC123", status: "failed", created_at: "2025-03-16T00:00:00Z" },
    { _id: "15", referral_code: "GHI654", status: "pending", created_at: "2025-03-02T00:00:00Z" },
    { _id: "16", referral_code: "DEF321", status: "pending", created_at: "2025-03-05T00:00:00Z" },
    { _id: "17", referral_code: "XYZ789", status: "successful", created_at: "2025-03-09T00:00:00Z" },
    { _id: "18", referral_code: "JKL987", status: "pending", created_at: "2025-02-27T00:00:00Z" },
    { _id: "19", referral_code: "XYZ789", status: "pending", created_at: "2025-03-14T00:00:00Z" },
    { _id: "20", referral_code: "XYZ789", status: "successful", created_at: "2025-03-10T00:00:00Z" }
  ]);
  const { userData, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter posts based on search and status
  const filteredPosts = posts.filter((post) => {
    const query = search.toLowerCase();
    const isStatusMatch = selectedStatus ? post.status.toLowerCase() === selectedStatus.toLowerCase() : true;
    return post.referral_code.toLowerCase().includes(query) && isStatusMatch;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pt-2">
      <div className="relative">
        <div className="w-full max-w-[1200px] mx-auto p-4">
          <div className="flex items-center gap-3 shadow-lg p-4 bg-white">
            <img src={Grow} alt="about_one" className="w-[72px] h-[72px]" />
            <div className="flex-1 text-center">
              <p className="lg:text-3xl text-2xl font-bold">
                <span className="text-green-500">My</span> Referrals
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4 gap-3">
            <input
              type="text"
              placeholder="Referral Code"
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
              <option value="successful">Successful</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
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
                  <th className="border px-4 py-2">Referral Code</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Date Created</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2 text-center">{post.referral_code}</td>
                      <td className={`border px-4 py-2 text-center ${
                        post.status === "successful" ? "text-green-500" : post.status === "failed" ? "text-red-500" : "text-yellow-500"
                      }`}>
                        {post.status}
                      </td>
                      <td className="border px-4 py-2 text-center">{new Date(post.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4">No referrals found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-center mt-6 gap-1.5">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400">Prev</button>
            {Array.from({ length: Math.ceil(filteredPosts.length / rowsPerPage) }, (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-white text-gray-500'}`}>{index + 1}</button>
            ))}
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(filteredPosts.length / rowsPerPage)} className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowReferral;