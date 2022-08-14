import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummyData";
import {useStateContext} from "../context/context"

const ThemSettings = () => {
  const {currentColor,
        currentMode,
        setMode,
        setColor,
        setThemeSettings} =useStateContext()
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 left-0">
      <div className="float-left h-screen dark:text-gray-200 dark:[#484B52] w-400 bg-white">
        <div className="flex justify-between items-center p-4 mr-4 ">
          <p className="font-semibold text-lg"> تنظیمات</p>
          <button
            type="button"
            className="text-2xl p-2 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            onClick={() => setThemeSettings(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 mr-4 ">
          <p className="font-semibold text-lg">تنظیمات تم</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              value="Light"
              name="theme"
              className="cursor-pointer"
              checked={currentMode === "Light"}
              onChange={setMode}
            />
            <label htmlFor="light" className="mr-1 cursor-pointer text-md">
              روشن
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              value="Dark"
              name="theme"
              className="cursor-pointer"
              checked={currentMode === "Dark"}
              onChange={setMode}
            />
            <label htmlFor="dark" className="mr-1 cursor-pointer text-md">
              دارک
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 mr-4 ">
          <p className="font-semibold text-lg">رنگ تم</p>
          <div className=" flex gap-2">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="flex item-center relative mt-2 gap-5 cursor-pointer ">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`mr-2 text-2xl text-white 
                    ${item.color===currentColor ? "block" : "hidden"}`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemSettings;
