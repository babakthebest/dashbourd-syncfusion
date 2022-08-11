import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const Navbutton = ({ title, customFunc, color, icon, dotcolor }) => {
  return (
    <div>
      <TooltipComponent content={title}>
        <button
          type="button"
          onClick={customFunc}
          style={{ color }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <span
            style={{ background: dotcolor }}
            className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2"
          />
          {icon}
        </button>
      </TooltipComponent>
    </div>
  );
};

export default Navbutton;
