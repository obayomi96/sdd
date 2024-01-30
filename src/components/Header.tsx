import React from "react";
import clsx from "clsx";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

interface HeaderProps {
  loggedIn?: boolean | null;
  currentUserInfo?: any;
  headerTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ loggedIn = true, headerTitle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={clsx({
        "hidden lg:flex z-10 top-0 items-center justify-between bg-[#FFFFFF] w-full h-[100px] m-auto mt-0 relative px-6 lg:pr-10":
          true,
        "bg-[#FBFEF7]": loggedIn,
      })}
    >
      {loggedIn ? (
        <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-evenly">
          <div className="flex flex-col  pl-0 m-auto w-[30%] ml-3 ">
            <>
              <div className="text-[20px] font-[600]">
                {headerTitle ? headerTitle : "Welcome, Ayesha! 🙂"}
              </div>
              <p className="text-sm text-[#2e2d2d]">
                {headerTitle ? "" : "Get and manage purchase orders on the go."}
              </p>
            </>
          </div>
          <div className="bg-transparent p-2 w-[40%] h-[40px] flex items-center justify-start mr-4 border border-[#ccc] rounded-[40px]">
            <input
              type="text"
              name="search"
              placeholder="Search.."
              autoComplete="off"
            />
          </div>

          <div className="flex justify-end items-center w-[100px]">
            <button
              className="ml-4 w-[30px]  h-[30px]"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <NotificationsIcon className="w-[50px] h-[50px]" />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="w-[250px] h-[300px] p-3">
                <p className="w-full border-b border-[#ddd]">Notifications</p>
                <div className="text-center mt-4 w-full h-full m-auto">
                  <p>Noting to see!</p>
                </div>
              </div>
            </Menu>
          </div>
          <div className="w-[250px] flex items-center justify-between ml-[30px] px-5 py-2 bg-[#F9F9F9] rounded-3xl">
            <img
              src="/assets/images/avatar.png"
              alt="avatar"
              className="w-[40px] h-[40px] rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-semibold ">Ayesha Habib</p>
              <p className="text-xs font-normal text-[#2e2d2d]">
                Warephasetech
              </p>
            </div>
            <div className="w-auto h-auto">
              <ArrowDropDownRoundedIcon fontSize="large" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-[5vw] flex items-center justify-between text-black my-4">
          <p className="font-gentiumBasic font-[700] text-[34px]">JetVision</p>
        </div>
      )}
    </div>
  );
};

export default Header;
