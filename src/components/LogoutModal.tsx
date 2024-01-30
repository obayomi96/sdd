import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../svgs/small-close.svg";
import Button from "./Button";
import ModalPortal from "./ModalPortal";

interface IProps {
  closeModal: () => void;
  isVisible: boolean;
}
const LogoutModal: React.FC<IProps> = ({ closeModal, isVisible = false }) => {
  const navigate = useNavigate();

  return isVisible ? (
    <ModalPortal>
      <div
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.75)",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
        }}
        className="w-screen h-screen fixed flex flex-col justify-center items-center top-0 bg-opacity-20 backdrop-blur-[5px]"
      >
        <div className="flex justify-end  w-[90%] lg:w-[462px] mx-auto py-2">
          <div
            onClick={() => {
              closeModal();
            }}
            className="p-2 bg-white rounded-full cursor-pointer"
          >
            <CloseIcon className="h-full w-full" />
          </div>
        </div>
        <div className="bg-white h-[400px] w-[90%] lg:w-[462px] px-6 pt-6 pb-4 lg:p-6 shadow-lg rounded-[16px] border-box">
          <div className="w-full h-full my-auto text-center flex flex-col justify-center items-center">
            <div className="my-6 text-black">
              Are you sure you want to logout?
            </div>
            <Button
              label="Logout"
              size="medium"
              variant="primary"
              onClick={() => navigate("/home")}
              noRounded={true}
              additionalClassname="hover:opacity-75 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </ModalPortal>
  ) : null;
};

export default LogoutModal;
