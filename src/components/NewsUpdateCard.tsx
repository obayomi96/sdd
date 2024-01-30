import React from "react";
interface NewsUpdateCardProps {
  title: string;
  description: string;
  srcUrl: string;
}

const NewsUpdateCard: React.FC<NewsUpdateCardProps> = ({
  title,
  description,
  srcUrl,
}) => {
  return (
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-duration="900"
      data-sal-easing="ease"
      className="rounded-md min-w-full lg:min-w-[358px] min-h-[399px] flex flex-col border border-[#E8E8E8] mx-2 box-border p-0 lg:my-0 my-2"
    >
      <div className="w-full h-[50%] flex justify-center rounded-md bg-[#EAF3F2] p-0">
        <img
          className="hover:opacity-75 cursor-pointer p-0 h-[217px] w-fit"
          src={srcUrl}
          alt=""
        />
      </div>
      <div className="p-4 box-border">
        <p className="text-[18px] font-[700] text-[#323232] pb-5 mt-5">
          {title}
        </p>
        <p className="text-[16px] font-[400] text-[#323232]">{description}</p>
        <div className="text-[14px] font-[700] text-[#57BE6C] pt-2">
          Read more
        </div>
      </div>
    </div>
  );
};

export default NewsUpdateCard;
