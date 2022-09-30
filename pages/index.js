import Image from "next/image";
import logoImage from "../public/static/images/Logo-standalone-default-full-colour@1x.svg";
import React from "react";
import Main from "../src/components/Main";
import { ItemProvider } from "../src/context";

const Home = () => {
  return (
    <ItemProvider>
      <div className=" bg-[url('../public/static/images/backgrounds_login-background@1x.svg')] h-full w-[486px] md:w-full lg:w-full xl:w-full 2xl:w-full sm:w-full  md:h-full lg:h-full xl:h-full 2xl:h-full  bg-center bg-cover">
        <div className="flex justify-center h-[63rem] sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen ">
          <div className="flex justify-center items-center text-center ">
            <div className="flex flex-col h-100">
              <div className="">
                <div className="font-normal transition-all text-8xl mb-4 p-2">
                  <Image
                    src={logoImage}
                    alt="Picture of the Company"
                    width={375.06}
                    height={94}
                  />
                </div>
                <h1 className="font-exo2  h-[48px] w-[491px] text-[#313131] leading-[48px] text-[34.44px] tracking-normal transition-all text-4xl mb-4 p-2 text-center ">
                  MapAll Build details
                </h1>
              </div>
              <div className="max-h-[620px]">
                <Main />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItemProvider>
  );
};

export default Home;
