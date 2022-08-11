import React from "react";
import { useRouter } from "next/router";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Link from "next/link";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummyData";
import { useStateContext } from "../context/context";

const Sidebar = () => {
  const router = useRouter();
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <div className="item-center gap-3 ml-3 mt-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 ">
              <Link href="/" passHref>
                <a>
                  <SiShopware
                    onClick={handleCloseSidebar}
                    className="cursor-pointer mt-1"
                  ></SiShopware>
                </a>
              </Link>
              <Link href="/" passHref>
                <span
                  onClick={() => setActiveMenu(false)}
                  className="cursor-pointer"
                >
                  داشبورد
                </span>
              </Link>
            </div>

            <TooltipComponent content="بستن" position="BottomCenter">
              <button
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full hover:bg-light-gray"
              >
                <MdOutlineCancel></MdOutlineCancel>
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-5">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 text-gray-400 ">{item.title}</p>
                {item.links.map((link) => (
                  <div
                    key={link.name}
                    className={
                      router.pathname == `/${link.name}`
                        ? "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-white m-2 "
                        : "flex items-center gap-5 pr-4 pt-3 pb-2.5 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 "
                    }
                  >
                    <Link href={`/${link.name}`}>
                      <span onClick={handleCloseSidebar}>{link.icon}</span>
                    </Link>
                    <Link href={`/${link.name}`}>
                      <span onClick={handleCloseSidebar}>{link.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
