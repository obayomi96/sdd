import React from "react";
import Button from "./Button";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

function IntroCard() {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-duration="900"
      data-sal-easing="ease"
      data-sal-repeat
      className="w-full h-full z-100"
    >
      <div className="w-full h-auto lg:h-[233px] bg-gradient-to-r from-[#3884B6] from-10% to-[#81e595] via-30% to-80% mt-4 rounded-lg p-5 lg:p-8 flex flex-wrap lg:flex-nowrap justify-start items-center box-border">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-xl mb-4">Exciting features coming soon! 🚀</h1>
          <p className="text-[#2e2d2d]">
            We're thrilled to announce upcoming <br /> enhancements to make your
            experience even better!
          </p>
          <div className="w-full lg:w-[180px] ">
            <Button
              label="I want to be notified"
              variant="primary"
              additionalClassname="mt-3 hover:opacity-75 cursor-pointer"
              iconPosition="left"
              icon={<CampaignRoundedIcon />}
              noRounded={true}
            />
          </div>
        </div>
        <div className="lg:w-20" />

        <div className="w-full flex justify-start items-baseline mt-4 mb-8 mx-auto">
          <div className="text-center p-2 w-[63px] h-[68px] lg:w-[93px] lg:h-[98px] bg-[#fff] border-none rounded-lg mx-1 ">
            <div className="animate-pulse text-[25px] lg:text-[40px] font-[800] line-through decoration-1 decoration-white">
              00
            </div>
            <p className="text-xs text-center text-[#323232]">DAYS</p>
          </div>
          <div className="text-center p-2 lg:w-[93px] lg:h-[98px] w-[63px] h-[68px] bg-[#fff] border-none rounded-lg lg:mx-1 ">
            <div className="animate-pulse text-[25px] lg:text-[40px] font-[800] text line-through decoration-1 decoration-white">
              05
            </div>
            <p className="text-xs text-center text-[#323232]">HOURS</p>
          </div>{" "}
          <div className="text-center p-2 lg:w-[93px] lg:h-[98px]  w-[63px] h-[68px] bg-[#fff] border-none rounded-lg mx-1 ">
            <div className="animate-pulse text-[25px] lg:text-[40px] font-[800] line-through decoration-1 decoration-white">
              20
            </div>
            <p className="text-xs text-center text-[#323232]">MINUTES</p>
          </div>{" "}
          <div className="text-center p-2 lg:w-[93px] lg:h-[98px] w-[64px] h-[68px] bg-[#fff] border-none rounded-lg lg:mx-1">
            <div className="animate-pulse text-[25px] lg:text-[40px] font-[800] line-through decoration-1 decoration-white">
              10
            </div>
            <p className="text-xs text-center text-[#323232]">SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroCard;
