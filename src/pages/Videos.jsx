import Intro from "../assets/VideoThree.mp4";
import Logo from "../assets/VideoTwo.mp4";
import Logo1 from "../assets/demo.mp4";
import Demo from "../assets/Intro.mp4";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-6 min-h-screen text-white bg-gray-900 bg-opacity-90 backdrop-blur-lg">
      <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
        Video Showcase
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center bg-white p-6 rounded-2xl shadow-2xl text-black backdrop-filter backdrop-blur-lg bg-opacity-80">
          <h2 className="text-2xl font-bold mb-2">Logo Animation</h2>
          <video className="rounded-lg shadow-md w-[500px] h-[280px]" controls>
            <source src={Logo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-center bg-white p-6 rounded-2xl shadow-2xl text-black backdrop-filter backdrop-blur-lg bg-opacity-80">
          <h2 className="text-2xl font-bold mb-2">Alternative Logo</h2>
          <video className="rounded-lg shadow-md w-[500px] h-[280px]" controls>
            <source src={Logo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-center bg-white p-6 rounded-2xl shadow-2xl text-black backdrop-filter backdrop-blur-lg bg-opacity-80">
          <h2 className="text-2xl font-bold mb-2">Demo</h2>
          <video className="rounded-lg shadow-md w-[500px] h-[280px]" controls>
            <source src={Demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-center bg-white p-6 rounded-2xl shadow-2xl text-black backdrop-filter backdrop-blur-lg bg-opacity-80">
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <video className="rounded-lg shadow-md w-[500px] h-[280px]" controls>
            <source src={Intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
