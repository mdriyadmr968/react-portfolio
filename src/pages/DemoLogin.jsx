import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useParams } from "react-router";
import { projectsData } from "../config";

const DemoLogin = () => {
  const {id} = useParams();
  
    const project = projectsData[id];
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
          <h1 className="text-2xl font-bold mb-3">
            Announcement for {project?.name}
          </h1>
          <p className="text-gray-700 mb-3">
            This app is no longer maintained by Tale Wallet. To checkout the
            app, please login with this email and otp.
          </p>
          <p className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300 mb-1">
            demo@onnftverse.com
          </p>
          <p className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300">
            123456
          </p>
          <div className="w-full flex justify-center items-center mt-4">
            <a
              href={project?.url}
              target="__blank"
              class="relative px-5 py-2 font-medium text-white group"
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span class="relative">Open {project?.name}</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DemoLogin;
