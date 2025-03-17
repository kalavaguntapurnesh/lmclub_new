import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./../context/AppContext";
import Swal from "sweetalert2";
import Logo from "../assets/LMDarkLogo.webp";
import { useContext } from "react";

const BeehiveAddPosts = () => {

const { userData, token, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    postName: "",
    description: "",
    eventName: "",
    companyName: "",
    eventStartDate: "",
    eventEndDate: "",
    // eventStartTime: "",
    // eventEndTime: "",
    couponCode: "",
    validUpto: "",
    location:""
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      category: selectedCategory,
    }));
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
const [image, setImages] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Dynamically adjust the form data based on the category
    const formattedFormData = {
      ...formData,
      userId: userData._id,
      category: selectedCategory,
    };

    console.log("formatted data", formattedFormData);

    const formData1 = new FormData();

    // Append the JSON fields to FormData (formData1)
    Object.keys(formattedFormData).forEach((key) => {
      if (formattedFormData[key]) {
        formData1.append(key, formattedFormData[key]);
      }
    });
  
    // Append the image file if it's selected
    if (image) {
      formData1.append('image', image);
    }
    console.log("image: ", image)
    console.log("formData1 :",formData1)

    for (let pair of formData1.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    // For Events category, ensure event start and end date/time are present
    if (selectedCategory === "Events") {
      if (!formattedFormData.eventStartDate || !formattedFormData.eventEndDate) {
       
        Swal.fire({
            html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 30px;">
                  <img src="${Logo}" alt="Logo" 
                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px;" />
                  <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                    <span style="color: black;">LM</span>
                    <span style="color: rgb(37, 218, 73);">Club</span>
                  </h4>
                </div>
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 10px;">
                  <p>Event start and end date must be provided.</p>
                </div>
              </div>
            `,
            customClass: {
              confirmButton: "swal-custom-ok-button",
            },
            footer: `
              <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
            `,
          });
        return;
      }
    }
  
    // For Coupons/Discount category, ensure validUpto is present
    if (selectedCategory === "Coupons/Discount") {
      if (!formattedFormData.validUpto) {
       

        Swal.fire({
            html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 30px;">
                  <img src="${Logo}" alt="Logo" 
                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px;" />
                  <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                    <span style="color: black;">LM</span>
                    <span style="color: rgb(37, 218, 73);">Club</span>
                  </h4>
                </div>
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 10px;">
                  <p>Coupon expiry date must be provided.</p>
                </div>
              </div>
            `,
            customClass: {
              confirmButton: "swal-custom-ok-button",
            },
            footer: `
              <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
            `,
          });

        return;
      }
    }
  
    // Proceed with submission
      axios.post(backendUrl + '/api/beehive/adding-post',formData1, 
      {
        headers: {
          "Content-Type": "multipart/form-data",  // This is important for file uploads
        },
      }
      )
      .then(response => {
        console.log(response);
        if (response.data.success === true) {
          Swal.fire({
            html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 30px;">
                  <img src="${Logo}" alt="Logo" 
                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; " />
                  <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                    <span style="color: black;">LM</span>
                    <span style="color: rgb(37, 218, 73);">Club</span>
                  </h4>
                </div>
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin-bottom: 10px;">
                  <p>Your Post added successfully</p>
                </div>
              </div>
            `,
            customClass: {
              confirmButton: "swal-custom-ok-button",
            },
            footer: `
              <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
            `,
          });
  
          setFormData({
            postName: '',
            description: '',
            eventName: '',
            companyName: '',
            eventStartDate: '',
            eventEndDate: '',
            // eventStartTime: '',
            // eventEndTime: '',
            couponCode: '',
            validUpto: '',
            location:''
          });

          setImages(null);
          navigate('/beehive-workflow/view-posts')
        } else {
          Swal.fire({
            html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 30px;">
                  <img src="${Logo}" alt="Logo" 
                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px;" />
                  <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                    <span style="color: black;">LM</span>
                    <span style="color: rgb(37, 218, 73);">Club</span>
                  </h4>
                </div>
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 10px;">
                  <p>Error while submitting the post.</p>
                </div>
              </div>
            `,
            customClass: {
              confirmButton: "swal-custom-ok-button",
            },
            footer: `
              <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
            `,
          });

        }
      })
      .catch(error => {
        console.error("There was an error submitting the form:", error);
        Swal.fire({
            html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 30px;">
                  <img src="${Logo}" alt="Logo" 
                    style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; " />
                  <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                    <span style="color: black;">LM</span>
                    <span style="color: rgb(37, 218, 73);">Club</span>
                  </h4>
                </div>
                <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 10px;">
                  <p>There was an error submitting the post.</p>
                </div>
              </div>
            `,
            customClass: {
              confirmButton: "swal-custom-ok-button",
            },
            footer: `
              <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
            `,
          });


      });
  };



  return (
    <div className="w-full flex items-center justify-center pt-16 px-4">
      <div className="max-w-[1000px] w-full mx-auto h-auto flex flex-col items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-center gap-4 bg-white p-6 rounded-lg">
        <div className="flex flex-wrap flex-col items-center pb-3">
          <div className="text-center mt-4 flex items-center justify-between">
            <div className="flex justify-center gap-20 text-center mt-4">
                <img src={Logo} alt="logo" className="w-[52px] lg:h-auto h-[52px]" />
                <h3 className="lg:text-3xl text-2xl font-bold text-headingColor">
                  Choose Your Preference and Proceed
                </h3>
                <h1> </h1>
              </div>
          </div>

          <form onSubmit={handleSubmit} className="w-[70%] space-y-4 mt-10 gap-2">
            {/* Select Category */}
            <div className="w-full">
              <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                Select Category
              </label>
              <select
                className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select a Category</option>
                <option value="Coupons/Discount">Coupons/Discount</option>
                <option value="Dining">Dining</option>
                <option value="Events">Events</option>
                <option value="Emergency Information">Emergency Information</option>
                <option value="Product">Product</option>
              </select>
            </div>

            {/* Category-Specific Fields */}
            {selectedCategory === "Events" && (
              <>
                <div className=" w-full">
                  <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                    placeholder="Event Name"
                    required
                  />
                </div>

                <div className=" w-full">
                  <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                    placeholder="Company Name"
                  />
                </div>
                <div className="flex w-full gap-1">
                    <div className=" w-full">
                    <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                        Event Start Date
                    </label>
                    <input
                        type="date"
                        name="eventStartDate"
                        value={formData.eventStartDate}
                        onChange={handleInputChange}
                        className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                        required
                    />
                    </div>
                    
                    <div className="w-full">
                    <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                        Event End Date
                    </label>
                    <input
                        type="date"
                        name="eventEndDate"
                        value={formData.eventEndDate}
                        onChange={handleInputChange}
                        className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                        required
                    />
                    </div>
                </div>
                <div className="flex w-full gap-1">
                    {/* <div className="w-full">
                    <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                        Event Start Time
                    </label>
                    <input
                        type="time"
                        name="eventStartTime"
                        value={formData.eventStartTime}
                        onChange={handleInputChange}
                        className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                        required
                    />
                    </div> */}
                    {/* <div className="w-full">
                      <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                          Event End Time
                      </label>
                      <input
                          type="time"
                          name="eventEndTime"
                          value={formData.eventEndTime}
                          onChange={handleInputChange}
                          className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                          required
                      />
                    </div> */}

                </div>
              </>
            )}

            {selectedCategory !== "Events" && (
              <>
                <div>
                  <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                    Post Name
                  </label>
                  <input
                    type="text"
                    name="postName"
                    value={formData.postName}
                    onChange={handleInputChange}
                    className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                    placeholder="Post Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                    placeholder="Description"
                    required
                  />
                </div>
              </>
            )}

            {selectedCategory === "Coupons/Discount" && (
              <>
                <div>
                  <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    name="couponCode"
                    value={formData.couponCode}
                    onChange={handleInputChange}
                    className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                    placeholder="Coupon Code"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                    Valid Upto
                  </label>
                  <input
                    type="date"
                    name="validUpto"
                    value={formData.validUpto}
                    onChange={handleInputChange}
                    className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                    required
                  />
                </div>
              </>
            )}

            
              <div className="w-full">
                    <label className="block mb-1 text-sm font-bold text-colorThree text-left">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                        placeholder="USA, GA, Alpharetta, Park Woods Circle, 30005"
                        required
                    />
                    </div>
            {/* Image Section with Two Buttons */}
            <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-colorThree text-left"
                >
                  Picture/Videos
                </label>
            <div className="w-[95%] flex justify-center items-start  gap-4 mb-2">
                
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://res.cloudinary.com/dieqhbgmy/image/upload/v1740039858/uploads/tntaay3cfzuiyeregrvg.png"
                  }
                  alt="Doctor"
                  className="w-12 h-12 rounded-full cursor-pointer object-cover"
                />

                <input
                  type="file"
                  className="border-2 border-dotted border-gray-500 p-2 rounded-lg hover:bg-gray-100"
                  accept="image/*"
                  onChange={(e) => setImages(e.target.files[0])}
                  required
                />
              </div>


            <div className="flex justify-between p-4">
              <button onClick={()=>{navigate('/beehive-workflow')}}
                  className="bg-blue-500 text-white px-8 py-2 rounded-lg"
                >
                  Back
                </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-center text-xs mt-6 mb-4">
                    <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                </div>
        </div>
      </div>

     
    </div>
  );
};

export default BeehiveAddPosts;
