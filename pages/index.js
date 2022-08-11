import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../context/context";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar";

export default function Home() {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed left-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="تنظیمات" position="Top">
            <button className="text-3xl p-1 hover:drop-shadow-xl hover:bg-light-gray hover:text-blue-300 rounded-full bg-blue-500 text-white">
              <FiSettings></FiSettings>
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar></Sidebar>
          </div>
        ) : (
          <div className=" w-0 dark:bg-secondary-dark-bg">
            <Sidebar></Sidebar>
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:mr-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
