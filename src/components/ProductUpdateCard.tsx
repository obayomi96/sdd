import React from "react";

interface ProductUpdateCardProps {
  title: string;
  description: string;
  srcUrl: string;
}

const ProductUpdateCard: React.FC<ProductUpdateCardProps> = ({
  title,
  description,
  srcUrl,
}) => {
  return (
    <div
      data-sal="zoom-out"
      data-sal-delay="200"
      data-sal-duration="900"
      data-sal-easing="ease"
      className="rounded-md min-w-full lg:min-w-[358px] h-[399px] flex flex-col border border-[#E8E8E8] mx-2 lg:my-0 my-2"
    >
      <div className="w-full h-[50%] py-3 bg-[#3884B60D] flex justify-center ">
        <img
          className="w-[266px] h-full  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          src={srcUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <p className="text-[18px] font-[700] text-[#323232] mb-5 mt-5">
          {title}
        </p>
        <p className="text-[16px] font-[400] text-[#323232]">{description}</p>
      </div>
    </div>
  );
};

export default ProductUpdateCard;
