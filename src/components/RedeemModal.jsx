import Logo from "../assets/LMDark.webp";

const RedeemModal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-auto w-full">
        <a href="/" className="flex justify-center items-center mb-4">
          <img src={Logo} alt="" className="w-12 h-12" />
        </a>

        <h2 className="text-2xl font-semibold text-center mb-4">
          <span className="text-mainColor">Claim</span> Your Reward Now
        </h2>
        <form onSubmit={handleSubmit} className="md:space-y-4 space-y-3">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold ">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required="true"
              //   onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold  "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" border sm:text-sm rounded-md block w-full p-2.5 "
              required="true"
              //   onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              rows="4"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-2 font-medium rounded-full"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-mainColor text-white px-6 py-2 font-medium rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RedeemModal;
