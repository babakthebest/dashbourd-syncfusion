import React from "react";
import { useStateContext } from "../../context/context";
//icons
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
//componnents
import { Pie, SparkLine, Stacked, Button } from "../../components";
import Layout from "./../../components/Layout";
//data
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../../data/dummyData.js";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
///////////////////////////////////////////////////////////////////////////////////////////

const Ecommerce = () => {
  const number = 938489;
  return (
    <>
      <Layout>
        <div className="mt-12">
          <div className="flex flex-wrap lg:flex-nowrap justify-center">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-3 bg-my-pattern bg-no-repeat bg-cover bg-center">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-400">درآمد</p>
                  <p className="text-2xl">1350$</p>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  color="white"
                  bgColor="blue"
                  text="دانلود"
                  borderRadius="10px"
                  size="md"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center m-3 gap-1 ">
              {earningData.map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 p-4 pt-6 rounded-2xl"
                >
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl opacity-70 rounded-full p-2 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">{item.amount}</span>
                    <span
                      className="text-sm ml-2"
                      style={{ color: item.pcColor }}
                    >
                      {item.percentage}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780 sm:w-400">
              <div className="flex justify-between">
                <p className="font-semibold text-xl">درآمد</p>
                <div className="flex item-center gap-5">
                  <p className="flex item-center gap-1 text-gray-600 hover:drop-shadow-xl">
                    <span>
                      <GoPrimitiveDot />
                    </span>
                    <span>هزینه ها</span>
                  </p>
                  <p className="flex item-center gap-1 text-green-400 hover:drop-shadow-xl">
                    <span>
                      <GoPrimitiveDot />
                    </span>
                    <span>بودجه</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 mt-10 justify-center">
                <div className="border-l-1 border-color m-4 pl-4">
                  <div>
                    <p>
                      <span className="p-1 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 mr-3">
                        23%
                      </span>
                      <span className="text-3xl font-semibold">
                        {number.toLocaleString()}
                      </span>
                    </p>
                    <p className="mt-1 text-gray-400"> بودجه</p>
                  </div>
                  <div className="mt-2 ">
                    <p>
                      <span className="text-3xl font-semibold">
                        {number.toLocaleString()}
                      </span>
                    </p>
                    <p className="mt-1 text-gray-400"> هزینه</p>
                  </div>
                  <div className="mt-5">
                    {/* <SparkLine
                      id="line-sparkline"
                      currentColor="blue"
                      type="Line"
                      height="80px"
                      width="250px"
                      color="blue"
                      data={SparklineAreaData}
                    /> */}
                  </div>
                </div>
                <div>
                  <Stacked width="320px" height="360px "></Stacked>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Ecommerce;
