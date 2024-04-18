
import MapComponent from "./components/MapComponent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
  <>
  <div className="p-5 text-xl  text-gray-900 bg-white border shadow-2xl flex  items-center" >
    <Navbar />
  </div>
  <div className="flex bg-[#ffffff]"  >
    <div className="hidden lg:block h-screen  w-[15%]">
    <Sidebar />
    </div>
    <div className="w-[100%] h-screen ">
    <MapComponent />
    </div>
  </div>
  </>
  );
}
