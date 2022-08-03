import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

export default function Home() {
  const active = true;
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg"></div>
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="تنظیمات" position="Top">
          <button className="text-3xl p-1 hover:drop-shadow-xl hover:bg-light-gray hover:text-blue-300 rounded-full bg-blue-500 text-white">
            <FiSettings></FiSettings>
          </button>
        </TooltipComponent>
      </div>
      {active ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          sidebar
        </div>
      ) : (
        <div className="w-0"> sidbar w-0</div>
      )}
      <div></div>
    </div>
  );
}
